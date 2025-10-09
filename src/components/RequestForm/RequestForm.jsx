"use client";
import ReCAPTCHA from "react-google-recaptcha";
import Heading from "../Heading/Heading";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ProductSelect from "../ProductSelect";

const schema = z.object({
  full_name: z.string().min(4, "Name is required"),
  business_email: z.string().email("Enter a valid email address"),
  phone_whatsapp: z
    .string()
    .min(7, "Enter a valid phone/WhatsApp number")
    .regex(/^[+0-9()\-\s]{7,}$/, "Use numbers and + ( ) - only"),
  product_interest: z
    .array(z.string())
    .min(1, "Please select at least one product"),
  city: z.string().min(1, "Please select a city"),
});

const RequestForm = () => {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    console.log("onSubmit called with data:", data);
    console.log("captchaToken:", captchaToken);
    if (!captchaToken) {
      alert("Please verify you are not a robot.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_pyjk30a",
        // "service_8gk73iy",
        "template_i15wcdq",
        // "template_1b7wbwe",
        form.current,
        "hynYyM-sZPo2nIIkH"
        // "C_MX_VVp0BdrIVtza"
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
      className="flex items-center justify-center  max-w-[1700px] px-6 lg:px-8 mx-auto mb-14 "
    >
      <div
        className="relative w-full  rounded-xl shadow-lg px-4 md:px-6 xl:px-12 xl:py-12 py-6  animated-border overflow-hidden"
        style={{
          backgroundImage: `url('/img/formbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blur background */}
        <div
          className="absolute left-0 w-full h-[600px] sm:h-[650px] z-0"
          style={{
            background:
              "radial-gradient(circle at bottom, rgba(3,52,50,0.5) 100%, transparent 50%)",
            filter: "blur(50px)",
          }}
        />

        {/* Heading */}
        <div className="flex justify-center mb-0 sm:mb-8 lg:mb-6 z-10 relative text-center px-4">
          <Heading heading="Let’s Build Your " highlight="AI Solution" />
        </div>

        {/* Wrapper: image + form */}
        <div className="flex items-center flex-col lg:flex-row lg:justify-between gap-6 xl:gap-12 z-10 relative ">
          {/* Left side image (hidden on small screens) */}
          <div className="hidden lg:flex w-full lg:w-1/2 xl:w-[38%] ">
            <img
              src="/img/contact-img.png"
              alt="Request a Quote"
              className="object-cover w-full h-auto "
            />
          </div>

          {/* Right side: Form */}
          <form
            ref={form}
            onSubmit={handleSubmit((onSubmit) => {
              // console.log("Validation errors:", formErrors);
              // optionally show user-friendly message:
              // alert("Fix the highlighted fields before submitting.");
            })}
            noValidate
            className="w-full lg:w-1/2 xl:w-[55%] relative text-white flex flex-col gap-6"
          >
            <div className="flex lg:flex-row flex-col xl:gap-6 gap-4">
              {/* Full Name */}
              <div className="w-full">
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-base font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  id="full_name"
                  type="text"
                  placeholder="John Smith"
                  autoComplete="full_name"
                  className="w-full rounded-md bg-[#222] px-4 xl:px-8 py-4 xl:py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-[#AAAAAA]"
                  {...register("full_name")}
                  aria-invalid={!!errors.full_name}
                />
                {errors.full_name && (
                  <p className="mt-1 text-red-400 text-sm">
                    {errors.full_name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="w-full">
                <label
                  htmlFor="business_email"
                  className="block mb-2 text-base font-medium text-white"
                >
                  Business Email
                </label>
                <input
                  id="business_email"
                  type="email"
                  placeholder="john@company.com"
                  autoComplete="email"
                  className="w-full rounded-md bg-[#222] px-4 xl:px-8 py-4 xl:py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-[#AAAAAA]"
                  {...register("business_email")}
                  aria-invalid={!!errors.business_email}
                />
                {errors.business_email && (
                  <p className="mt-1 text-red-400 text-sm">
                    {errors.business_email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex lg:flex-row flex-col xl:gap-6 gap-4">
              {/* Phone */}
              <div className="w-full">
                <label
                  htmlFor="phone_whatsapp"
                  className="block mb-2 text-base font-medium text-white"
                >
                  Phone / WhatsApp
                </label>
                <input
                  id="phone_whatsapp"
                  type="text"
                  placeholder="+971 50 123 4567"
                  autoComplete="tel"
                  className="w-full rounded-md bg-[#222] px-4 xl:px-8 py-4 xl:py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-[#AAAAAA]"
                  {...register("phone_whatsapp")}
                  aria-invalid={!!errors.phone_whatsapp}
                />
                {errors.phone_whatsapp && (
                  <p className="mt-1 text-red-400 text-sm">
                    {errors.phone_whatsapp.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="block mb-2 text-base font-medium text-white"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="w-full rounded-md bg-[#222] px-4 xl:px-8 py-4 xl:py-5 focus:outline-none focus:ring-1 focus:ring-cyan-200 placeholder-[#AAAAAA]"
                  {...register("city")}
                />
                {errors.city && (
                  <p className="mt-1 text-red-400 text-sm">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>

            {/* Product Dropdown */}
            <div className="sm:col-span-2 lg:col-span-2">
              <ProductSelect control={control} errors={errors} />
            </div>

            {/* Recaptcha */}
            <div className="sm:col-span-2 lg:col-span-3 w-full flex justify-center">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 lg:col-span-3 w-full flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-400 text-black font-semibold py-3 sm:py-4 rounded-md text-base sm:text-lg hover:bg-cyan-500 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? "Sending..." : "SUBMIT"}
              </button>

              {isSent && (
                <div
                  className="w-full animate-fade-in"
                  role="status"
                  aria-live="polite"
                >
                  <p className="bg-green-500/10 text-green-300 border border-green-500/40 px-5 sm:px-6 py-3 sm:py-4 rounded-md shadow-md text-center text-sm sm:text-base font-medium transition-all duration-300">
                    ✅ Your message has been sent successfully!
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
