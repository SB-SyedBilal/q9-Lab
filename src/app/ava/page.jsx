import Hero from "@/components/Ava/Hero";
import Banner from "@/components/Ava/Banner";
import RequestForm from "../../components/RequestForm/RequestForm";
import CarouselPage from "@/components/Ava/CustomerConversations";
import CaseStudies from "@/components/Ava/CaseStudies";
import AvaWorks from "@/components/Ava/AvaWorks";

export default function AvaPage() {
    return (
        <>
            <Hero />
            {/* <CarouselPage /> */}
            <AvaWorks />
            <Banner />
            <CaseStudies />
            <RequestForm />
        </>
    );
}
