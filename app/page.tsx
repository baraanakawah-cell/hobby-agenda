"use client";
import { useState, useEffect } from "react";
import { Activity } from "@/types";
import { categories } from "@/lib/categories";
import { getActivities, addActivity, updateActivity, deleteActivity } from "@/lib/storage";
import { dummyActivities } from "@/lib/dummyData";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import ActivityCard from "@/components/ActivityCard";
import ActivityModal from "@/components/ActivityModal";
import ActivityForm from "@/components/ActivityForm";

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  useEffect(() => {
    const stored = getActivities();
    if (stored.length === 0) {
      dummyActivities.forEach(addActivity);
      setActivities(dummyActivities);
    } else {
      setActivities(stored);
    }
  }, []);

  const handleSave = (activity: Activity) => {
    if (editingActivity) {
      updateActivity(activity);
      setActivities(getActivities());
      setEditingActivity(null);
    } else {
      addActivity(activity);
      setActivities(getActivities());
    }
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    deleteActivity(id);
    setActivities(getActivities());
    setSelectedActivity(null);
  };

  const filtered = filterCategory
    ? activities.filter((a) => a.categoryId === filterCategory)
    : activities;

  const grouped = filtered
    .sort((a, b) => new Date(a.date + "T" + a.time).getTime() - new Date(b.date + "T" + b.time).getTime())
    .reduce((groups: Record<string, Activity[]>, activity) => {
      const date = activity.date;
      if (!groups[date]) groups[date] = [];
      groups[date].push(activity);
      return groups;
    }, {});

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">🗓️ Hobby Agenda</h1>
            <p className="text-gray-500 text-sm">Plan je hobby activiteiten</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-600 transition-colors"
          >
            + Toevoegen
          </button>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setFilterCategory(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filterCategory === null
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Alles
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filterCategory === cat.id
                  ? `${cat.bgColor} ${cat.color}`
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Agenda */}
        {Object.keys(grouped).length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-2">📭</p>
            <p>Geen activiteiten gevonden</p>
          </div>
        ) : (
          Object.entries(grouped).map(([date, acts]) => (
            <div key={date} className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                {format(new Date(date), "EEEE d MMMM", { locale: nl })}
              </h2>
              <div className="space-y-2">
                {acts.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    onClick={() => setSelectedActivity(activity)}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          onEdit={() => {
            setEditingActivity(selectedActivity);
            setSelectedActivity(null);
            setShowForm(true);
          }}
          onDelete={() => handleDelete(selectedActivity.id)}
        />
      )}

      {/* Form */}
      {(showForm || editingActivity) && (
        <ActivityForm
          existing={editingActivity || undefined}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingActivity(null);
          }}
        />
      )}
    </main>
  );
}