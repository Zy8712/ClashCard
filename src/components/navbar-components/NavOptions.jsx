import { Link, useLocation } from 'wouter';

export default function NavOptions() {

    const [location] = useLocation();

    return (
        <>
            <div className="w-[700px] flex justify-between items-center text-white text-lg font-bold font-theme-orbitron uppercase">
                <Link to="/generate" className={`flex items-center hover:text-blue-400 ${location === '/generate' ? 'text-rose-400 pointer-events-none underline underline-offset-4' : ''}`}>
                    Card Generator
                </Link>
                <Link to="/insights" className={`flex items-center hover:text-blue-400 ${location === '/insights' ? 'text-rose-400 pointer-events-none underline underline-offset-4' : ''}`}>
                    Insights Tools
                </Link>
                <Link to="/faq" className={`flex items-center hover:text-blue-400 ${location === '/faq' ? 'text-rose-400 pointer-events-none underline underline-offset-4' : ''}`}>
                    Faq
                </Link>
                <Link to="/contact" className={`flex items-center hover:text-blue-400 ${location === '/contact' ? 'text-rose-400 pointer-events-none underline underline-offset-4' : ''}`}>
                    Contact Me
                </Link>
            </div >
        </>
    );
}