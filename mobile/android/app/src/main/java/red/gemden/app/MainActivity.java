package red.gemden.app;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle state) {
        registerPlugin(GemDenWidgetPlugin.class);
        super.onCreate(state);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        String id = intent.getStringExtra(GassiWidget.PLACE);
        if (getBridge() == null || !GassiWidget.isPlaceId(id)) return;
        Uri place = Uri.parse(getBridge().getAppUrl()).buildUpon()
            .path("/treffpunkte/index.html")
            .clearQuery()
            .appendQueryParameter("leistung", "SERVICE-RUBYBUBYS-HERZ-SCHNAUZE")
            .appendQueryParameter("ort", id)
            .build();
        getBridge().getWebView().loadUrl(place.toString());
        intent.removeExtra(GassiWidget.PLACE);
    }
}
