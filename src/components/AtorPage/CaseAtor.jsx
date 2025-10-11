import CaseStudySection from "../ReusableCaseStudiesAH/CaseStudySection";

export default function CaseAtor() {
  const industries = [
    {
      icon: "/img/ator-case-1.png",
      title: "Schools",
      description:
        "Schools used AI-driven lessons to deliver personalized learning at scale. Teachers saved time while students received interactive, adaptive content that matched their individual pace.",
    },
    {
      icon: "/img/ator-case-2.png",
      title: "EdTech Platforms",
      description:
        "EdTech platforms integrated AI to create tailored courses and exercises. Learners experienced more engaging content, leading to higher completion rates and better outcomes.",
    },
    {
      icon: "/img/ator-case-3.png",
      title: "Corporate Training",
      description:
        "Companies adopted AI-based modules for workforce training. Teams across different regions gained customized learning paths, improving efficiency and reducing training costs.",
    },
  ];

  return <CaseStudySection heading="Real-World" highlight="Case Studies" industries={industries} />;
}
