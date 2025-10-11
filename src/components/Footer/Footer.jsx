import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1700px] px-6 lg:px-8 mx-auto ">
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 xl:gap-24
  items-center sm:items-center md:items-start xl:py-12 lg:py-10 py-8"
      >
        {/* Logo and Description */}
        <div className="mb-2 lg:mb-0 flex flex-col justify-center text-center items-center md:text-left md:justify-start md:items-start">
          <div className="mb-6 flex justify-center md:justify-start ">
            {/* Replace with your logo */}
            <Link href="/">
              <Image
                src="/img/q9logo.png"
                alt="Q9 Labs Logo"
                width={150}
                height={40}
                priority
                className="2xl:w-[180px]"
              />
            </Link>
          </div>
          <p className="text-[#ffffffdc] mb-6 text-base xl:text-lg 2xl:text-xl leading-relaxed max-w-[400px] md:max-w-md ">
            Q9labs is a subsidiary of CollabEZ, proudly based in the UAE and
            committed to making artificial intelligence work for businesses
            worldwide.
          </p>

          <p className="flex items-center gap-2">
            <span className="text-xl text-white 2xl:text-2xl">Powered By</span>
            <a
              href="https://collabez.ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/collab.png"
                alt="CollabEZ"
                width={110}
                height={50}
                className="2xl:w-[120px]"
              />
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer" className="mb-2 lg:mb-0 2xl:ml-28">
          <h4 className="text-white text-2xl md:text-[28px] 2xl:text-[30px] font-semibold mb-4 md:mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3 md:space-y-4 text-[#ffffffdc] text-base xl:text-lg 2xl:text-xl">
            <li>
              <Link href="/" className="hover:text-[#06CBDE] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#products"
                className="hover:text-[#06CBDE] transition-colors"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-[#06CBDE] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-[#06CBDE] transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-[#06CBDE] transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Us */}
        <address className="not-italic">
          <h4 className="text-white text-2xl md:text-[28px] 2xl:text-[30px] font-semibold mb-4 md:mb-6">
            Contact Us
          </h4>
          <ul className="space-y-4 text-[#ffffffdc] text-base xl:text-lg 2xl:text-xl">
            <li className="flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-full inline-flex items-center justify-center">
                <Image
                  src="/img/icon1.png"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
              </span>
              <a
                href="mailto:q9labs.ai@gmail.com"
                className="hover:text-white transition-colors break-all"
              >
                hello@q9labs.ai
              </a>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-full inline-flex items-center justify-center">
                  <Image
                    src="/img/icon2.png"
                    alt="location icon"
                    width={32}
                    height={22}
                    aria-hidden="true"
                  />
                </span>
                <p className="text-gray-300">
                  Suite # 30, 602, 6th Floor, Latifa Tower, Near World Trade
                  Centre, Sheikh Zayed Road, Dubai, UAE
                </p>
              </div>

              {/* Map below the address */}
              <div className="mt-4  overflow-hidden 2xl:max-w-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.709630411843!2d55.27834784539159!3d25.222799969380635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42ed8748e289%3A0x7d86ed2d819cf802!2sLatifa%20Tower%20-%20Trade%20Center%20First%20-%20Trade%20Centre%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1759398874222!5m2!1sen!2s"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-500  max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        <div className=" mx-auto  py-5 flex justify-center items-center text-base 2xl:text-lg text-[#ffffffdc]">
          <p>© 2025 Q9 Labs. All rights reserved.</p>
          {/* <p className="flex items-center gap-2">
            <span>Powered By</span>
            <a
              href="https://collabez.ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/collab.png"
                alt="CollabEZ"
                width={100}
                height={30}
              />
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
