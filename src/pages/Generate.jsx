import React, { useState } from 'react';
import axios from 'axios';
import SearchIcon from "../assets/icons/magnifying-lens-svgrepo-com.svg"
import Background from "../assets/loading_screens/LoadingScreen_Chess_medium_1280x1155.png";
import Banner from "../assets/battle_banner/Banner_DEFirecrackerBG_medium_1280x319.png";
import BannerIcon from "../assets/battle_banner/Banners_DEFirecrackerFG_original_996x480.png";

import expIcon from "../assets/icons/Experience_Icon.png";

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFkZGZmZDAwLTc0ZjItNDUwNS1iNDQ5LWQxZjllYWFmYTQ3YSIsImlhdCI6MTcwOTI3MDM1NCwic3ViIjoiZGV2ZWxvcGVyLzVhYmJlNDg5LTc3NjItYTU3YS0zMDkzLWFiNGJlMzMxNDU2MCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.JkAfYAoVCHpdNpv306bxVP4pkAv1QyC8GFASGc36gYh7EAlhX9IVvqvAml0cBqaijdZ3cCpvL27weP3YkNe5zg'; // Your Clash Royale API key
const PROXY_URL = 'https://proxy.royaleapi.dev/v1/'; // RoyaleAPI proxy URL

export default function Generate() {
    const [playerTag, setPlayerTag] = useState('');
    const [playerData, setPlayerData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPlayerInfo = async () => {
        try {
            setLoading(true);
            const playerResponse = await axios.get(`${PROXY_URL}players/${encodeURIComponent(playerTag)}`, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            });

            setPlayerData(playerResponse.data);
            setError(null);
            setLoading(false);
        } catch (error) {
            setError('Error fetching player information');
            setPlayerData(null);
            setLoading(false);
        }
    };

    const handleInputChange = (event) => {
        // Automatically add "#" prefix to the player tag input
        let tag = event.target.value;
        if (!tag.startsWith('#')) {
            tag = `#${tag}`;
        }
        setPlayerTag(tag);
        setError(null);
        setPlayerData(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPlayerInfo();
    };

    return (
        <div className='w-full h-full min-h-screen flex flex-col items-center px-14 pt-32 pb-14'>

            <h1 className="text-center text-white text-6xl font-theme-orbitron font-semibold">Profile Card Generator</h1>

            <div className="h-12 mt-8 flex items-center font-theme-oxanium bg-gray-500 border-white border-solid border-4 rounded-full ps-2 pe-4">

                <div className='w-64 h-full flex justify-center items-center'>
                    <h2 className="text-white text-lg font-semibold">Search for a Player Profile:</h2>
                </div>

                <div className="w-80 bg-white rounded-md overflow-hidden">
                    <form onSubmit={handleSubmit} className="flex justify-between items-center ps-2">
                        <input type="text"
                            value={playerTag}
                            onChange={handleInputChange}
                            placeholder="Enter Player Tag (e.g. #12345678)"
                            className="w-64 h-7 rounded-md outline-none"
                        />
                        <button type="submit" title="Search" className="w-10 h-7 flex justify-center items-center bg-violet-400">
                            <img src={SearchIcon} className="w-6" />
                        </button>
                    </form>
                </div>

            </div>

            <div className="mt-6 w-full flex flex-col items-center ">

                {loading &&
                    <div>
                        Loading...
                    </div>
                }

                {error &&
                    <div>
                        Error: {error}
                    </div>
                }

                {playerData && (
                    <div className="w-[648px] h-[1152px] bg-[url(./assets/wallpapers/Wallpaper_FirecrackerEvolution.jpg)] bg-center bg-cover border-white border-8 border-solid rounded-md overflow-hidden relative">

                        <div className="w-[505px] h-32 absolute z-40 top-10 border-white border-2 border-solid">
                            <img src={Banner} className='absolute h-full' />
                            <img src={BannerIcon} className='absolute -top-10 right-2 h-[150%]' />
                        </div>


                        <div className="absolute z-30 top-[200px] text-white">

                            <div className="h-10 flex items-center font-theme-clash">

                                <div className="w-12 h-12 flex justify-center items-center bg-[url(./assets/icons/Experience_Icon.png)] bg-[center_top_71px] bg-[length:96px_96px] ml-2 mr-1">
                                    <span className="font-medium custom-text-shadow-text-black-outline">{playerData.expLevel}</span>
                                </div>

                                <span className="text-3xl font-medium mr-3 custom-text-shadow-text-black-outline">{playerData.name}</span>
                                <span className="text-lg font-light text-white custom-text-shadow-text-black-outline">{playerData.tag}</span>
                            </div>

                            <p>Trophies: {playerData.trophies}</p>
                            <p>PB Trophies: {playerData.bestTrophies}</p>
                            <p>Wins: {playerData.wins}</p>
                            <p>Loses: {playerData.losses}</p>
                            <p>BattleCount: {playerData.battleCount}</p>
                            <p>3 Crown Wins: {playerData.threeCrownWins}</p>
                        </div>
                        {/* Add more player data fields here */}
                    </div>
                )}

            </div>

        </div>
    );
};
