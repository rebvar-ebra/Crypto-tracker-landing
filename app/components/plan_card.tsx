"use client";

import { Button } from "@/components/ui/button";

interface PlanCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  buttonText: string;
  highlight?: boolean;
}

export default function PlanCard({
  title,
  price,
  description,
  features,
  buttonText,
  highlight = false,
}: PlanCardProps) {
  return (
    <div
      className={`p-6 rounded-lg ${
        highlight ? "border-2 border-orange-500" : "bg-gray-800"
      }`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-4xl font-bold mb-2">{price}</p>
      {description && <p className="text-sm mb-4">{description}</p>}
      <ul className="mb-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">✔</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${highlight ? "bg-orange-500" : "bg-gray-700"}`}
      >
        {buttonText}
      </Button>
    </div>
  );
}
