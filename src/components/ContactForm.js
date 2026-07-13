"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const projectTypes = [
  "Interior Design",
  "Space Optimization",
  "Furniture Planning",
  "3D Visualization",
  "Full Renovation",
  "Consultation Only",
];

const budgets = [
  "Under Rp 25 juta",
  "Rp 25 – 50 juta",
  "Rp 50 – 100 juta",
  "Rp 100 – 250 juta",
  "Above Rp 250 juta",
];

const inputClass =
  "w-full rounded-2xl border border-ink/15 bg-base px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-primary dark:border-white/15 dark:bg-dark-base dark:text-dark-ink dark:placeholder:text-dark-ink/40 dark:focus:border-accent";

const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-wider text-ink/60 dark:text-dark-ink/60";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "loading" | "success" | "error"
  const [feedback, setFeedback] = useState("");

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback(data.message);
        setForm({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrors(data.errors || {});
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again or reach us on WhatsApp.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={update}
            className={inputClass}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            className={inputClass}
            placeholder="you@email.com"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={update}
            className={inputClass}
            placeholder="+62 …"
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={update}
            className={inputClass}
          >
            <option value="">Select…</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Estimated Budget
        </label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={update}
          className={inputClass}
        >
          <option value="">Select…</option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your space, goals, and timeline…"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          "Sending…"
        ) : (
          <>
            Send Inquiry <FiSend className="h-4 w-4" />
          </>
        )}
      </button>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex items-start gap-3 rounded-2xl p-4 text-sm ${
              status === "success"
                ? "bg-green-500/10 text-green-700 dark:text-green-400"
                : "bg-red-500/10 text-red-600 dark:text-red-400"
            }`}
          >
            {status === "success" ? (
              <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
            ) : (
              <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            )}
            <span>{feedback}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
