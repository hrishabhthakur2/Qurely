import Image from "next/image";
import Features from "./homeComponents/features";
import Header from "./homeComponents/header";
import HeroSection from "./homeComponents/heroSection";
import AboutUs from "./homeComponents/AboutUs"; // Import the AboutUs component

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50/50">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex flex-col space-y-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Features */}
        <Features />

        {/* About Us Section */}
        <AboutUs /> {/* Add the About Us section here */}
      </main>
    </div>
  );
}