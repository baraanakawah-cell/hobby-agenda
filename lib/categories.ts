import { HobbyCategory } from "@/types";

export const categories: HobbyCategory[] = [
  {
    id: "sport",
    name: "Sporten",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    icon: "🏃",
  },
  {
    id: "muziek",
    name: "Muziek",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    icon: "🎵",
  },
  {
    id: "lezen",
    name: "Lezen",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    icon: "📚",
  },
  {
    id: "gaming",
    name: "Gaming",
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: "🎮",
  },
  {
    id: "reizen",
    name: "Reizen",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    icon: "✈️",
  },
];

export const getCategoryById = (id: string): HobbyCategory | undefined => {
  return categories.find((cat) => cat.id === id);
};