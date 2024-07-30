"use client";
import Rules from "@/components/ui/rules";
import Link from "next/link";
import { useFormContext } from "@/context/FormContext";
import { toast } from "sonner";

export default function LoginPage() {
  return (
    <div className="start relative flex h-[50vh] max-w-[40vw] flex-col justify-center p-8 md:max-h-full md:w-[30vw] md:p-20">
      <Rules />
      <Link
        href="/"
        className="flex h-4 w-16 flex-row items-center text-white hover:border-b-[0.5px] hover:border-amber"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </span>
        <span>Back</span>
      </Link>
      <h1 className="text-4xl font-bold text-white">Vendor Space</h1>
      <p className="light w-80 text-sm text-white">
        To join Vendor Space we will need some of your information. Please Fill
        in fir approval process
      </p>
      <div className="z-10 mt-6 flex w-80 flex-col space-y-2">
        <LoginForm />
      </div>
    </div>
  );
}

/**
For the sign up it will be line typer form

- business Name
- user name (first name + last name)
- phone
- email (optional)
- account password
*/
function LoginForm() {
  const { username, account_password, setUsername, setAccountPassword } =
    useFormContext();

  async function handleLogin() {
    // todo: convert to base 64 before sendin the request
    if (username && account_password) {
      toast.success("Logged In", {
        description: "You have been logged into your account.",
      });
    } else {
      toast.error("Required Filed", {
        description: "The username and password fields are required",
      });
    }
  }

  return (
    <>
      <label className="text-sm font-bold text-white">
        Enter you username Name
      </label>
      <input
        value={username}
        onChange={(e) => setUsername(e?.target.value)}
        className="h-14 w-96 px-6 outline-none hover:outline-none active:outline-none"
        placeholder="username"
        type="text"
      />
      <label className="mt-4 text-sm font-bold text-white">
        Enter you account password
      </label>
      <input
        value={account_password}
        onChange={(e) => setAccountPassword(e?.target.value)}
        className="h-14 w-96 px-6 outline-none hover:outline-none active:outline-none"
        placeholder="password"
        type="password"
        autoComplete="current-password"
      />
      <div>
        <Link href="/reset" className="text-sm font-bold text-lime">
          Forgot password?
        </Link>
      </div>
      <button
        onClick={handleLogin}
        className="h-14 w-28 bg-amber uppercase transition-colors duration-300 ease-in-out hover:bg-lime"
      >
        login
      </button>
    </>
  );
}
