"use client";

import { useState } from "react";

const SUPPORT_OPTIONS = [
  "HR Support",
  "Innovative EAP",
  "GC Index",
  "DISC",
  "Formation Question",
  "Compliance Question",
  "BookKeeping & Taxes Question",
  "Other",
];

const INTENT_OPTIONS = [
  "Book A Call",
  "Chat On Whatsapp",
  "Correspond Via Email",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    companyName: "",
    location: "",
    supportRelatedTo: [],
    intent: [],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleArrayValue = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/contact-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        companyName: "",
        location: "",
        supportRelatedTo: [],
        intent: [],
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mb-10 space-y-4 rounded-xl border p-6 shadow bg-gray-100"
    >
      <h2 className="text-2xl font-semibold text-center">Contact Us</h2>

      <input
        required
        placeholder="Full Name"
        className="w-full border p-2 rounded"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <input
        required
        type="email"
        placeholder="Email Address"
        className="w-full border p-2 rounded"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <input
        placeholder="WhatsApp Number"
        className="w-full border p-2 rounded"
        value={formData.whatsapp}
        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
      />

      <input
        placeholder="Company Name"
        className="w-full border p-2 rounded"
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      />

      <input
        placeholder="Location"
        className="w-full border p-2 rounded"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />

      {/* MULTI-SELECT DROPDOWN */}
      <div>
        <p className="font-medium mb-1">Support Related To</p>
        {SUPPORT_OPTIONS.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.supportRelatedTo.includes(option)}
              onChange={() =>
                toggleArrayValue("supportRelatedTo", option)
              }
            />
            {option}
          </label>
        ))}
      </div>

      {/* CHECKBOX GROUP */}
      <div>
        <p className="font-medium mb-1">I Want To</p>
        {INTENT_OPTIONS.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.intent.includes(option)}
              onChange={() => toggleArrayValue("intent", option)}
            />
            {option}
          </label>
        ))}
      </div>

      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full border p-2 rounded"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <button
        disabled={loading}
        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
      >
        {loading ? "Sending..." : "Submit"}
      </button>

      {success && (
        <p className="text-green-600">
          Thank you! Your message has been sent. We will get back to you soon.
        </p>
      )}
    </form>
  );
}
