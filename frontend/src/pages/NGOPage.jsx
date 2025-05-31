import React, { useEffect, useState } from "react";
import NGOList from "../components/NGO/NGOList";

const NGOPage = () => {
    const [ngos, setNgos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch("/api/ngos")
            .then((res) => res.json())
            .then((data) => {
                setNgos(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch NGOs:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading NGOs...</div>;

    return (
        <div>
            <h1>NGOs</h1>
            <NGOList ngos={ngos} />
        </div>
    );
};

export default NGOPage;