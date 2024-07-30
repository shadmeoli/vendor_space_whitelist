interface Plan {
  title: string;
  price: string;
  subTitle: string;
  features: string[];
}

interface PlansContextType {
  monthly: Plan[];
  yearly: Plan[];
  custom: Plan[];
}

interface PricingCardsProps {
  plan: string;
  data: Plan[];
}

interface Review {
  client: string;
  review: string;
}

export { Plan, PlansContextType, PricingCardsProps, Review };
