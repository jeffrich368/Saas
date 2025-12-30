import { useState } from "react";
import { Container } from "../shared/Container";
import { Check } from "lucide-react"; // Ensure you have lucide-react installed

export const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            price: isAnnual ? "0" : "0",
            period: "/mo",
            description: "Perfect for individuals exploring AI capabilities.",
            features: [
                "50 AI Generations/month",
                "Basic Analytics Dashboard",
                "Community Support",
                "1 Project Slot",
            ],
            cta: "Get Started",
            highlight: false,
        },
        {
            name: "Professional",
            price: isAnnual ? "29" : "39",
            period: "/mo",
            description: "For creators and teams requiring more power.",
            features: [
                "Unlimited Generations",
                "Advanced Analytics & Export",
                "Priority 24/7 Support",
                "10 Project Slots",
                "API Access (Beta)",
            ],
            cta: "Start Free Trial",
            highlight: true, // This triggers the "Popular" style
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Scalable solutions for large organizations.",
            features: [
                "Everything in Pro",
                "Dedicated Account Manager",
                "SSO Authentication",
                "Unlimited Projects",
                "Custom Model Training",
            ],
            cta: "Contact Sales",
            highlight: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <Container>
                {/* Header & Toggle */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Choose the plan that best fits your needs. No hidden fees.
                    </p>

                    {/* Monthly/Annual Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none"
                        >
                            <span
                                className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                    isAnnual ? "translate-x-6" : "translate-x-0"
                                }`}
                            />
                        </button>
                        <span className={`text-sm font-semibold ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                            Yearly <span className="text-blue-600 text-xs ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2
                                ${plan.highlight 
                                    ? "bg-slate-900 text-white shadow-2xl shadow-blue-500/20 ring-2 ring-blue-500 dark:bg-slate-800 dark:ring-blue-400" 
                                    : "bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                                }`}
                        >
                            {/* "Most Popular" Badge */}
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-slate-900 dark:text-white"}`}>
                                    {plan.name}
                                </h3>
                                <p className={`mt-2 text-sm ${plan.highlight ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold tracking-tight">
                                    {plan.price === "Custom" ? "" : "$"}
                                    {plan.price}
                                </span>
                                <span className={`text-sm font-medium ${plan.highlight ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-blue-400" : "text-blue-600 dark:text-blue-500"}`} />
                                        <span className={`text-sm ${plan.highlight ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold transition-all
                                    ${plan.highlight
                                        ? "bg-white text-slate-900 hover:bg-blue-50"
                                        : "bg-slate-900 dark:bg-blue-600 text-white hover:opacity-90 hover:shadow-lg"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};