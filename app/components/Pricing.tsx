"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import PlanCard from "./plan_card";

export default function Pr() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Basic",
      monthlyPrice: "0",
      yearlyPrice: "0",
      description: "Free plan ideal for individuals starting out.",
      features: [
        "10 Portfolios",
        "20,000 Transactions",
        "40 Daily syncs per Portfolio",
        "Basic Support (Under 72 hours)",
        "Portfolio Performance Analytics",
        "Wallet Analyser",
        "New transactions notifications",
        "Fees Paid Analyser",
        "0% Swapping Fees",
        "Coin Insights",
        "Ad-free experience",
      ],
      buttonText: "Select Plan",
      highlight: false,
    },
    {
      title: "Premium",
      monthlyPrice: "15.99",
      yearlyPrice: "167.99",
      description: "Best for professionals managing multiple portfolios.",
      features: [
        "100 Portfolios",
        "100,000 Transactions",
        "200 Daily syncs per Portfolio",
        "Priority Support (Under 24 hours)",
        "Portfolio Performance Analytics",
        "Wallet Analyser",
        "New transactions notifications",
        "Fees Paid Analyser",
        "0% Swapping Fees",
        "Coin Insights",
        "Ad-free experience",
        "AI Bull Market Price",
        "2x More Sparks",
        "Portfolio Heatmap",
        "Asset Allocation Analytics",
        "Profit & Loss Reports",
        "Custom Alerts",
      ],
      buttonText: "Start Free Trial",
      highlight: true,
    },
    {
      title: "Degen",
      monthlyPrice: "69.99",
      yearlyPrice: "199.99",
      description: "Designed for high-volume traders and power users.",
      features: [
        "500 Portfolios",
        "1,000,000 Transactions",
        "Unlimited Daily syncs per Portfolio",
        "VIP Support (Under 1 hour)",
        "Portfolio Performance Analytics",
        "Wallet Analyser",
        "New transactions notifications",
        "Fees Paid Analyser",
        "0% Swapping Fees",
        "Coin Insights",
        "Ad-free experience",
        "AI Bull Market Price",
        "2x More Sparks",
        "Portfolio Heatmap",
        "Asset Allocation Analytics",
        "Profit & Loss Reports",
        "Custom Alerts",
      ],
      buttonText: "Select Plan",
      highlight: false,
    },
    {
      title: "Team",
      price: "Contact Us",
      description: "Customized solutions for teams and organizations.",
      features: [
        "All Premium Features",
        "VIP Support via Dedicated Channel",
        "Seats for Communities",
        "Personalized Features Upon Request",
      ],
      buttonText: "Contact Us",
      highlight: false,
    },
  ];

  return (
    <div className="sm:flex sm:flex-col sm:align-center p-10">
      <h1 className="text-center text-4xl font-bold mb-4">
        Discover the Full Potential of CoinStats
      </h1>
      <p className="text-center mb-8">
        14-day money-back guarantee. Cancel anytime for any reason. Explore
        CoinStats without limitations and you&apos;ll never want to go back.
      </p>
      <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
        <Label className="text-2xl mr-1" htmlFor="billing-switch">
          Monthly
        </Label>
        <Switch
          id="billing-switch"
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <Label className="text-2xl ml-1" htmlFor="billing-switch">
          Yearly
        </Label>
      </div>

      <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-6 md:max-w-7xl md:mx-auto">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            price={
              isYearly ? plan.yearlyPrice ?? "N/A" : plan.monthlyPrice ?? "N/A"
            }
            description={plan.description}
            features={plan.features}
            buttonText={plan.buttonText}
            highlight={plan.highlight}
            isYearly={isYearly} // Pass the isYearly state
          />
        ))}
      </div>
    </div>
  );
}
