import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const featuredProjects = [
    {
        title: 'Scape by md',
        description:
            'A fullstack service that sells framed topographic 3D printed models based on user selection',
        tech: ['Typescript', 'C', 'React', 'THREE.js', 'Node.js', 'Tailwind CSS'],
        github: '#',
        live: 'https://scapebymd.no',
    },
    {
        title: 'Archway',
        description:
            'An AI-driven SaaS developed for architectural firms, that creates photorealistic renders from references',
        tech: ['Astro', 'Python', 'Stable Diffusion', 'React', 'Tailwind CSS'],
        github: '#',
        live: 'https://archway.no',
    },
];

const otherProjects = [
    {
        title: 'HANDL',
        description:
            'A fullstack collaborative shopping list web app, with user authentication and realtime updates',
        tech: ['Javascript', 'React', 'CSS', 'Node.js'],
        github: '#',
    },
    {
        title: 'Terrain Microservice',
        description:
            'Microservice to generate STL files based on DEM data',
        tech: ['C', 'Node.js', 'Docker'],
        github: 'https://github.com/gitXite/terrain-service',
    },
    {
        title: 'Voice Keyboard PoC',
        description: 'Proof of concept for a voice to text based keyboard, that determines key weight bias from voice',
        tech: ['Python'],
        github: 'https://github.com/gitXite/voice-keyboard-poc',
    },
];

const Projects = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id='projects' ref={sectionRef} className='py-24 md:py-32'>
            <div className='container mx-auto px-6'>
                <div className='max-w-5xl mx-auto'>
                    <h2
                        className={`text-sm mono text-primary mb-4 ${
                            isVisible ? 'animate-fade-up' : 'opacity-0'
                        }`}
                    >
                        03. Projects
                    </h2>

                    <h3
                        className={`text-3xl md:text-4xl font-bold mb-12 ${
                            isVisible
                                ? 'animate-fade-up delay-100'
                                : 'opacity-0'
                        }`}
                    >
                        Featured work
                    </h3>

                    <div className='space-y-8 mb-20'>
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className={`group relative ${
                                    isVisible ? 'animate-blur-in' : 'opacity-0'
                                }`}
                                style={{
                                    animationDelay: `${(index + 2) * 150}ms`,
                                }}
                            >
                                <div className='p-6 md:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 card-hover gradient-border overflow-hidden'>
                                    <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                                    <div className='relative'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <span className='mono text-xs text-primary/60'>
                                                0{index + 1}
                                            </span>
                                            <div className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
                                        </div>

                                        <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4'>
                                            <h4 className='text-xl md:text-2xl font-semibold text-foreground group-hover:text-gradient-warm transition-all duration-300'>
                                                {project.title}
                                            </h4>
                                            <div className='flex items-center gap-2'>
                                                <a
                                                    href={project.github}
                                                    className='p-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    aria-label='View source code'
                                                >
                                                    <Github size={18} />
                                                </a>
                                                <a
                                                    href={project.live}
                                                    className='p-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    aria-label='View live site'
                                                >
                                                    <ExternalLink size={18} />
                                                </a>
                                            </div>
                                        </div>

                                        <p className='text-muted-foreground mb-6 leading-relaxed'>
                                            {project.description}
                                        </p>

                                        <div className='flex flex-wrap gap-2'>
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className='px-3 py-1.5 text-xs mono text-primary bg-primary/10 border border-primary/20 rounded-lg'
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Other Projects */}
                    <h4
                        className={`text-xl font-semibold mb-8 text-center ${
                            isVisible ? 'animate-fade-up' : 'opacity-0'
                        }`}
                    >
                        Other noteworthy projects
                    </h4>

                    <div className='grid sm:grid-cols-2 gap-4'>
                        {otherProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className={`group p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/30 card-hover ${
                                    isVisible ? 'animate-blur-in' : 'opacity-0'
                                }`}
                                style={{
                                    animationDelay: `${(index + 6) * 100}ms`,
                                }}
                            >
                                <div className='flex items-start justify-between mb-4'>
                                    <div className='p-2 rounded-lg bg-primary/10 border border-primary/20'>
                                        <Folder
                                            className='text-primary'
                                            size={22}
                                        />
                                    </div>
                                    <a
                                        href={project.github}
                                        className='p-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300'
                                        aria-label='View source code'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>

                                <h5 className='text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300'>
                                    {project.title}
                                </h5>

                                <p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
                                    {project.description}
                                </p>

                                <div className='flex flex-wrap gap-3'>
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className='text-xs mono text-muted-foreground/70'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
