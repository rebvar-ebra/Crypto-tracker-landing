"use client";
import React, { useState } from "react";
import PlanCard from "./plan_card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20">
      <h1 className="text-center text-4xl font-bold mb-4">
        Discover the Full Potential of CoinStats
      </h1>
      <p className="text-center mb-8">
        14-day money-back guarantee. Cancel anytime for any reason. Explore
        CoinStats without limitations and you&apos;ll never want to go back.
      </p>
      <div className="flex items-center justify-center space-x-2 mb-8">
        <Label htmlFor="billing-switch">Monthly</Label>
        <Switch
          id="billing-switch"
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <Label htmlFor="billing-switch">Yearly</Label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlanCard
          title="Basic"
          price="Free"
          features={[
            "10 Portfolios",
            "20,000 Transactions",
            "40 Daily sync count per Portfolio",
            "Basic Support (Under 72 hours)",
          ]}
          buttonText="Select"
        />
        <PlanCard
          title="Premium"
          price={isYearly ? "$167.88/year" : "$13.99/month"}
          description={isYearly ? "billed annually" : "billed monthly"}
          features={[
            "100 Portfolios",
            "100,000 Transactions",
            "200 Daily sync count per Portfolio",
            "Priority Support (Under 24 hours)",
            "Portfolio Performance Analytics",
            "Wallet Analyser",
            "New transactions notifications",
            "Fees Paid Analyser",
            "0% Swapping Fees",
            "Coin Insights",
            "Ad-free",
            "AI Bull Market Price",
            "2x More Sparks",
            "Portfolio Heatmap",
            "Asset Allocation Analytics",
            "Profit & Loss",
            "Custom Alerts",
          ]}
          buttonText="Start Free Trial"
          highlight
        />
        <PlanCard
          title="Degen"
          price={isYearly ? "$754.92/year" : "$62.91/month"}
          description={isYearly ? "billed annually" : "billed monthly"}
          features={[
            "500 Portfolios",
            "1,000,000 Transactions",
            "∞ Daily sync count per Portfolio",
            "VIP Support (Under 1 hour)",
            "Portfolio Performance Analytics",
            "Wallet Analyser",
            "New transactions notifications",
            "Fees Paid Analyser",
            "0% Swapping Fees",
            "Coin Insights",
            "Ad-free",
            "AI Bull Market Price",
            "2x More Sparks",
            "Portfolio Heatmap",
            "Asset Allocation Analytics",
            "Profit & Loss",
            "Custom Alerts",
          ]}
          buttonText="Select Plan"
        />
      </div>
    </section>
  );
}
