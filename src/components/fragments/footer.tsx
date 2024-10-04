import Link from "next/link";

export default function Footer() {
  return (
    <section className="relative mt-60 flex h-auto w-full max-w-full flex-col items-center justify-center space-y-4 bg-accent p-4 md:mt-20 md:h-[50vh] md:space-x-10 md:p-16">
      <div className="mt-20 flex w-full flex-col items-center justify-center space-y-4 p-4 md:flex-row md:space-x-10 md:p-16">
        <div className="flex w-full flex-col space-y-4 md:flex-row md:items-start md:justify-start md:space-x-10">
          <div className="flex flex-col items-center justify-center space-y-4 md:items-start">
            <h1 className="text-2xl font-bold text-dark">Vendor Space.ai</h1>

            <p className="w-96 text-center text-sm md:text-left">
              Empowering your business with real-time product synchronization
              and inventory management for seamless operations and success.
            </p>
            <div className="flex space-x-2">
              <Link
                className="flex h-8 w-8 items-center justify-center rounded p-[2px] transition duration-300 ease-in-out hover:bg-amber/80"
                href="/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </Link>
              <Link
                className="flex h-8 w-8 items-center justify-center rounded p-[2px] transition duration-300 ease-in-out hover:bg-amber/80"
                href="/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                className="flex h-8 w-8 items-center justify-center rounded p-[2px] transition duration-300 ease-in-out hover:bg-amber/80"
                href="/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <h1 className="text-2xl font-bold text-dark">Company</h1>
            <ul className="text-center md:text-left">
              <li>
                Home
              </li>
              <li>
                Pricing
              </li>
              <li>
                About Us
              </li>
              <li>
                FAQs
              </li>
              <li>
                Careers
              </li>
            </ul>
          </div> 

          <div className="flex flex-col items-center space-y-2 md:items-start">
            <h1 className="text-2xl font-bold text-dark">Developers</h1>
            <ul className="text-center md:text-left">
              <li>
                API
              </li>
              <li>
                Docs
              </li>
              <li>
                Postman Collection
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-2 md:items-start">
            <h1 className="text-2xl font-bold text-dark">Legals</h1>
            <ul className="text-center md:text-left">
              <li>
                Privacy Policy
              </li>
              <li>
                Data Protection
              </li>
              <li>
                Terms of Service
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-2 md:items-start">
            <h1 className="text-2xl font-bold text-dark">Contact Us</h1>
            <ul className="text-center md:text-left">
              <li>support@multivendor.com</li>
              <li>+254 725 400 000</li>
              <li>Westlands, Raphta Road</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t-[0.5px] border-dark/20 p-6 text-center">
        <h1 className="text-sm text-dark/50">&copy; Vendor Space - 2024</h1>
      </div>
    </section>
  );
}
