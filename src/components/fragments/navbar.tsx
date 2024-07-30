import Link from "next/link";
import { toast } from "sonner";

export default function NavBar() {
  // function handleCommingSoon() {
  //   toast.info("Comming soon", {
  //     description:
  //       "We are working on it, sign up for a early access instead 🙃",
  //     duration: 5000,
  //   });
  // }

  return (
    <div className="absolute top-4 z-10 flex h-20 w-full flex-row items-center justify-between px-2 md:px-60">
      <Link href="/" className="font-sans text-xl text-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-8 text-black outline-none hover:outline-none active:outline-none"
        >
          <path d="M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z" />
        </svg>
      </Link>
      {/* <div className="hidden flex-none flex-row items-center space-x-6 md:flex">
        <Link
          className="trasition text-dark duration-300 ease-in-out hover:text-black hover:underline hover:underline-offset-2"
          href="/"
        >
          Home
        </Link>
        <Link
          className="trasition text-dark duration-300 ease-in-out hover:text-black hover:underline hover:underline-offset-2"
          href="/"
        >
          Pricing
        </Link>
        <Link
          className="trasition text-dark duration-300 ease-in-out hover:text-black hover:underline hover:underline-offset-2"
          href="/"
        >
          About Us
        </Link>
        <Link
          className="trasition text-dark duration-300 ease-in-out hover:text-black hover:underline hover:underline-offset-2"
          href="/"
        >
          Developers
        </Link>
        <Link
          className="trasition text-dark duration-300 ease-in-out hover:text-black hover:underline hover:underline-offset-2"
          href="/"
        >
          FAQs
        </Link>
      </div>

      <div className="hidden flex-row items-center space-x-4 md:flex">
        <Link
          // onClick={handleCommingSoon}
          className="flex h-12 w-28 items-center justify-center border-[0.5px] border-dark transition duration-300 ease-in-out hover:border-amber hover:bg-amber hover:text-black"
          href="/auth/login"
        >
          Log In
        </Link>
        <Link
          // onClick={handleCommingSoon}
          className="flex h-12 w-28 items-center justify-center border-[0.5px] border-dark transition duration-300 ease-in-out hover:border-orange hover:bg-orange hover:text-black"
          href="/auth/signup"
        >
          Sign Up
        </Link>
      </div> */}
    </div>
  );
}
