import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Outlet } from "@remix-run/react";
import { MotionConfig, useReducedMotion } from "framer-motion";

export default function Layout() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Sidebar />
      <div className="lg:pl-72">
        <Header />
        {/* px-4 sm:px-6 lg:px-8 */}
        <main className="w-full flex-auto py-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
