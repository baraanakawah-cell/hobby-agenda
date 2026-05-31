"use client";
import { Activity } from "@/types";
import { categories } from "@/lib/categories";

type Props = {
  activities: Activity[];
};

export default function Stats({ activities }: Props) {
  const totalActivities = activities.length;

  const perCategory = categories.map((cat) => {
    const count = activities.filter((a) => a.categoryId === cat.id).length;
    const percentage = totalActivities > 0 ? Math.round((count / totalActivities) * 100) : 0;
    return { ...cat, count, percentage };
  }).filter((cat) => cat.count > 0);

  if (perCategory.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
      <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">📊 Statistieken</h2>
      <div className="space-y-3">
        {perCategory.map((cat) => (
          <div key={cat.id}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {cat.icon} {cat.name}
              </span>
              <span className={`text-sm font-semibold ${cat.color}`}>
                {cat.count} activiteit{cat.count !== 1 ? "en" : ""}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${cat.bgColor.replace("bg-", "bg-").replace("-100", "-400")}`}
                style={{ width: `${cat.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3">Totaal: {totalActivities} activiteiten</p>
    </div>
  );
}