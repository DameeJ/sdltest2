import {
  Zap,
  FileCheck,
  BarChart3,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
      max-w-7xl
      mx-auto
      px-10
      py-20
      "
    >
      {/* Headline */}

      <div className="max-w-4xl">
        <h1
          className="
          text-6xl
          font-bold
          leading-tight
          "
        >
          Generate Professional
          <span className="text-orange-500">
            {" "}Electrical Quotations
          </span>
          {" "}in Minutes
        </h1>

        <p
          className="
          mt-6
          text-xl
          text-slate-400
          max-w-2xl
          "
        >
          AI-powered electrical estimation for
          wiring, solar installations, inverter
          systems, maintenance projects and
          commercial electrical works.
        </p>

        {/* CTA */}

        <div className="flex gap-4 mt-10">
          <button
            className="
            px-8
            py-4
            rounded-xl
            bg-orange-500
            hover:bg-orange-600
            font-semibold
            "
          >
            Generate Quote
          </button>

          <button
            className="
            px-8
            py-4
            rounded-xl
            border
            border-slate-700
            "
          >
            View Sample
          </button>
        </div>
      </div>

      {/* Feature Cards */}

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        mt-20
        "
      >
        <FeatureCard
          icon={<Zap />}
          title="AI Estimation"
          text="Automatic material calculations and project sizing."
        />

        <FeatureCard
          icon={<FileCheck />}
          title="Instant PDF"
          text="Generate branded SDL quotations instantly."
        />

        <FeatureCard
          icon={<BarChart3 />}
          title="Project Insights"
          text="Track and manage quotations professionally."
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}) {
  return (
    <div
      className="
      p-8
      rounded-3xl
      bg-slate-800
      border
      border-slate-700
      "
    >
      <div className="mb-4 text-orange-500">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {text}
      </p>
    </div>
  );
}
