"use client";

import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billing: string;
  highlighted: boolean;
  activeUsers: number;
  features: string[];
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic plan",
    price: 147,
    billing: "Billed annually",
    highlighted: false,
    activeUsers: 89,
    features: [
      "Average of 2-5 easy to follow trade alerts",
      "Average of 2-5 easy to follow trade alerts per week",
      "Average of 2-5 easy to follow",
      "Average of 2-5 easy to follow trade alerts",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 899,
    billing: "Full Price",
    highlighted: true,
    activeUsers: 102,
    features: [
      "Average of 2-5 easy to follow trade alerts",
      "Average of 2-5 easy to follow trade",
      "Average of 2-5 easy to follow trade alerts per week",
      "Average of 2-5 easy to follow",
      "Average of 2-5 easy to follow trade alerts",
      "Average of 2-5 easy to follow",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 1299,
    billing: "Full Price",
    highlighted: false,
    activeUsers: 89,
    features: [
      "Average of 2-5 easy to follow trade alerts",
      "Average of 2-5 easy to follow trade alerts per week",
      "Average of 2-5 easy to follow",
      "Average of 2-5 easy to follow trade alerts",
      "Average of 2-5 easy to follow trade alerts",
      "Average of 2-5 easy to follow trade alerts",
    ],
  },
];

const PricingConfiguration = () => {
  return (
    <div className="flex-1 overflow-auto bg-background">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-foreground mb-12">
          Pricing Configuration
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col relative transition-all ${
                plan.highlighted
                  ? "bg-teal-600 text-white shadow-lg scale-105"
                  : "bg-card border border-border text-foreground"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <button
                  className={`p-2 rounded-full border ${
                    plan.highlighted
                      ? "border-white/30 hover:bg-white/10"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <PencilIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span
                    className={
                      plan.highlighted
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }
                  >
                    /month
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlighted ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {plan.billing}
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "bg-white text-teal-600"
                          : "bg-teal-600 text-white"
                      }`}
                    >
                      ●
                    </div>
                    <p
                      className={`text-sm ${
                        plan.highlighted ? "text-white" : "text-foreground"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className={`w-full font-semibold py-6 ${
                  plan.highlighted
                    ? "bg-white text-teal-600 hover:bg-white/90"
                    : "border-teal-600 text-teal-600 hover:bg-teal-50"
                }`}
              >
                ACTIVE USER {plan.activeUsers}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingConfiguration;
