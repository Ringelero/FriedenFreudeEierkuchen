package red.gemden.app;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.text.format.DateFormat;
import android.widget.RemoteViews;
import java.util.Date;

public class GassiWidget extends AppWidgetProvider {
    static final String PREFS = "gemden_gassi_widget";
    static final String PLACE = "gemden_widget_place";

    static boolean isPlaceId(String value) {
        return value != null && value.matches("[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}");
    }

    static void refresh(Context context) {
        var manager = AppWidgetManager.getInstance(context);
        var receiver = new ComponentName(context, GassiWidget.class);
        new GassiWidget().onUpdate(context, manager, manager.getAppWidgetIds(receiver));
    }

    @Override
    public void onUpdate(Context context, AppWidgetManager manager, int[] widgetIds) {
        SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        String id = prefs.getString(PLACE, "");
        String name = prefs.getString("name", "");
        String summary = prefs.getString("summary", "");
        String next = prefs.getString("next", "");
        long updated = prefs.getLong("updated", 0);
        Intent open = new Intent(context, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        if (isPlaceId(id)) open.putExtra(PLACE, id);
        for (int widgetId : widgetIds) {
            RemoteViews view = new RemoteViews(context.getPackageName(), R.layout.gassi_widget);
            view.setTextViewText(R.id.widget_place, name.isEmpty() ? context.getString(R.string.gassi_widget_empty) : name);
            String checkIn = summary.isEmpty() ? "" : summary + " · " + DateFormat.getMediumDateFormat(context).format(new Date(updated))
                + " " + DateFormat.getTimeFormat(context).format(new Date(updated));
            view.setTextViewText(R.id.widget_details, next.isEmpty() ? checkIn : next + "\n" + checkIn);
            view.setOnClickPendingIntent(R.id.gassi_widget, PendingIntent.getActivity(context, widgetId, open,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE));
            manager.updateAppWidget(widgetId, view);
        }
    }
}
