import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-void px-6 text-center text-moon">
      <span className="text-ice" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={1.5} />
      </span>
      <h1 className="font-display text-2xl italic">что-то оборвалось</h1>
      <p className="max-w-md text-sm break-words text-mist">
        {error.message || "Неизвестная ошибка. Обнови страницу."}
      </p>
    </main>
  );
}
