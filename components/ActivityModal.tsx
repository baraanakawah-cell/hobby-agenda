"use client";
import { Activity } from "@/types";
import { getCategoryById } from "@/lib/categories";
import { format } from "date-fns";
import { nl } from "date-fns/locale";

type Props = {
  activity: Activity;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function ActivityModal({ activity, onClose, onEdit, onDelete }: Props) {
  const category = getCategoryById(activity.categoryId);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        
        <div className="flex items-center gap-3 mb-4">
          <div className={`text-3xl w-12 h-12 flex items-center justify-center rounded-xl ${category?.bgColor}`}>
            {category?.icon}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{activity.title}</h2>
            <p className={`text-sm font-medium ${category?.color}`}>{category?.name}</p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-gray-600">
            📅 {format(new Date(activity.date), "EEEE d MMMM yyyy", { locale: nl })}
          </p>
          <p className="text-gray-600">🕐 {activity.time}</p>
          {activity.description && (
            <p className="text-gray-600">📝 {activity.description}</p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-medium hover:bg-blue-600 transition-colors"
          >
            Bewerken
          </button>
          <button
            onClick={onDelete}
            className="flex-1 bg-red-500 text-white py-2 rounded-xl font-medium hover:bg-red-600 transition-colors"
          >
            Verwijderen
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
}