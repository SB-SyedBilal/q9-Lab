import Hero from "@/components/Ava/Hero";
import Banner from "@/components/Ava/Banner";
import Footer from "@/components/Footer/Footer";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import RequestForm from "@/components/Ava/RequestForm";
import IndustriesSection from "@/components/industries-section/industries-section";
import CarouselPage from "@/components/Ava/CustomerConversations";
import CaseStudies from "@/components/Ava/CaseStudies";

export default function AvaPage() {
    return (
        <>
            <Hero />
            <CarouselPage />
            <HowItWorks />
            <Banner />
            <CaseStudies />
            <RequestForm />
            <Footer />
        </>
    );
}
