export default function Footer() {
    return (
        <>
            <div className="absolute bottom-2 w-screen flex justify-center">
                <p className="w-full max-w-[600px] text-center text-xs font-semibold text-white font-theme-oxanium">
                    This content is not affiliated with, endorsed, sponsored, or specifically
                    approved by Supercell and Supercell is not responsible for it. For more
                    information see Supercell’s Fan Content&nbsp;
                    <a className="underline underline-offset-2 hover:text-violet-500 hover:cursor-pointer">
                        Policy
                    </a>.
                </p>
            </div>
        </>
    );
}