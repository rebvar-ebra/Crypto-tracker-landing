interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlight?: boolean;
  isYearly: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  highlight = false,
  isYearly, 
}) => {
  return (
    <div
      className={`border rounded-lg shadow-sm divide-y divide-slate-200 p-6 transition duration-200 ease-in-out ${
        highlight
          ? "border-slate-900 bg-slate-100 hover:shadow-lg"
          : "border-slate-200 hover:border-slate-300 hover:shadow-md"
      }`}
    >
      <div>
        <h2
          className={`text-xl font-bold leading-6 ${
            highlight ? "text-slate-900" : "text-slate-700"
          }`}
        >
          {title}
        </h2>
        <p className="mt-2 text-base text-slate-600 leading-tight">
          {description}
        </p>
        <p className="mt-8">
          <span className="text-4xl font-bold tracking-tighter text-slate-900">
            ${price}
          </span>
          <span className="text-base font-medium text-slate-500">
            {isYearly ? "/yr" : "/mo"}
          </span>
        </p>
        <a
          href="#"
          className={`mt-8 block w-full text-center rounded-md py-2 text-sm font-semibold transition duration-200 ${
            highlight
              ? "bg-slate-900 text-white hover:bg-slate-700"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          {buttonText}
        </a>
      </div>
      <ul className="mt-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
