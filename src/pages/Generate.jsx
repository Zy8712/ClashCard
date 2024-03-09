import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFkZGZmZDAwLTc0ZjItNDUwNS1iNDQ5LWQxZjllYWFmYTQ3YSIsImlhdCI6MTcwOTI3MDM1NCwic3ViIjoiZGV2ZWxvcGVyLzVhYmJlNDg5LTc3NjItYTU3YS0zMDkzLWFiNGJlMzMxNDU2MCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.JkAfYAoVCHpdNpv306bxVP4pkAv1QyC8GFASGc36gYh7EAlhX9IVvqvAml0cBqaijdZ3cCpvL27weP3YkNe5zg';

export default function Generate() {
    const [playerTag, setPlayerTag] = useState('');
    const [playerData, setPlayerData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPlayerInfo = async () => {
        try {
            setLoading(true);
            const playerResponse = await axios.get(`https://proxy.royaleapi.dev/v1/players/${encodeURIComponent(playerTag)}`, {
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
        setPlayerTag(event.target.value);
        setError(null);
        setPlayerData(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (playerTag.length !== 8) {
            setError('Player tag must be 8 characters long');
            return;
        }
        fetchPlayerInfo();
    };

    return (
        <div className='w-screen h-screen border-2 border-blue-500 border-solid'>
            <div className="mt-20 bg-gray-400">
                <h1 className=''>Search for a Player by Player Tag</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={playerTag} onChange={handleInputChange} />
                    <button type="submit">Search</button>
                </form>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {playerData && (
                    <div>
                        <h2>Player Information</h2>
                        <p>Name: {playerData.name}</p>
                        <p>Tag: {playerData.tag}</p>
                        {/* Add more player data fields here */}
                    </div>
                )}

            </div>
        </div>
    );
};
