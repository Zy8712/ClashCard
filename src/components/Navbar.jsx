import Logo from "./navbar-components/Logo";
import NavOptions from "./navbar-components/NavOptions";

export default function Navbar(){
    return(
        <>
            <div className="absolute z-50 top-0 w-full h-24 bg-white bg-opacity-25 px-14">
                <div className="w-full h-full flex justify-between items-center">
                    <Logo />

                    <NavOptions />
                </div>

            </div>
        </>
    );
}