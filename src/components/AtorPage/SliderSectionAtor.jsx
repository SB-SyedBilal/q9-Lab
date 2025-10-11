import ReusableSliderSection from "../../components/ReusableSliderSection/ReusableSliderSection";
import AtorWork from "../AtorPage/AtorWorks"

const atorSlides = [
  {
    id: 1,
    badge: "CHALLENGE",
    title: "The Gap in Learning Support",
    text: "Many students struggle because they can’t afford quality one-on-one tutoring. The lack of personalized guidance limits their learning potential.",
    image: "/img/slider-ator-1.png",
  },
  {
    id: 2,
    badge: "SOLUTION",
    title: "Ator: Personalized Learning for Every Student",
    text: "Ator solves this by offering interactive lessons, visual diagrams, and practice exercises. Each learning path is personalized to the student’s needs.",
    image: "/img/slider-ator-2.png",
  },
  {
    id: 3,
    badge: "KEY BENEFITS",
    title: "Simple, Adaptive, and Global Learning Experience",
    text: "It explains concepts in simple terms, generates clear diagrams, and adjusts to the learner’s pace. Ator supports multiple subjects and languages seamlessly.",
    image: "/img/slider-ator-3.png",
  },
];

export default function SliderSectionAtor() {
  return (
    <ReusableSliderSection
      slides={atorSlides}
      heading="The Future of Scalable Customer Conversations"
      highlight="Customer Conversations"
      backgroundImage="/img/main-slider-img.png"
      showWorkSection={true}
      WorkComponent={AtorWork}
    />
  );
}
