import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutExperience from "@/components/about/AboutExperience";

export const metadata = {
  title: "Chi siamo | SicilCar",
  description:
    "Scopri la storia di SicilCar e i servizi di mobilità a Messina dal 1986.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      <AboutExperience />

      <Footer />
    </main>
  );
}
