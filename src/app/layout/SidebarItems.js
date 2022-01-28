import * as icon from "../assets/icons/icons";
export const SidebarItems = [
  {
    title: "Главный",
    path: "/dashboard",
    icon: (
      <icon.First className="mx-3 group-hover:opacity-95 text-white  opacity-60" />
    ),
  },

  {
    title: "Создать блог",
    path: "/create-blog",
    icon: (
      <icon.Second className="mx-3 group-hover:opacity-95 text-white  opacity-60" />
    ),
  },

  {
    title: "Настройки",
    path: "/settings",
    icon: (
      <icon.Tenth className="mx-3 group-hover:opacity-95 text-white  opacity-60" />
    ),
  },
];
