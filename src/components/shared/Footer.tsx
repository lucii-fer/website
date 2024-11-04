import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grotesk bg-gray-100 text-white">
      <div className="max-w-8xl mx-auto px-5 py-24 hidden">
        <div className="order-first flex flex-wrap text-left">
          <div className="w-full px-4 md:w-2/4 lg:w-1/5">
            <h2 className="mb-3 text-lg tracking-widest">Est.</h2>
            <nav className="list-none space-y-2 py-3">
              <li>
                <Link href="/">Vitae nec.</Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-2/4 lg:w-1/5">
            <h2 className="mb-3 text-lg tracking-widest">Et.</h2>
            <nav className="mb-10 list-none space-y-2 py-3">
              <li>
                <Link href="/">Ninc elementum.</Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-2/4 lg:w-1/5">
            <h2 className="mb-3 text-lg tracking-widest">Placerat.</h2>
            <nav className="mb-10 list-none space-y-2 py-3">
              <li>
                <Link href="/">Et cursus fringilla.</Link>
              </li>
            </nav>
          </div>
          <div className="w-full md:w-2/4 lg:w-2/5">
            <Link href="/">
              <div className="relative border border-black transition hover:border-gray-500">
                <div className="absolute top-0 right-0 pt-2 pr-2">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66992 0.747559L0.669922 6.74756"
                      stroke="black"
                    />
                    <path
                      d="M0.669922 0.747559H6.66992V6.74756"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  Lorem ipsum accumsan arcu, consectetur adipiscing elit.
                  Consequat arcu.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-2 text-center">
        <div className="max-w-8xl mx-auto px-5 ">
          <div className="right-0 py-8 text-sm">
            {[
              { name: "Terms & Conditions", link: "#" },
              { name: "Privacy Policy", link: "/privacy-policy" },
            ].map((item, index) => (
              <Link key={index} href={item.link} className="mr-16 text-gray-600">
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-sm text-slate-600 py-4 bg-gray-100">
              © 2024 Qiweck Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
