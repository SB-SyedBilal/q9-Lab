// components/FeatureSection.jsx

"use client";
import { Cpu, ShieldCheck, Rocket, Zap } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-cyan-400" />,
    title: "AI Powered",
    text: "Harness the power of AI to automate and optimize processes.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
    title: "Secure & Reliable",
    text: "Built with security and stability in mind from the ground up.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    title: "Fast Deployment",
    text: "Get up and running quickly with our streamlined setup.",
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    title: "Lightning Performance",
    text: "Optimized for speed, scalability, and efficiency.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-36 bg-black text-white">
      {/* Badge */}
      <div className="mb-4 inline-block bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase px-4 py-1 rounded-full">
        Our Capabilities
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4 max-w-4xl leading-snug">
        Powerful Features Built for Modern Teams
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-3xl mb-12 text-sm sm:text-base md:text-lg">
        Discover how our platform can help your team move faster, stay secure,
        and deliver better outcomes—without compromise.
      </p>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500 transition-all duration-500 pointer-events-none"></div>

            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
