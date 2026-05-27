export type HobbyCategory = {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  icon: string;
};

export type Activity = {
  id: string;
  title: string;
  date: string;
  time: string;
  categoryId: string;
  description?: string;
  createdAt: string;
};