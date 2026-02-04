import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['Software Engineer', 'Problem Solver', 'Developer'];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < currentRole.length) {
                        setDisplayText(
                            currentRole.slice(0, displayText.length + 1),
                        );
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(displayText.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setRoleIndex((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            isDeleting ? 50 : 100,
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className='min-h-screen flex items-center justify-center relative overflow-hidden noise-overlay'>
            <div className='absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float' />
            <div className='absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-float delay-300' />

            <div
                className='absolute inset-0 opacity-[0.1]'
                style={{
                    backgroundImage: `radial-gradient(hsl(var(--primary) / 0.8) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />
            
            <div className='container mx-auto px-6 relative z-10'>
                <div className='max-w-3xl'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 backdrop-blur-sm mb-8 animate-blur-in'>
                        <span className='w-2 h-2 rounded-full bg-accent animate-pulse' />
                        <span className='mono text-sm text-muted-foreground'>
                            Available for opportunities
                        </span>
                    </div>

                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 animate-blur-in delay-100'>
                        <span className='text-gradient-warm'>
                            {displayText}
                        </span>
                        <span className='typing-cursor' />
                    </h1>

                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-8 animate-blur-in delay-200'>
                        based in Norway
                    </h2>

                    <p className='text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up delay-300 leading-relaxed'>
                        Crafting elegant solutions through clean code.
                        Passionate about building performant software and
                        exploring new technologies.
                    </p>

                    <div className='flex flex-wrap items-center gap-4 mb-14 animate-fade-up delay-400'>
                        <a
                            href='#projects'
                            className='group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-sm'
                        >
                            View Projects
                            {/* <span className='group-hover:translate-x-1 transition-transform'>
                                
                            </span> */}
                        </a>
                        <a
                            href='#contact'
                            className='inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 gradient-border'
                        >
                            Get in Touch
                        </a>
                    </div>

                    <div className='flex items-center gap-1 animate-fade-up delay-500'>
                        {[
                            {
                                icon: Github,
                                href: 'https://github.com/gitXite',
                                label: 'GitHub',
                            },
                            {
                                icon: Linkedin,
                                href: 'https://linkedin.com/in/daniel-halaas',
                                label: 'LinkedIn',
                            },
                            {
                                icon: Mail,
                                href: 'mailto:daniel.halaas@gmail.com',
                                label: 'Email',
                            },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='p-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300'
                                aria-label={label}
                            >
                                <Icon size={22} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700'>
                <a
                    href='#about'
                    className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'
                >
                    <span className='text-xs mono tracking-wider opacity-60'>
                        scroll
                    </span>
                    <ArrowDown
                        size={20}
                        className='animate-bounce group-hover:text-primary'
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;
