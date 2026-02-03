import { useEffect, useRef, useState } from 'react';

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            'TypeScript',
            'JavaScript',
            'Python',
            'Go',
            'C',
            'Java',
            'SQL',
        ],
    },
    {
        title: 'Frontend',
        skills: ['React', 'Astro', 'Tailwind CSS', 'THREE.js', 'HTML/CSS'],
    },
    {
        title: 'Backend',
        skills: [
            'Node.js',
            'Express',
            'Fast API',
            'Flask',
            'PostgreSQL',
            'MongoDB',
            'REST APIs',
        ],
    },
    {
        title: 'DevOps & Tools',
        skills: ['Docker', 'Git', 'Postman', 'CI/CD'],
    },
];

const Skills = () => {
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
        <section
            id='skills'
            ref={sectionRef}
            className='py-24 md:py-32 bg-muted/30'
        >
            <div className='container mx-auto px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h2
                        className={`text-sm mono text-primary mb-4 ${
                            isVisible ? 'animate-fade-up' : 'opacity-0'
                        }`}
                    >
                        02. Skills
                    </h2>

                    <h3
                        className={`text-3xl md:text-4xl font-bold mb-12 ${
                            isVisible
                                ? 'animate-fade-up delay-100'
                                : 'opacity-0'
                        }`}
                    >
                        Technologies I work with
                    </h3>

                    <div className='grid sm:grid-cols-2 gap-6'>
                        {skillCategories.map((category, categoryIndex) => (
                            <div
                                key={category.title}
                                className={`group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 card-hover gradient-border ${
                                    isVisible ? 'animate-blur-in' : 'opacity-0'
                                }`}
                                style={{
                                    animationDelay: `${(categoryIndex + 2) * 150}ms`,
                                }}
                            >
                                <div className='flex items-center gap-3 mb-5'>
                                    <div className='w-1 h-6 rounded-full bg-gradient-to-b from-primary to-accent' />
                                    <h4 className='text-lg font-semibold text-foreground'>
                                        {category.title}
                                    </h4>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <span
                                                key={skill}
                                                className='px-3 py-1.5 text-sm mono bg-muted/50 text-muted-foreground rounded-md hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 cursor-default'
                                                style={{
                                                    animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
