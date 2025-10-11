import ReusableSliderSection from "../../components/ReusableSliderSection/ReusableSliderSection";
import HirmWorks from "../HirmPage/HirmWorks"

const atorSlides = [
  {
    id: 1,
    badge: "CHALLENGE",
    title: "Hiring Bottlenecks That Drain Time",
    text: "Recruitment teams waste hundreds of hours screening CVs and repeating first-round interviews, slowing down the hiring cycle.",
    image: "/img/recruiter-slider-1.png",
  },
  {
    id: 2,
    badge: "SOLUTION",
    title: "Automation That Handles the Heavy Lifting",
    text: "Hirm automates JDs, screens CVs, runs interviews, and delivers structured shortlists.",
    image: "/img/recruiter-slider-2.png",
  },
  {
    id: 3,
    badge: "KEY BENEFITS",
    title: "Smarter Hiring with Less Effort",
    text: "Cut ~60% of recruiter workload, reduce hiring costs, ensure unbiased shortlisting, and achieve faster time-to-hire.",
    image: "/img/recruiter-slider-3.png",
  },
];

export default function SliderSectionHirm() {
  return (
    <ReusableSliderSection
      slides={atorSlides}
      heading="The Future of Scalable Customer Conversations"
      highlight="Customer Conversations"
      backgroundImage="/img/main-slider-img.png"
      showWorkSection={true}
      WorkComponent={HirmWorks}
    />
  );
}
