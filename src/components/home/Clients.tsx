function Clients() {
  const logos = [
    { src: "/images/clients/mariana-deri.webp", alt: "Logo 1" },
    { src: "/images/clients/ddasmall.png", alt: "Logo 2" },
    { src: "/images/clients/heavyglare.avif", alt: "Logo 3" },
    { src: "/images/clients/hero.png", alt: "Logo 4" },
    { src: "/images/clients/nete.avif", alt: "Logo 5" },
    { src: "/images/clients/valentine-wigs.avif", alt: "Logo 6" },
  ];
  return (
    <>
      <div className="mt-0 bg-white lg:mt-40">
        <div className="mx-auto">
          <div className="mx-auto px-5 py-24 lg:px-24">
            <div className="my-10 flex w-full flex-col text-center">
              <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                Our Clients
              </h2>
            </div>
            <div
              className="
                grid grid-cols-2
                gap-16
                text-center
                lg:grid-cols-6"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="hidden items-center justify-center lg:inline-block"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="block h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
