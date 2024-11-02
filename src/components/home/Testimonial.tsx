import React from "react";

const Testimonial: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-violet-500 to-blue-700 mb-10 relative py-24 overflow-hidden">
      {/* Your Testimonial component code here */}
      <img
        src="/images/cta-bg.png"
        className="absolute h-[300px] right-[-100px] top-0 opacity-20 rotate-180"
      />
      <img
        src="/images/cta-bg.png"
        className="absolute h-[300px] left-[-200px] bottom-[0px] opacity-20 "
      />
      <div className="text-black z-10 relative max-w-7xl mx-auto">
        <div className="max-w-8xl mx-auto flex flex-col px-5  lg:flex-row items-center">
         
          <div className="items-left flex flex-col text-left lg:w-1/2 lg:items-start lg:text-left">
            <h2 className="mb-2 text-lg leading-tight text-white sm:text-3xl font-bold max-w-lg">
              Optimize Your IT Infrastructure—Let’s Talk!
            </h2>
            <p className="text-slate-200 max-w-lg">
              Innovative IT solutions tailored to your needs—optimizing
              infrastructure, enhancing cybersecurity, and empowering growth for
              a future-ready business.
            </p>
            <button className="mt-6 py-3 bg-white border-white border-2 hover:bg-slate-200 text-indigo-600 font-bold px-8 rounded">
              Get Started
            </button>
          </div>
           <div className="lg:mb-0 lg:w-full lg:max-w-xl">
            <img
              className="rounded-3xl object-cover object-center h-[500px]"
              alt="image"
              src="/images/cta.avif"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
