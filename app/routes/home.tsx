import type { Route } from "./+types/home";
import { HomePage } from "../home/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mont Design" },
    { name: "Descripción", content: "Bienvenido a Mont Design" },
  ];
}

export default function Home() {
  return <HomePage />;
}
