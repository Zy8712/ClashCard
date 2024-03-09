import { Link } from 'wouter';

import C1_Decoration from "../../assets/icons/C21_Decoration_ai_upscaled_400.jpg"

export default function Logo() {
    return (
        <>
            <Link to="/" className='w-[340px] h-full'>
                <div className="w-[340px] h-full flex items-center relative">
                    <img src={C1_Decoration} className="h-16" />

                    <span className="ml-2 text-4xl text-white font-semibold font-theme-orbitron hover:text-blue-400">ClashCard</span>

                    <span className="absolute bottom-5 -right-9 -rotate-6 rounded-full text-[10px] text-white font-extrabold uppercase bg-blue-500 px-2">Unofficial</span>
                </div>
            </Link>
        </>
    );
}