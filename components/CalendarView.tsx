"use client";
import { useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { nl } from "date-fns/locale";
import { Activity } from "@/types";
import { getCategoryById } from "@/lib/categories";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales: { nl },
});

type Props = {
  activities: Activity[];
  onSelectActivity: (activity: Activity) => void;
};

export default function CalendarView({ activities, onSelectActivity }: Props) {
  const events = useMemo(() => {
    return activities.map((activity) => {
      const category = getCategoryById(activity.categoryId);
      const start = new Date(`${activity.date}T${activity.time}`);
      const end = new Date(start.getTime() + 60 * 60 * 1000);
      return {
        title: `${category?.icon} ${activity.title}`,
        start,
        end,
        resource: activity,
      };
    });
  }, [activities]);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => onSelectActivity(event.resource)}
        culture="nl"
        messages={{
          next: "Volgende",
          previous: "Vorige",
          today: "Vandaag",
          month: "Maand",
          week: "Week",
          day: "Dag",
          agenda: "Agenda",
          noEventsInRange: "Geen activiteiten",
        }}
      />
    </div>
  );
}