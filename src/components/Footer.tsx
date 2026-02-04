import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='py-12 border-t border-border'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                    <div className='flex items-center gap-6'>
                        <a
                            href='https://github.com/gitXite'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-muted-foreground hover:text-primary transition-colors'
                            aria-label='GitHub'
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href='https://linkedin.com/in/daniel-halaas'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-muted-foreground hover:text-primary transition-colors'
                            aria-label='LinkedIn'
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href='mailto:daniel.halaas@gmail.com'
                            className='text-muted-foreground hover:text-primary transition-colors'
                            aria-label='Email'
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    <p className='text-sm text-muted-foreground mono'>
                        © {new Date().getFullYear()} by Daniel Halås
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
