import { createFileRoute } from "@tanstack/react-router";
import { VisitingCard } from "@/components/visiting-card";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <VisitingCard />;
}
