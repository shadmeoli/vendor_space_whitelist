"use client";
import Link from "next/link";
import React, { useState, createContext, useContext, ChangeEvent } from "react";
import { TestimonialSection } from "@/components/ui/testimonials";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { toast } from "sonner";
import NavBar from "@/components/fragments/navbar";
import Footer from "@/components/fragments/footer";
import {
  Plan,
  Review,
  PlansContextType,
  PricingCardsProps,
} from "@/interfaces/index";
import Rules from "@/components/ui/rules";
import axios from "axios";

const reviews: Review[] = [
  {
    client: "Shopzetu",
    review:
      "Fantastic platform with great support for vendors. Highly recommend!",
  },
  {
    client: "Vivo Women",
    review: "Smooth onboarding process and excellent customer service.",
  },
  {
    client: "Inken",
    review: "The app is very user-friendly and has helped increase my sales.",
  },
  {
    client: "Ikweta",
    review:
      "Great exposure and a supportive community. Love being a part of this platform!",
  },
  {
    client: "Kidosho",
    review:
      "Excellent tools and resources for managing my online store. Very satisfied!",
  },
  {
    client: "Popular-21",
    review: "Good value for money. The app offers a lot of useful features.",
  },
  {
    client: "Kicks Kenya",
    review: "The team is always ready to help and resolve any issues promptly.",
  },
  {
    client: "Moko Home + Living",
    review: "A great platform that makes it easy to reach new customers.",
  },
  {
    client: "Crafted Kenya",
    review:
      "I love the variety of customization options available. Highly recommend!",
  },
  {
    client: "Zumi Kenya",
    review: "Quick setup and excellent support. Very happy with the service.",
  },
];

export default function HomePage() {
  const [email, setEmail] = useState<string>("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(`${e.target?.value}`);

  async function handleJoinClick() {
    try {
      const response: any = await axios.post("/api/v1/early_access", {
        user_email: email,
      });
      if (response.status === 201) {
        toast.success(`${email}`, {
          description: "Your email has been added to early access",
        });
      } else {
        toast.warning("Already on early access");
      }
    } catch (error) {
      toast.warning("Already on early access");
    } finally {
      setEmail("");
    }
  }

  return (
    <main className="max-w-screen max-h-auto h-screen min-h-screen w-screen">
      <HeroSection
        email={email}
        handleEmailChange={handleEmailChange}
        handleJoinClick={handleJoinClick}
      />
      <FeaturesSection />
      {/* <PricingSection /> */}
      {/* <TestimonialSection reviews={reviews} /> */}
      <NewsLetter
        email={email}
        handleEmailChange={handleEmailChange}
        handleJoinClick={handleJoinClick}
      />
      <Footer />
    </main>
  );
}

interface JoinProps {
  email: string;
  handleEmailChange: (event: any) => void;
  handleJoinClick: () => void;
}

function HeroSection({ email, handleEmailChange, handleJoinClick }: JoinProps) {
  return (
    <section className="flex h-[100%] w-full flex-col items-center justify-center bg-gradient-to-br from-green via-lime via-50% to-amber p-10 font-sans md:p-20">
      <NavBar />
      <Rules />
      <div className="w-full md:w-[80%]">
        <span className="flex h-10 w-auto max-w-80 flex-row items-center justify-start space-x-4 rounded-full border-[0.5px] border-dark bg-none px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              d="M1 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm12 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM1.75 14.5a.75.75 0 0 0 0 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 0 0-1.5 0v.784a.272.272 0 0 1-.35.25A49.043 49.043 0 0 0 1.75 14.5Z"
              clipRule="evenodd"
            />
          </svg>
          <p>|</p>
          <p className="font-sans text-[16px] font-light uppercase">
            with M-Pesa payments
          </p>
        </span>
        <h1 className="font-dark font-sans text-4xl font-black uppercase md:text-8xl">
          manage your <span className="text-orange">marketplace</span> inventory
          with ease.
        </h1>
        <p className="text-lg font-light lowercase tracking-[5%] md:text-[32px]">
          STOCK TAKE, INVENTORY MANAGEMENT AND ALERTS
        </p>

        <div className="mt-4">
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            autoComplete="email"
            placeholder="Email for early for early access"
            className="active:oultine-none w-80 p-4 outline-none hover:outline-none"
          />
          <button
            onMouseDown={handleJoinClick}
            className="w-20 bg-amber p-4 hover:bg-orange active:bg-lime"
          >
            join
          </button>
        </div>

        {/* <Link
          href="/auth/signup"
          className="group mt-4 flex h-12 w-36 flex-row items-center justify-center space-x-2 bg-pink transition duration-300 ease-linear hover:bg-orange"
        >
          <p>Get Started</p>
          <span className="transition duration-200 ease-linear group-hover:-rotate-45">
            &rarr;
          </span>
        </Link> */}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="flex h-[718px] w-full max-w-full flex-wrap items-center justify-center bg-accent md:gap-x-8">
      <div className="relative flex h-80 w-full flex-col space-y-4 bg-pink p-4 md:w-96">
        <p className="uppercase">Shopify</p>
        <h1 className="text-5xl uppercase">REALTIME PRODUCT SYNC</h1>
        <Link
          href="/learn_more"
          className="group absolute bottom-4 right-4 flex flex-row items-center justify-start space-x-2 p-2 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:border-2 hover:border-b-amber hover:border-r-amber hover:bg-accent"
        >
          <span>Learn More</span>{" "}
          <span className="transition duration-200 ease-linear group-hover:-rotate-45">
            &rarr;
          </span>
        </Link>
      </div>
      <div className="relative flex h-80 w-full flex-col space-y-4 bg-amber p-4 md:w-96">
        <p className="uppercase">Shopify</p>
        <h1 className="text-5xl uppercase">REFINED ADMIN DASHBOARD</h1>
        <Link
          href="/learn_more"
          className="group absolute bottom-4 right-4 flex flex-row items-center justify-start space-x-2 p-2 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:border-2 hover:border-b-orange hover:border-r-orange hover:bg-accent"
        >
          <span>Learn More</span>{" "}
          <span className="transition duration-200 ease-linear group-hover:-rotate-45">
            &rarr;
          </span>
        </Link>
      </div>
      <div className="relative flex h-80 w-full flex-col space-y-4 bg-orange p-4 md:w-96">
        <p className="uppercase">Shopify</p>
        <h1 className="text-5xl uppercase">better inventory managment</h1>
        <Link
          href="/learn_more"
          className="group absolute bottom-4 right-4 flex flex-row items-center justify-start space-x-2 p-2 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:border-2 hover:border-b-violet-600 hover:border-r-violet-600 hover:bg-accent"
        >
          <span>Learn More</span>{" "}
          <span className="transition duration-200 ease-linear group-hover:-rotate-45">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}

function PricingSection() {
  const [plan, setPlan] = useState<keyof PlansContextType>("monthly");

  const features = {
    basic: ["Basic Feature 1", "Basic Feature 2", "Basic Feature 3"],
    pro: ["Pro Feature 1", "Pro Feature 2", "Pro Feature 3", "Pro Feature 4"],
    premium: [
      "Premium Feature 1",
      "Premium Feature 2",
      "Premium Feature 3",
      "Premium Feature 4",
      "Premium Feature 5",
    ],
  };

  const plans: PlansContextType = {
    monthly: [
      {
        title: "Basic",
        subTitle: "Best for SMEs",
        price: "$150/month",

        features: features.basic,
      },
      {
        title: "Pro",
        subTitle: "Best for Fairly large stores (recommended)",
        price: "$250/month",
        features: features.pro,
      },
      {
        title: "Premium",
        subTitle: "Best for large stores",
        price: "$900/month",
        features: features.premium,
      },
    ],
    yearly: [
      {
        title: "Basic",
        price: "$1500/year",
        subTitle: "Best for SMEs",
        features: features.basic,
      },
      {
        title: "Pro",
        price: "$2800/year",
        subTitle: "Best for Fairly large stores (recommended)",
        features: features.pro,
      },
      {
        title: "Premium",
        price: "$3100/year",
        subTitle: "Best for large stores",
        features: features.premium,
      },
    ],
    custom: [
      {
        title: "Custom Plan",
        subTitle: "Contact us for pricing",
        price: "$???",
        features: ["Select only the features that your business needs."],
      },
    ],
  };

  const handleSwitch = (value: string) => console.log(value);
  return (
    <section className="relative mt-60 flex h-auto w-full flex-col items-center justify-start p-10 md:mt-0 md:h-[60vh]">
      <h1 className="font-primary text-4xl font-light">Pricing plans</h1>
      <ToggleGroup className="mt-4 h-12" type="single">
        <div className="flex h-20 w-96 flex-row items-center justify-center space-x-4 px-6 font-sans font-bold tracking-wide">
          <ToggleGroupItem
            onClick={() => setPlan("monthly")}
            className="h-8 w-24 rounded-none border-b-[0.5px] border-b-dark/40 bg-none hover:bg-amber hover:text-black"
            value="monthly"
          >
            Monthly
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => setPlan("yearly")}
            className="h-8 w-24 rounded-none border-b-[0.5px] border-b-dark/40 bg-none hover:bg-amber hover:text-black"
            value="yearly"
          >
            Yearly
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => setPlan("custom")}
            className="h-8 w-24 rounded-none border-b-[0.5px] border-b-dark/40 bg-none hover:bg-amber hover:text-black"
            value="custom"
          >
            Custom
          </ToggleGroupItem>
        </div>
      </ToggleGroup>
      <PricingCards data={plans[plan]} plan={plan} />
    </section>
  );
}

function PricingCards(props: PricingCardsProps) {
  const { plan, data } = props;

  switch (plan) {
    case "monthly": {
      return (
        <div className="mt-4 flex w-full flex-col items-center gap-y-2 px-6 md:w-[55%] md:flex-row md:gap-x-4">
          {data.map((featureSet: Plan, index: number) => (
            <div
              key={index}
              className="relative h-80 w-[90%] space-y-6 rounded-2xl bg-gradient-to-br from-accent to-accent/30 p-6 shadow last:h-96 even:h-96 even:w-[90%] even:border-[0.5px] even:border-orange even:bg-gradient-to-b even:from-accent/50 even:to-accent/20 even:shadow-xl md:w-[34vw] md:even:w-[36vw]"
            >
              <div className="w-full space-y-2">
                <h1 className="text-lg font-bold">{featureSet.title}</h1>
                <p className="text-sm font-light">{featureSet.subTitle}</p>
                <h1 className="font-mono text-xl font-bold">
                  {featureSet.price}
                </h1>
              </div>
              <ul className="space-y-[2px] px-2">
                {featureSet.features.map((feature: string, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center justify-start space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-light text-dark">{feature}</p>
                  </li>
                ))}
              </ul>
              <button className="bottom-6 h-12 w-full bg-amber transition duration-300 ease-in-out hover:bg-orange">
                subscribe
              </button>
            </div>
          ))}
        </div>
      );
    }
    case "yearly": {
      return (
        <div className="mt-4 flex w-full flex-col items-center gap-y-2 px-6 md:w-[55%] md:flex-row md:gap-x-4">
          {data.map((featureSet, index) => (
            <div
              key={index}
              className="relative h-80 w-[90%] space-y-6 rounded-2xl bg-gradient-to-br from-accent to-accent/30 p-6 shadow last:h-96 even:h-96 even:w-[90%] even:border-[0.5px] even:border-orange even:bg-gradient-to-b even:from-accent/50 even:to-accent/20 even:shadow-xl md:w-[34vw] md:even:w-[36vw]"
            >
              <div className="w-full space-y-2">
                <h1 className="text-lg font-bold">{featureSet.title}</h1>
                <p className="text-sm font-light">{featureSet.subTitle}</p>
                <h1 className="font-mono text-xl font-bold">
                  {featureSet.price}
                </h1>
              </div>
              <ul className="space-y-[2px] px-2">
                {featureSet.features.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex flex-row items-center justify-start space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-light text-dark">{feature}</p>
                  </li>
                ))}
              </ul>
              <button className="bottom-6 h-12 w-full bg-amber transition duration-300 ease-in-out hover:bg-orange">
                subscribe
              </button>
            </div>
          ))}
        </div>
      );
    }
    case "custom": {
      return (
        <div className="mt-4 flex w-96 flex-col items-center justify-center gap-y-2 px-6 md:flex-row md:gap-x-4">
          {data.map((featureSet, index) => (
            <div
              key={index}
              className="relative h-80 w-[90%] space-y-6 rounded-2xl bg-gradient-to-br from-accent to-accent/30 p-6 shadow last:h-96 even:h-96 even:w-[90%] even:border-[0.5px] even:border-orange even:bg-gradient-to-b even:from-accent/50 even:to-accent/20 even:shadow-xl md:w-[34vw] md:even:w-[36vw]"
            >
              <div className="w-full space-y-2">
                <h1 className="text-lg font-bold">{featureSet.title}</h1>
                <p className="text-sm font-light">{featureSet.subTitle}</p>
                <h1 className="font-mono text-xl font-bold">
                  {featureSet.price}
                </h1>
              </div>
              <ul className="space-y-[2px] px-2">
                {featureSet.features.map((feature: string, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center justify-start space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-light text-dark">{feature}</p>
                  </li>
                ))}
              </ul>
              <button className="bottom-6 h-12 w-full bg-amber transition duration-300 ease-in-out hover:bg-orange">
                subscribe
              </button>
            </div>
          ))}
        </div>
      );
    }
  }
}

function NewsLetter({ email, handleEmailChange, handleJoinClick }: JoinProps) {
  return (
    <section className="flex h-[60vh] w-[100vw] items-center justify-center">
      <div className="relative flex h-[90%] w-[90%] flex-col items-center justify-center space-y-4 overflow-hidden rounded-2xl bg-orange md:w-[60%]">
        <h1 className="text-2xl font-bold text-white">
          Sign Up for a News letter.
        </h1>
        <p className="w-full text-balance text-center text-sm text-accent md:w-[45%]">
          Stay ahead in e-commerce with our monthly newsletter! Get the latest
          updates, expert tips, and success stories from top vendors. Subscribe
          now to unlock the full potential of your online store!
        </p>
        <div className="mt-4">
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            autoComplete="email"
            placeholder="Join our news letter"
            className="active:oultine-none w-80 p-4 outline-none hover:outline-none"
          />
          <button
            onMouseDown={handleJoinClick}
            className="w-20 bg-amber p-4 hover:bg-orange active:bg-lime"
          >
            join
          </button>
        </div>

        <Rules />
      </div>
    </section>
  );
}
