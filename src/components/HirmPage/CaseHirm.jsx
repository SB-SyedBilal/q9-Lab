import CaseStudySection from "../ReusableCaseStudiesAH/CaseStudySection";

export default function CaseHirm() {
  const industries = [
    {
      icon: "/img/hirm-case-1.png",
      title: "High-Volume Hiring",
      description:
        "A leading retail chain hired 2,000 seasonal staff in record time using automated JD creation, AI screening, and structured shortlists. The process cut hiring time by 65% and saved hundreds of recruiter hours.",
    },
    {
      icon: "/img/hirm-case-2.png",
      title: "Recruitment Agencies",
      description:
        "A recruitment agency streamlined client hiring by using AI to pre-screen CVs, run interviews, and deliver ready-to-share shortlists. This boosted placements by 40% and reduced manual workload significantly.",
    },
    {
      icon: "/img/hirm-case-3.png",
      title: "Enterprise HR Teams",
      description:
        "A global enterprise used AI-driven recruitment to standardize hiring across multiple regions. The system delivered unbiased shortlists with transcripts and summaries, ensuring consistent hiring quality worldwide.",
    },
  ];

  return <CaseStudySection heading="Real-World" highlight="Case Studies" industries={industries} />;
}
