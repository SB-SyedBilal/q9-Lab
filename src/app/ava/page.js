import Hero from "@/components/Ava/Hero";
import Banner from "@/components/Ava/Banner";
import Footer from "@/components/Footer/Footer";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import RequestForm from "@/components/Ava/RequestForm";
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
