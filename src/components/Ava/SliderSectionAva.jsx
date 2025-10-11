import ReusableSliderSection from "../../components/ReusableSliderSection/ReusableSliderSection";
import AvaWork from "../../components/Ava/AvaWork";

const avaSlides = [
  {
    id: 1,
    badge: "CHALLENGE",
    title: "The Hidden Cost of Call Centers",
    text: "Call centers drain budgets, struggle with quality, and buckle under pressure when demand spikes. Customers wait longer, businesses lose opportunities, and scaling becomes nearly impossible.",
    image: "/img/Ava/ava-slider-1.png",
  },
  {
    id: 2,
    badge: "SOLUTION",
    title: "Seamless Conversations, Built for Business",
    text: "Ava enables natural, human-like conversations with sub-200ms latency, ensuring smooth customer interactions. Seamlessly integrated with CRMs and telephony systems, it fits directly into existing workflows without disruption.",
    image: "/img/Ava/ava-slider-2.png",
  },
  {
    id: 3,
    badge: "KEY BENEFITS",
    title: "From Hot Leads to Real Results",
    text: "Ava cuts customer engagement costs by up to 80% while delivering sub-200ms response times for natural, seamless conversations. It intelligently escalates only qualified leads, with proven success in UAE real estate and travel and scalability across multiple industries.",
    image: "/img/Ava/ava-slider-3.png",
  },
];

export default function SliderSectionAva() {
  return (
    <ReusableSliderSection
      slides={avaSlides}
      heading="The Future of Scalable Customer Conversations"
      highlight="Customer Conversations"
      backgroundImage="/img/main-slider-img.png"
      showWorkSection={true}
      WorkComponent={AvaWork}
    />
  );
}
