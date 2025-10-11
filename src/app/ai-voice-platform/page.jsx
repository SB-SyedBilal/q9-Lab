import Hero from "@/components/Ava/Hero";
import RequestForm from "../../components/RequestForm/RequestForm";
import AvaWork from "../../components/Ava/AvaWork";
import AvaBanner from "../../components/Ava/AvaBanner";
import AvaCase from "../../components/Ava/AvaCase";
import AvaNewSlider from "../../components/Ava/AvaNewSlider";
import SliderSectionAva from "../../components/Ava/SliderSectionAva";

export default function AvaPage() {
  return (
    <>
      <Hero />
      {/* <AvaNewSlider /> */}
      <SliderSectionAva />
      <AvaBanner />
      <AvaCase />

      <RequestForm />
    </>
  );
}
