import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "SB RV",
    designation: "From Play Store",
    content:
      "I only used it one time but I like it. Import of numbers from a csv file worked well. I was able to create one text message and send it to 50 of our customers.",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjXV2fAvy56w-DD7J5QBW8vanaXUJN5fWh6vRPIg8Pc7Yd1EsWnu=s32-rw",
    star: 5,
  },
  {
    id: 2,
    name: "Prince Isaac TV",
    designation: "From Play Store",
    content:
      "This app is 100% awesome, works perfectly, no ads, there customer care service is 100% available to answer queries and help you incase you have troubles, I do recommend this app to everyone.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Naveen Kumar",
    designation: "From Play Store",
    content:
      "This App is wonderful, use your time effectively for bulk sms sending.I have used many apps, But Bulk sms sender has cool features which Cant be compared with the other apps . Highly suggested.",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjUnE3hKKE4FiM9yn6l0frMyIirgYFYGoCusqgZGsg8krwCx5ik=s32-rw",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]" id="testimonials">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="Discover what our clients have to say about us. They're thrilled to use our app, which has helped them expand their network and business."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
