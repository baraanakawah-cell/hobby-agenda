import { Activity } from "@/types";

const STORAGE_KEY = "hobby-agenda-activities";

export const getActivities = (): Activity[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveActivities = (activities: Activity[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
};

export const addActivity = (activity: Activity): void => {
  const activities = getActivities();
  activities.push(activity);
  saveActivities(activities);
};

export const updateActivity = (updated: Activity): void => {
  const activities = getActivities();
  const index = activities.findIndex((a) => a.id === updated.id);
  if (index !== -1) {
    activities[index] = updated;
    saveActivities(activities);
  }
};

export const deleteActivity = (id: string): void => {
  const activities = getActivities();
  const filtered = activities.filter((a) => a.id !== id);
  saveActivities(filtered);
};
