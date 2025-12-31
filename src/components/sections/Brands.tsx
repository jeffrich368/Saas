import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = [
    { name: "Discord", url: "https://cdn.simpleicons.org/discord" },
    { name: "Spotify", url: "https://cdn.simpleicons.org/spotify" },
    { name: "Uber", url: "https://cdn.simpleicons.org/uber" },
    { name: "YouTube", url: "https://cdn.simpleicons.org/youtube" },
    { name: "GitHub", url: "https://cdn.simpleicons.org/github" },
];


export const Brands = () => {
    const scrollingLogos = [...logos, ...logos, ...logos]; // Triple for smoother loop

    return (
        <section className="py-20 overflow-hidden bg-white dark:bg-slate-900">
            <Container className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                    <Title className="text-slate-900 dark:text-white">
                        Trusted by Industry Leaders 
                    </Title>
                </div>

                <div className="relative flex items-center overflow-hidden h-20">
                    <div className="flex animate-marquee whitespace-nowrap min-w-full">
                        {scrollingLogos.map((logo, index) => (
                            <div key={index} className="flex items-center justify-center px-12 shrink-0">
                                <img 
                                    src={logo.url} 
                                    alt={logo.name} 
                                    className="h-8 md:h-10 w-auto grayscale opacity-60 dark:invert transition-all hover:opacity-100 hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white dark:from-slate-900 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white dark:from-slate-900 to-transparent z-10" />
                </div>
            </Container>
        </section>
    );
}