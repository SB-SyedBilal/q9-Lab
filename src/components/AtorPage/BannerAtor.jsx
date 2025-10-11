import ReusableBanner from "../ReusableBanner/ReusableBanner";

export default function BannerAtor() {
  return (
    <ReusableBanner
      heading="Ready To Bring Personalized Learning To Every Student?"
      highlights={["Ready To Bring Personalized"]}
      buttonText="Book A Demo"
      buttonLink="#form"
    />
  );
}
