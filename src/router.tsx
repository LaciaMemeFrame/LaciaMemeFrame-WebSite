import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function routerBasepath(): string | undefined {
  const raw = import.meta.env.BASE_URL || "/";
  const trimmed = raw.replace(/\/$/, "");
  if (!trimmed || trimmed === "." || trimmed === "") return undefined;
  return trimmed;
}

export function getRouter() {
  const basepath = routerBasepath();
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    ...(basepath ? { basepath } : {}),
  });
}
