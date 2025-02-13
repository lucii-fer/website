import About from "@/components/About";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QiweckSolutions | Whatsapp Bulk Messanger | Bulk SMS Sender",
  description: "Qiweck Solutions provides expert web development services, offering custom websites, responsive design, eCommerce solutions, and SEO to boost your online presence.",
};

export default function Home() {

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Clients />
      <Products/>
      {/* <Features /> */}
      <About />
      {/* <CallToAction /> */}
      {/* <Pricing /> */}
      <Testimonials />
      {/* <Faq /> */}
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      {/* <Contact /> */}
    </main>
  );
}
