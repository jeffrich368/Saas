import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = [
    "ai logo",
    "discord",
    "OpenAI",
    "slack",
    "spotify",
    "uber",
    "youtube",
];

export const Brands = () => {
    const scrollingLogos = [...logos, ...logos];

    return (
        <section className="py-20 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
            <Container className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                    <Title className={`text-slate-900 dark:text-white`}>
                        Trusted by Industry Leaders 
                    </Title>
                </div>

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex items-center">
                        {scrollingLogos.map((logo, index) => (
                            <div key={index} className="mx-8 w-32 md:w-40 shrink-0">
                                <img 
                                    src={`/assets/${logo}.png`} 
                                    alt={`${logo} logo`} 
                                    className="h-12 w-full object-contain opacity-50 grayscale invert-0 dark:invert transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:invert-0"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white dark:from-slate-900 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white dark:from-slate-900 to-transparent pointer-events-none z-10"></div>
                </div>
            </Container>
        </section>
    );
}