import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Features/SingleFeature";
import productData from "./productData";
import Image from "next/image";

const Products = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]" id="products">
      <div className="container">
        <SectionTitle
          subtitle="Products"
          title="Our main products made with love."
          paragraph="Our products are made only for android platform and it is freemium you can use with limited access for free for sending messages via sms as well as whatsapp."
        />
       

       <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {productData.map((product, i) => (
            <div className={`w-full px-4 md:w-1/2 lg:w-1/2`} key={i}>
            <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <Image src={product.icon} alt={product.title} width={100} height={100} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                {product.title}
              </h3>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
                {product.paragraph}
              </p>
              <Link
                href={product.freeLink}
                target="__blank"
                className="text-base font-medium text-white hover:text-white dark:text-white dark:hover:text-white bg-primary p-4 py-3 rounded-sm mr-4"
              >
                Download Free App
              </Link>
              <Link
                href={product.paidLink}
                target="__blank"
                className="text-base font-medium text-white hover:text-white dark:text-white dark:hover:text-white bg-primary p-4 py-3 rounded-sm"
              >
                Download Premiuim App
              </Link>
            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
