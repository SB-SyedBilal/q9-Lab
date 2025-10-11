import ReusableBanner from "../ReusableBanner/ReusableBanner";

export default function BannerHirm() {
  return (
    <ReusableBanner
      heading="Ready To Make Hiring Faster, Smarter, And Fairer?"
      highlights={["Hiring Faster", "Smarter", "Fairer?"]} // 👈 “And” white rahega
      buttonText="Book A Demo"
      buttonLink="#form"
    />
  );
}
