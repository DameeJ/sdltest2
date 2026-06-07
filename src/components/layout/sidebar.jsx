import {
  Home,
  FileText,
  History,
  Settings,
} from "lucide-react";

const navItems = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: FileText,
    label: "Templates",
  },
  {
    icon: History,
    label: "History",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      bg-slate-900
      border-r
      border-slate-800
      flex
      flex-col
      justify-between
      "
    >
      <div>
        {/* Logo */}

        <div className="p-6">
          <div
            className="
            flex
            items-center
            gap-3
            "
          >
            <div
              className="
              w-12
              h-12
              rounded-xl
              bg-orange-500
              flex
              items-center
              justify-center
              font-bold
              "
            >
              SDL
            </div>

            <div>
              <h1 className="font-bold text-lg">
                Sundamlet
              </h1>

              <p className="text-xs text-slate-400">
                Electrical Engineering
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav className="px-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-xl
              mb-2
              hover:bg-slate-800
              transition
              "
            >
              <item.icon size={20} />

              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* User Section */}

      <div className="p-4">
        <div
          className="
          p-4
          rounded-2xl
          bg-slate-800
          "
        >
          <h4 className="font-medium">
            Guest User
          </h4>

          <p className="text-sm text-slate-400">
            Test the AI quote system
          </p>
        </div>
      </div>
    </aside>
  );
}
