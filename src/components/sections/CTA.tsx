import { Container } from "../shared/Container";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
    return (
        <section id="cta" className="py-24 relative overflow-hidden">
            <Container>
                <div className="relative rounded-3xl bg-slate-900 dark:bg-blue-600 px-6 py-16 sm:px-16 sm:py-24 shadow-2xl overflow-hidden">
                    
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-30 pointer-events-none">
                        <div className="aspect-square w-96 rounded-full bg-linear-to-br from-blue-400 to-purple-600"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-30 pointer-events-none">
                        <div className="aspect-square w-96 rounded-full bg-linear-to-tr from-cyan-400 to-blue-600"></div>
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                                <Sparkles className="w-8 h-8" />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            Ready to transform your workflow with <span className="text-blue-400 dark:text-blue-200">Zedge AI?</span>
                        </h2>
                        
                        <p className="text-lg leading-8 text-slate-300 dark:text-blue-50 mb-10">
                            Join over 10,000+ teams who are already using our intelligent automation to scale their business and reduce manual overhead by 40%.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group">
                                Start Your Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-all">
                                Schedule a Demo
                            </button>
                        </div>

                        <p className="mt-6 text-sm text-slate-400 dark:text-blue-100">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};