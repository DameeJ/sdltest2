import ThemeToggle from "./ThemeToggle";
import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header
      className="
      h-20
      px-8
      flex
      items-center
      justify-between
      border-b
      border-slate-700
      "
    >
      <div>
        <h2 className="text-xl font-semibold">
          SDL AI Quote Generator
        </h2>

        <p className="text-sm text-slate-400">
          Smart Electrical Estimation Platform
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="
          p-2
          rounded-xl
          hover:bg-slate-800
          "
        >
          <Bell size={20} />
        </button>

        <ThemeToggle />
      </div>
    </header>
  );
}
