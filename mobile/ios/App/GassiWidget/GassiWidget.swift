import SwiftUI
import WidgetKit

struct GassiEntry: TimelineEntry {
    let date = Date()
    var id = ""
    var name = ""
    var summary = ""
    var next = ""
    var updated: Date?

    static func saved() -> GassiEntry {
        let shared = UserDefaults(suiteName: "group.red.gemden.app")
        guard let place = shared?.dictionary(forKey: "gassiWidget") else { return GassiEntry() }
        let timestamp = place["updated"] as? TimeInterval
        return GassiEntry(
            id: place["id"] as? String ?? "",
            name: place["name"] as? String ?? "",
            summary: place["summary"] as? String ?? "",
            next: place["next"] as? String ?? "",
            updated: timestamp.map { Date(timeIntervalSince1970: $0) }
        )
    }
}

struct GassiProvider: TimelineProvider {
    func placeholder(in context: Context) -> GassiEntry { GassiEntry(name: "Mein Gassi-Ort") }
    func getSnapshot(in context: Context, completion: @escaping (GassiEntry) -> Void) {
        completion(.saved())
    }
    func getTimeline(in context: Context, completion: @escaping (Timeline<GassiEntry>) -> Void) {
        completion(Timeline(entries: [.saved()], policy: .never))
    }
}

struct GassiWidgetView: View {
    let entry: GassiEntry

    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Text("Mein Gassi-Ort").font(.caption).foregroundStyle(.secondary)
            Text(entry.name.isEmpty ? "Gassi-Ort in GemDen wählen" : entry.name)
                .font(.headline).lineLimit(2)
            if !entry.next.isEmpty { Text(entry.next).font(.caption) }
            if !entry.summary.isEmpty, let updated = entry.updated {
                Text(entry.summary).font(.caption).lineLimit(2)
                Text(updated, style: .relative).font(.caption2).foregroundStyle(.secondary)
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading)
        .containerBackground(Color(red: 0.89, green: 0.93, blue: 0.86), for: .widget)
        .widgetURL(URL(string: "gemden://gassi/" + entry.id))
    }
}

@main
struct GemDenGassiWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: "GemDenGassiWidget", provider: GassiProvider()) { entry in
            GassiWidgetView(entry: entry)
        }
        .configurationDisplayName("Mein Gassi-Ort")
        .description("Nächste Gassirunde und letzter Check-in-Stand für deinen gemerkten Ort.")
        .supportedFamilies([.systemSmall, .systemMedium])
    }
}
