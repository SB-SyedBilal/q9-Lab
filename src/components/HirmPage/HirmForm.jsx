"use client";

import ReCAPTCHA from "react-google-recaptcha";
import Heading from "../Heading/Heading";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(4, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone/WhatsApp number")
    .regex(/^[+0-9()\-\s]{7,}$/, "Use numbers and + ( ) - only"),
  product: z.string().min(1, "Please select a product"),
  city: z.string().min(1, "Please select a city"),
  message: z.string().min(5, "Please describe your challenge"),
});

const HirmForm = () => {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    if (!captchaToken) {
      alert("Please verify you are not a robot.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_pyjk30a",
        "template_i15wcdq",
        form.current,
        "hynYyM-sZPo2nIIkH"
      );

      setIsSent(true);
      reset();
      form.current.reset();
    } catch (err) {
      console.error("Email error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => setIsSent(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  return (
    <div
      id="form"
      className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 max-w-[1600px] mx-auto"
    >
      <div
        className="relative w-full max-w-[1370px] rounded-2xl shadow-lg p-5 md:p-10 border border-cyan-500/30 overflow-hidden"
        style={{
          backgroundImage: `url('/img/formbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blur background layer */}
        <div
          className="absolute left-0 w-full h-[650px] z-0"
          style={{
            background:
              "radial-gradient(circle at bottom, rgba(3,52,50,0.5) 100%, transparent 50%)",
            filter: "blur(50px)",
          }}
        />

        {/* Heading */}
        <div className="flex justify-center mb-3 md:mb-6 z-10 relative">
          <Heading heading="Request A" highlight="Quote" />
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-white relative"
        >
          {/* Full Name */}
          <div className="w-full">
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              className="w-full rounded-md bg-[#252525] px-8 py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-gray-400 placeholder:italic"
              {...register("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-red-400 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <input
              id="email"
              type="email"
              placeholder="Business Email"
              autoComplete="email"
              className="w-full rounded-md bg-[#252525] px-8 py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-gray-400 placeholder:italic"
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-red-400 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="w-full">
            <input
              id="phone"
              type="text"
              placeholder="Phone/Whatsapp"
              autoComplete="tel"
              className="w-full rounded-md bg-[#252525] px-8 py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-gray-400 placeholder:italic"
              {...register("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-red-400 text-sm">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* City */}
          <div className="w-full">
            <input
              id="city"
              type="text"
              placeholder="City"
              className="w-full rounded-md bg-[#252525] px-8 py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-gray-400 placeholder:italic"
              {...register("city")}
            />
            {errors.city && (
              <p id="city-error" className="mt-1 text-red-400 text-sm">
                {errors.city.message}
              </p>
            )}
          </div>

          {/* Company Name */}
          <div className="w-full">
            <input
              id="company"
              type="text"
              placeholder="Company Name"
              className="w-full rounded-md bg-[#252525] px-8 py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-gray-400 placeholder:italic"
            />
          </div>

          {/* Product Interest */}
          <div className="relative w-full">
            <select
              id="product"
              className="w-full appearance-none rounded-md bg-[#252525] px-4 py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 text-gray-400"
              defaultValue=""
              {...register("product")}
              aria-invalid={!!errors.product}
              aria-describedby={errors.product ? "product-error" : undefined}
            >
              <option value="" disabled>
                Which product are you interested in?
              </option>
              <option value="AI Voice Agent">AI Voice Agent</option>
              <option value="AI Recruiter">AI Recruiter</option>
              <option value="AI Tutor">AI Tutor</option>
              <option value="AI Shopping Assistant">
                AI Shopping Assistant
              </option>
              <option value="Custom AI Agent">Custom AI Agent</option>
              <option value="Other">Other</option>
            </select>

            {errors.product && (
              <p id="product-error" className="mt-1 text-red-400 text-sm">
                {errors.product.message}
              </p>
            )}

            {/* Custom arrow icon */}
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-3 w-full">
            <textarea
              id="message"
              rows={5}
              placeholder="Briefly describe your challenge"
              className="w-full rounded-md bg-[#252525] px-8 py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-gray-400 placeholder:italic"
              {...register("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-red-400 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* ReCAPTCHA */}
          <div className="md:col-span-3 w-full flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-3 w-full bg-cyan-400 text-black font-semibold py-4 rounded-md text-lg hover:bg-cyan-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </form>

        {/* Success Message */}
        {isSent && (
          <div
            className="mt-6 flex justify-center animate-fade-in"
            role="status"
            aria-live="polite"
          >
            <p className="bg-green-500/10 text-green-300 border border-green-500/40 px-6 py-4 rounded-md shadow-md text-center text-sm sm:text-base font-medium transition-all duration-300">
              ✅ Your message has been sent successfully!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HirmForm;
