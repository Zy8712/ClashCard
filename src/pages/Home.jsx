
export default function Home() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center text-center bg-black bg-opacity-25 relative">

                <div className="mb-16 flex flex-col items-center">
                    <h1 className="text-7xl leading-[86px] text-white font-bold font-theme-oxanium custom-text-shadow-hero">
                        Share Your Glory With <br />Your Very Own ClashCard
                    </h1>
                    <div className="w-[700px] h-12 mt-5 flex justify-center items-center text-2xl font-bold bg-gradient-to-tr from-red-500 to-blue-500 rounded-md overflow-hidden p-1">
                        <p className="w-full h-full flex justify-center items-center bg-white mix-blend-lighten rounded-md">
                            Share your Clash Royale stats with a visually stunning card
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-28 w-[500px] h-12 flex justify-between items-center">
                    <button className="bg-red-500 p-2 rounded-md border-white border-0 border-solid hover:border-4 transition-all duration-200 ease-in-out">
                        <span className="w-full h-full text-white text-lg font-semibold px-4 py-1">
                            See How it Works
                        </span>
                    </button>
                    <button className="bg-blue-500 p-2 rounded-md border-white border-0 border-solid hover:border-4 transition-all duration-200 ease-in-out">
                        <span className="w-full h-ful text-white text-lg font-semibold px-4 py-1">
                            Generate Your Own Card
                        </span>
                    </button>
                </div>

            </div>
        </>
    );
}