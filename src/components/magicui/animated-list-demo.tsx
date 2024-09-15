import React from "react";
import { cn } from "../../lib/utils";
import { AnimatedList } from "./animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Unternehmensseiten",
    description: "Professionelle Webseiten, die Informationen über ein Unternehmen, seine Dienstleistungen und Produkte präsentieren.",
    icon: "🏢",
    color: "#0693e3",
  },
  {
    name: "Magazin-Webseiten",
    description: "Online-Plattformen, die aktuelle Artikel, Nachrichten und redaktionelle Inhalte in einem ansprechenden Layout präsentieren.",
    icon: "📰",
    color: "#0693e3",
  },
  {
    name: "E-Commerce-Webseiten",
    description: "Webseiten, die den Verkauf von Produkten oder Dienstleistungen ermöglichen und eine nahtlose Online-Shopping-Erfahrung bieten.",
    icon: "🛒",
    color: "#0693e3",
  },
  {
    name: "Blogs",
    description: "Webseiten, die regelmäßig aktualisierte Beiträge zu bestimmten Themen veröffentlichen und Lesern informative oder unterhaltsame Inhalte bieten.",
    icon: "✍️",
    color: "#0693e3",
  },
  {
    name: "Portfolio-Websites",
    description: "Webseiten, auf denen Kreative, wie Designer oder Fotografen, ihre Arbeiten und Projekte präsentieren und potenzielle Kunden ansprechen können.",
    icon: "💼",
    color: "#0693e3",
  },
  {
    name: "Landingpages",
    description: "Einzelseiten, die speziell für Marketingkampagnen erstellt werden, um Besucher zu einer bestimmten Aktion, wie dem Ausfüllen eines Formulars oder dem Kauf eines Produkts, zu verleiten.",
    icon: "🎯",
    color: "#0693e3",
  },
  {
    name: "Verzeichnisse",
    description: "Webseiten, die eine Sammlung von Informationen oder Dienstleistungen in einer bestimmten Kategorie oder Branche auflisten und Nutzern bei der Suche und Navigation helfen.",
    icon: "📋",
    color: "#0693e3",
  },

];

notifications = Array.from({ length: 7 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }: Item) => {
    return (
      <figure
        className={cn(
          "relative w-full cursor-pointer overflow-hidden rounded-xl p-4",
          // Box shadow for light mode
          "bg-white shadow-md hover:shadow-lg transition-shadow",
          // Dark mode styles
          "dark:bg-gray-800 dark:shadow-lg dark:hover:shadow-xl",
          // Border and padding
          "border border-gray-200 dark:border-gray-700"
        )}
      >
        <div className="flex items-center gap-3">
          {/* Icon section */}
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: color }}
          >
            <span className="text-xl">{icon}</span>
          </div>
          {/* Content section */}
          <div className="flex-1 overflow-hidden">
            <figcaption className="flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-900 dark:text-white truncate">
                {name}
              </span>
            </figcaption>
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </figure>
    );
  };
  
  export function AnimatedListDemo({ className }: { className?: string }) {
    return (
      <div
        className={cn(
          // Entferne den Rahmen und den Hintergrund der äußeren Box
          "relative flex flex-col gap-4 w-full h-[400px] mx-auto overflow-y-hidden",
          className
        )}
      >
        <AnimatedList delay={2000}> {/* Setze den delay auf 3000ms (3 Sekunden) */}
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    );
  }
