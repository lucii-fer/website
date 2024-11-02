import Link from "next/link";

const Header = () => {
  const navigations = [
    { name: 'Home', link: '/' },
    { name: 'Product', link: '/products' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
  ];
  return (
    <>
      <div
        className="
        bg-blue-600
        grotesk
        absolute
        top-0
        h-7
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      "
      >
        Scelerisque egestas et euismod.
        <Link href="/" className="pl-3 underline">
          Take me there
        </Link>
      </div>
      <div className="grotesk mt-6 flex items-center justify-between py-4 px-4 sm:mx-0 sm:px-0 md:px-6">
        <div className="mt-4 inline-block pb-4 pl-8">
          <Link href="/" className="align-middle text-3xl font-bold text-black">
            NINE4
          </Link>
          <div className="hidden pl-14 align-middle xl:inline-block">
            {navigations.map((nav, index) => (
              <Link key={index} href={nav.link} className="pr-12 text-black">
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden py-1 text-right xl:inline-block">
            <Link
              className="bg-blue-600 mt-2 inline-flex items-center px-8 py-3 font-semibold tracking-tighter text-white"
              href="/"
            >
              Request a demo
            </Link>
          </div>
          <button className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
