import { useEffect, useRef, useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id='contact' ref={sectionRef} className='py-24 md:py-32'>
            <div className='container mx-auto px-6'>
                <div className='max-w-2xl mx-auto text-center'>
                    <h2
                        className={`text-sm mono text-primary mb-4 ${
                            isVisible ? 'animate-fade-up' : 'opacity-0'
                        }`}
                    >
                        04. Contact
                    </h2>

                    <h3
                        className={`text-3xl md:text-4xl font-bold mb-6 ${
                            isVisible
                                ? 'animate-fade-up delay-100'
                                : 'opacity-0'
                        }`}
                    >
                        Let's work together
                    </h3>

                    <p
                        className={`text-muted-foreground mb-10 ${
                            isVisible
                                ? 'animate-fade-up delay-200'
                                : 'opacity-0'
                        }`}
                    >
                        I'm currently open to new opportunities and interesting
                        projects. Whether you have a question, a proposal, or
                        just want to say hello, I'd love to hear from you.
                    </p>

                    <a
                        href='mailto:daniel.halaas@gmail.com'
                        className={`group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 glow ${
                            isVisible
                                ? 'animate-blur-in delay-300'
                                : 'opacity-0'
                        }`}
                    >
                        <Mail size={20} />
                        Get in touch
                        <ArrowUpRight
                            size={18}
                            className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
