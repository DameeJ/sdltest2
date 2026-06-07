import { useState } from "react";

export default function ClientForm({
  onSubmit
}) {
  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      email: "",
      location: ""
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

  return (
    <div
      className="
      max-w-xl
      mx-auto
      space-y-4
      "
    >
      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        className="input"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        className="input"
      />

      <input
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        className="input"
      />

      <input
        name="location"
        placeholder="Project Location"
        onChange={handleChange}
        className="input"
      />

      <button
        onClick={() => onSubmit(formData)}
        className="
        w-full
        py-4
        rounded-xl
        bg-orange-500
        text-black
        font-semibold
        "
      >
        Continue
      </button>
    </div>
  );
}
