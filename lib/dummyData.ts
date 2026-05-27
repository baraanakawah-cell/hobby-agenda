import { Activity } from "@/types";

export const dummyActivities: Activity[] = [
  {
    id: "1",
    title: "Hardlopen in het park",
    date: "2026-05-27",
    time: "07:30",
    categoryId: "sport",
    description: "5km rondje door het park",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Gitaar oefenen",
    date: "2026-05-27",
    time: "19:00",
    categoryId: "muziek",
    description: "Nieuwe nummers instuderen",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Boek lezen",
    date: "2026-05-28",
    time: "21:00",
    categoryId: "lezen",
    description: "Hoofdstuk 5 en 6 lezen",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "FIFA toernooi",
    date: "2026-05-29",
    time: "20:00",
    categoryId: "gaming",
    description: "Online toernooi met vrienden",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Reizen plannen naar Parijs",
    date: "2026-05-30",
    time: "14:00",
    categoryId: "reizen",
    description: "Hotels en vluchten uitzoeken",
    createdAt: new Date().toISOString(),
  },
];