import { Activity } from "@/types";
import { getCategoryById } from "@/lib/categories";

type Props = {
  activity: Activity;
  onClick: () => void;
};

export default function ActivityCard({ activity, onClick }: Props) {
  const category = getCategoryById(activity.categoryId);

  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:shadow-md cursor-pointer transition-all bg-white"
    >
      <div className={`text-2xl w-10 h-10 flex items-center justify-center rounded-lg ${category?.bgColor}`}>
        {category?.icon}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{activity.title}</p>
        <p className={`text-sm font-medium ${category?.color}`}>{category?.name}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-gray-600">{activity.time}</p>
      </div>
    </div>
  );
}