import { ActiveFilters } from "@/components/active-filters";
import { AltHeader } from "@/components/alt-header";
import { SkillsFilters } from "@/components/skills-filters";
import { Outlet } from "@remix-run/react";
import { MotionConfig, useReducedMotion } from "framer-motion";

export default function Layout() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <AltHeader />
      <div className="mx-auto flex w-full max-w-full items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-8 hidden min-h-full w-96 shrink-0 rounded-xl bg-white lg:block">
          <SkillsFilters />
        </aside>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </MotionConfig>
  );
}
