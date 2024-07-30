"use client";
import { useEffect, useState } from "react";
import Rules from "@/components/ui/rules";
import { State } from "@/constants/enums";
import { toast } from "sonner";
import { useFormContext } from "@/context/FormContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LoginPage() {
  const router = useRouter();
  const { state, business_name, username, setState } = useFormContext();
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const stateSearchParams = new URLSearchParams(searchParams.toString());

  const handleParamUpdate = (key: string, value: string) => {
    stateSearchParams.set(`${key}`, value);
  };

  useEffect(() => {
    if (state == State.BUSINESS) {
      stateSearchParams.set(`${business_name}`, business_name);
    } else if (state == State.ADMIN) {
      stateSearchParams.set(`${username}`, username);
    }
    console.log("Changed");
  }, [state]);

  function handleBackButton() {
    if (state === State.PRODUCT) {
      setState(State.ADMIN);
    } else if (state === State.ADMIN) {
      setState(State.BUSINESS);
    } else {
      router.push("/");
    }
  }

  return (
    <div className="start relative flex h-full w-96 flex-col justify-center p-4 md:p-20">
      <Rules />
      <button
        onClick={handleBackButton}
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
      </button>
      <h1 className="mt-4 text-4xl font-bold text-white">Vendor Space</h1>
      <p className="light w-96 text-sm text-white">
        To join Vendor Space we will need some of your information. Please Fill
        in for approval process
      </p>
      <div className="z-10 mt-6 flex flex-col space-y-2">
        {state == State.BUSINESS ? (
          <BusinessDetail stateSearchParams={handleParamUpdate} />
        ) : state == State.ADMIN ? (
          <AdminDetails stateSearchParams={handleParamUpdate} />
        ) : state == State.PRODUCT ? (
          <ProductDetails stateSearchParams={handleParamUpdate} />
        ) : null}
      </div>
    </div>
  );
}

function BusinessDetail() {
  const { setState, setBusinessName, business_name } = useFormContext();

  function handleTextChange(event) {
    setBusinessName(event?.target.value);
  }

  function handleUpdateState() {
    if (business_name.length > 0) {
      setState(State.ADMIN);
      toast.info("Business Name updated", {
        description: `Business Name set to ${business_name}`,
      });
    } else {
      toast.warning("Needed field", {
        description: "Business name required",
      });
    }
  }

  return (
    <>
      <label className="text-sm font-bold text-white">
        Enter you Business Name
      </label>
      <input
        onChange={handleTextChange}
        className="h-14 w-full px-6 outline-none hover:outline-none active:outline-none md:w-96"
        placeholder="Business Name"
      />
      <button
        onClick={handleUpdateState}
        className="h-14 w-28 bg-amber uppercase transition-colors duration-300 ease-in-out hover:bg-lime"
      >
        next
      </button>
    </>
  );
}

function AdminDetails() {
  const {
    phone_number,
    account_password,
    username,
    setState,
    setUsername,
    setPhoneNumber,
    setEmail,
    setAccountPassword,
  } = useFormContext();

  const LENGTH = 8;
  const [case1, setCase1] = useState<boolean>(false);
  const [case2, setCase2] = useState<boolean>(false);
  const [case3, setCase3] = useState<boolean>(false);

  function updateStrength(password_text: string) {
    setAccountPassword(password_text);
    const hasSpecialOrNumber = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]/.test(
      password_text,
    );
    setCase3(password_text.length >= LENGTH);
    setCase2(hasSpecialOrNumber);
    setCase1(/[A-Z]/.test(password_text));
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
      case "password":
        updateStrength(value);
        break;
      default:
        break;
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace") {
      const password_text = (event.target as HTMLInputElement).value.slice(
        0,
        -1,
      );
      updateStrength(password_text);
    }
  }

  function handleUpdateState() {
    if (
      username.length > 0 &&
      phone_number.length > 0 &&
      account_password.length > 0
    ) {
      setState(State.PRODUCT);
      toast.success("Staged", {
        description: "Personal details staged for confirmation",
      });
    } else
      toast.warning("Fill fileds", {
        description: "username, phone and password fields are required",
        duration: 5000,
      });
  }

  return (
    <>
      <label className="text-sm font-bold text-white">
        Enter your Full Name
      </label>
      <input
        name="username"
        onChange={handleTextChange}
        className="h-14 w-full px-6 outline-none hover:outline-none active:outline-none md:w-96"
        placeholder="Full Name"
      />
      <label className="text-sm font-bold text-white">
        Enter your email address
      </label>
      <input
        name="email"
        onChange={handleTextChange}
        className="h-14 w-full px-6 outline-none hover:outline-none active:outline-none md:w-96"
        placeholder="Email"
        type="email"
      />
      <label className="text-sm font-bold text-white">
        Enter your phone number
      </label>
      <input
        name="phone"
        onChange={handleTextChange}
        className="h-14 w-full px-6 outline-none hover:outline-none active:outline-none md:w-96"
        placeholder="Phone"
        type="tel"
      />
      <label className="text-sm font-bold text-white">
        Create account password
      </label>
      <input
        name="password"
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        className="h-14 w-full px-6 outline-none hover:outline-none active:outline-none md:w-96"
        placeholder="Password"
        type="password"
      />
      <div>
        <Strength LENGTH={LENGTH} case1={case1} case2={case2} case3={case3} />
      </div>
      <button
        onClick={handleUpdateState}
        className="h-14 w-28 bg-amber uppercase transition-colors duration-300 ease-in-out hover:bg-lime"
      >
        Next
      </button>
    </>
  );
}

interface StrengthProps {
  case1: boolean;
  case2: boolean;
  case3: boolean;
  LENGTH: number;
}

function Strength({ case1, case2, case3, LENGTH }: StrengthProps) {
  return (
    <>
      <ul className="flex h-28 w-full flex-col items-start rounded-b-2xl p-2 peer-focus:block">
        <li className="flex flex-row items-center justify-start space-x-2">
          <input checked={case1} type="radio" name="case_check" id="1" />
          <p className="text-[10px] text-amber">
            Should contain at least one Uppercase letter {"<ABC...>"}
          </p>
        </li>
        <li className="flex flex-row items-center justify-start space-x-2">
          <input checked={case2} type="radio" name="character_check" id="2" />
          <p className="text-[10px] text-amber">
            Should contain a number or special character {"<123!@#...>"}
          </p>
        </li>
        <li className="flex flex-row items-center justify-start space-x-2">
          <input checked={case3} type="radio" name="length_check" id="3" />
          <p className="text-[10px] text-amber">
            Should be atleast {LENGTH} characters long
          </p>
        </li>
      </ul>
    </>
  );
}

function ProductDetails() {
  const {
    setState,
    setBusinessName,
    business_name,
    state,
    industry_category,
    setIndustryCategory,
  } = useFormContext();

  function handleTextChange(event) {
    setIndustryCategory(event?.target?.value);
  }

  function handleUpdateState(func: Promise<CallableFunction>) {
    if (business_name.length > 0) {
      toast.success("Account created", {
        description: `Setting up your dashboard`,
      });
    } else {
      toast.success("Account created", {
        description: `Setting up your dashboard`,
      });
    }
    func();
  }

  const industries = [
    "Retail and E-commerce",
    "Manufacturing",
    "Wholesale and Distribution",
    "Food and Beverage",
    "Fashion and Apparel",
    "Electronics and Technology",
    "Automotive",
    "Pharmaceuticals and Healthcare",
    "Construction",
    "Home Goods and Furniture",
    "Agriculture",
    "Automotive Parts and Services",
    "Other",
  ];

  // todo: convert to base 64 before sendin the request
  async function handleSignUp() {
    toast.success("Sign Up", {
      description:
        "You have been signed up successfully onto Vendor Space - Happy selling.",
    });
  }

  return (
    <>
      <label className="text-sm font-bold text-white">
        Select the industry you are in.
      </label>
      <Select>
        <SelectTrigger className="h-14 w-full rounded-none md:w-80">
          <SelectValue placeholder="Industry selection" />
        </SelectTrigger>
        <SelectContent>
          {industries.map((industry) => (
            <SelectItem
              onClick={handleTextChange}
              key={industry}
              value={industry}
            >
              {industry}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <button
        onClick={handleUpdateState}
        className="h-14 w-28 bg-amber uppercase transition-colors duration-300 ease-in-out hover:bg-lime"
      >
        sign up
      </button>
    </>
  );
}
