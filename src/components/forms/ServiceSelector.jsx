const services = [
  "Electrical Wiring",
  "Solar Installation",
  "Inverter Setup",
  "CCTV Installation",
  "Maintenance"
];

export default function ServiceSelector({
  onSelect
}) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {services.map((service) => (
        <button
          key={service}
          onClick={() => onSelect(service)}
          className="
          px-4
          py-3
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          hover:border-orange-500
          hover:bg-slate-800
          transition-all
          "
        >
          {service}
        </button>
      ))}
    </div>
  );
}
