import { useEffect, useRef, useState } from 'react';

const About = () => {
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
        <section id='about' ref={sectionRef} className='py-24 md:py-32'>
            <div className='container mx-auto px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h2
                        className={`text-sm mono text-primary mb-4 ${
                            isVisible ? 'animate-fade-up' : 'opacity-0'
                        }`}
                    >
                        01. About
                    </h2>

                    <div className='grid md:grid-cols-5 gap-12 items-start'>
                        <div className='md:col-span-3'>
                            <h3
                                className={`text-3xl md:text-4xl font-bold mb-6 ${
                                    isVisible
                                        ? 'animate-fade-up delay-100'
                                        : 'opacity-0'
                                }`}
                            >
                                Building digital experiences with precision
                            </h3>

                            <div
                                className={`space-y-4 text-muted-foreground ${
                                    isVisible
                                        ? 'animate-fade-up delay-200'
                                        : 'opacity-0'
                                }`}
                            >
                                <p>
                                    I'm a software engineer based in Norway with
                                    a passion for creating efficient, scalable,
                                    and user-friendly software. My journey
                                    in development started with curiosity about
                                    how things work, and has evolved into a
                                    career focused on solving complex problems.
                                </p>
                                <p>
                                    I thrive in environments where I can work on
                                    challenging projects that push the
                                    boundaries of what's possible. Whether it's
                                    building robust backend systems, crafting
                                    intuitive user interfaces, or optimizing
                                    performance, I approach each task with
                                    attention to detail.
                                </p>
                                <p>
                                    When I'm not coding, you might find me
                                    exploring the Norwegian fjords, contributing
                                    to open-source projects, or experimenting
                                    with new technologies.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`md:col-span-2 ${
                                isVisible
                                    ? 'animate-blur-in delay-300'
                                    : 'opacity-0'
                            }`}
                        >
                            <div className='relative group'>
                                <div className='absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                                <div className='relative aspect-square rounded-xl bg-gradient-to-br from-muted/50 to-card border border-border overflow-hidden gradient-border'>
                                    <div className='absolute flex items-center justify-center text-7xl opacity-30'>
                                        <img src="/images/daniel.png" alt="Daniel" />
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent' />
                                    <div className='absolute bottom-4 left-4 right-4'>
                                        <div className='flex items-center gap-2 text-xs mono text-muted-foreground'>
                                            <span className='w-2 h-2 rounded-full bg-accent animate-pulse' />
                                            <span>Based in Bergen, Norway</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
