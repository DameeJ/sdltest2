import Sidebar from "./Sidebar";
import Header from "./Header";
import HeroSection from "./HeroSection";

export default function Layout() {
  return (
    <div
      className="
      min-h-screen
      bg-slate-950
      text-white
      flex
      "
    >
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-auto">
          <HeroSection />
        </main>
      </div>
    </div>
  );
}
