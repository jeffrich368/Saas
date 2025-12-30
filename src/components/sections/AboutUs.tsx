import { Container } from "../shared/Container";
import { CheckCircle2 } from "lucide-react"; // Ensure lucide-react is installed

export const AboutUs = () => {
    // Features list for the text side
    const features = [
        "Advanced Neural Network Architecture",
        "Real-time Data Processing",
        "Enterprise-grade Security",
    ];

    return (
        <section id="about-us" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
                <div className="w-full md:w-1/2 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                        <img 
                            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                            alt="AI Technology Visualization" 
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    
                        <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-transparent mix-blend-overlay"></div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center rotate-12 shadow-xl md:flex">
                        <span className="text-white font-bold text-xl">10+ <br/><span className="text-xs font-normal">Years</span></span>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                            About Our Vision
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                            Pioneering the Future of <span className="text-blue-600 dark:text-blue-400">Artificial Intelligence</span>
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            We bridge the gap between complex algorithms and real-world application. Our mission is to democratize AI technology, making it accessible, ethical, and powerful for businesses of all sizes.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {features.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-200 font-medium">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/30">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
};