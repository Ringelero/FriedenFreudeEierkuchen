package red.gemden.app;

import android.content.Intent;
import android.provider.CalendarContract;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "GemDenWidget")
public class GemDenWidgetPlugin extends Plugin {
    @PluginMethod
    public void setPlace(PluginCall call) {
        String id = call.getString("id", "");
        if (!id.isEmpty() && !GassiWidget.isPlaceId(id)) {
            call.reject("Invalid place");
            return;
        }
        var preferences = getContext().getSharedPreferences(GassiWidget.PREFS, 0).edit();
        if (id.isEmpty()) {
            preferences.clear();
        } else {
            preferences.putString(GassiWidget.PLACE, id)
                .putString("name", limited(call.getString("name", "")))
                .putString("summary", limited(call.getString("summary", "")))
                .putString("next", limited(call.getString("next", "")))
                .putLong("updated", System.currentTimeMillis());
        }
        preferences.apply();
        GassiWidget.refresh(getContext());
        call.resolve();
    }

    @PluginMethod
    public void addToCalendar(PluginCall call) {
        Long start = call.getLong("start");
        Long end = call.getLong("end");
        if (start == null || end == null || end <= start) {
            call.reject("Invalid time window");
            return;
        }
        Intent intent = new Intent(Intent.ACTION_INSERT, CalendarContract.Events.CONTENT_URI)
            .putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, start)
            .putExtra(CalendarContract.EXTRA_EVENT_END_TIME, end)
            .putExtra(CalendarContract.Events.TITLE, limited(call.getString("title", "")))
            .putExtra(CalendarContract.Events.EVENT_LOCATION, limited(call.getString("place", "")))
            .putExtra(CalendarContract.Events.DESCRIPTION, limited(call.getString("link", "")));
        try {
            getActivity().startActivity(intent);
            call.resolve();
        } catch (android.content.ActivityNotFoundException error) {
            call.reject("Calendar unavailable");
        }
    }

    private String limited(String value) {
        return value.substring(0, Math.min(200, value.length()));
    }
}
