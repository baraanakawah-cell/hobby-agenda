import { Activity } from "@/types";
import { getCategoryById } from "@/lib/categories";
import { differenceInDays, parseISO } from "date-fns";

type Props = {
  activity: Activity;
  onClick: () => void;
};

export default function ActivityCard({ activity, onClick }: Props) {
  const category = getCategoryById(activity.categoryId);
  const daysUntil = differenceInDays(parseISO(activity.date), new Date());
  const isSoon = daysUntil >= 0 && daysUntil <= 3;
  const isToday = daysUntil === 0;

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all bg-white hover:shadow-md ${
        isToday
          ? "border-red-300 bg-red-50"
          : isSoon
          ? "border-orange-200 bg-orange-50"
          : "border-gray-100"
      }`}
    >
      <div className={`text-2xl w-10 h-10 flex items-center justify-center rounded-lg ${category?.bgColor}`}>
        {category?.icon}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{activity.title}</p>
        <p className={`text-sm font-medium ${category?.color}`}>{category?.name}</p>
      </div>
      <div className="text-right flex flex-col items-end gap-1">
        <p className="text-sm font-medium text-gray-600">{activity.time}</p>
        {isToday && (
          <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
            Vandaag!
          </span>
        )}
        {isSoon && !isToday && (
          <span className="text-xs bg-orange-400 text-white px-2 py-0.5 rounded-full">
            Over {daysUntil} dag{daysUntil !== 1 ? "en" : ""}
          </span>
        )}
      </div>
    </div>
  );
}