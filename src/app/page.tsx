import Hero from "@/components/home/Hero";
import Layout from "../components/Layout";
import Testimonial from "@/components/home/Testimonial";
import Clients from "@/components/home/Clients";
import Products from "@/components/home/Products";

export default function Home() {

  return (
    <>
      <Layout>
        <Hero />
        <div className="grotesk max-w-8xl mx-auto">
          <section className="w-full text-black">
            <Clients/>
            <div className="invisible mx-auto flex max-w-6xl p-3 pb-32 lg:visible lg:px-2">
              <img src="/images/placeholder.png" alt="img" />
            </div>
            <Products/>
            <div className="bg-white text-black">
              <Testimonial />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
