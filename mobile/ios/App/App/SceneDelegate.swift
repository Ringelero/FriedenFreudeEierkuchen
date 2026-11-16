import UIKit
import Capacitor
import EventKit
import EventKitUI
import WidgetKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }

        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = GemDenBridgeViewController()
        window?.makeKeyAndVisible()

        SceneDelegateProxy.shared.scene(scene, willConnectTo: session, options: connectionOptions)
        if let url = connectionOptions.urlContexts.first?.url {
            DispatchQueue.main.async { self.openGassiPlace(url) }
        }
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        if let url = URLContexts.first?.url { openGassiPlace(url) }
        SceneDelegateProxy.shared.scene(scene, openURLContexts: URLContexts)
    }

    func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
        SceneDelegateProxy.shared.scene(scene, continue: userActivity)
    }

    private func openGassiPlace(_ url: URL) {
        guard url.scheme == "gemden", url.host == "gassi",
              let id = UUID(uuidString: url.lastPathComponent),
              let view = window?.rootViewController as? GemDenBridgeViewController else { return }
        var target = URLComponents()
        target.scheme = "capacitor"
        target.host = "localhost"
        target.path = "/treffpunkte/index.html"
        target.queryItems = [
            URLQueryItem(name: "leistung", value: "SERVICE-RUBYBUBYS-HERZ-SCHNAUZE"),
            URLQueryItem(name: "ort", value: id.uuidString.lowercased())
        ]
        if let location = target.url { view.webView?.load(URLRequest(url: location)) }
    }
}

final class GemDenBridgeViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        bridge?.registerPluginInstance(GemDenWidgetPlugin())
    }
}

@objc(GemDenWidgetPlugin)
final class GemDenWidgetPlugin: CAPPlugin, CAPBridgedPlugin, EKEventEditViewDelegate {
    let identifier = "GemDenWidgetPlugin"
    let jsName = "GemDenWidget"
    let pluginMethods: [CAPPluginMethod] = [
        .init(name: "setPlace", returnType: CAPPluginReturnPromise),
        .init(name: "addToCalendar", returnType: CAPPluginReturnPromise)
    ]
    private let store = EKEventStore()

    @objc func setPlace(_ call: CAPPluginCall) {
        let id = call.getString("id") ?? ""
        guard id.isEmpty || UUID(uuidString: id) != nil,
              let shared = UserDefaults(suiteName: "group.red.gemden.app") else {
            call.reject("Widget storage unavailable")
            return
        }
        if id.isEmpty {
            shared.removeObject(forKey: "gassiWidget")
        } else {
            shared.set([
                "id": id,
                "name": String((call.getString("name") ?? "").prefix(160)),
                "summary": String((call.getString("summary") ?? "").prefix(160)),
                "next": String((call.getString("next") ?? "").prefix(100)),
                "updated": Date().timeIntervalSince1970
            ], forKey: "gassiWidget")
        }
        WidgetCenter.shared.reloadTimelines(ofKind: "GemDenGassiWidget")
        call.resolve()
    }

    @objc func addToCalendar(_ call: CAPPluginCall) {
        guard #available(iOS 17, *), let start = call.getDouble("start"),
              let end = call.getDouble("end"), end > start else {
            call.reject("Calendar editor unavailable")
            return
        }
        DispatchQueue.main.async {
            guard let presenter = self.bridge?.viewController, presenter.presentedViewController == nil else {
                call.reject("Calendar editor unavailable")
                return
            }
            let event = EKEvent(eventStore: self.store)
            event.title = call.getString("title")
            event.location = call.getString("place")
            event.startDate = Date(timeIntervalSince1970: start / 1000)
            event.endDate = Date(timeIntervalSince1970: end / 1000)
            if let link = call.getString("link") { event.url = URL(string: link) }
            let editor = EKEventEditViewController()
            editor.eventStore = self.store
            editor.event = event
            editor.editViewDelegate = self
            presenter.present(editor, animated: true)
            call.resolve()
        }
    }

    func eventEditViewController(_ controller: EKEventEditViewController, didCompleteWith action: EKEventEditViewAction) {
        controller.dismiss(animated: true)
    }
}
