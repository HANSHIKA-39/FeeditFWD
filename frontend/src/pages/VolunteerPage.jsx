import React, { useEffect, useState } from "react";
import VolunteerList from "../components/volunteer/VolunteerList";

const VolunteerPage = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your actual API endpoint or data fetching logic
        fetch("/api/volunteers")
            .then((res) => res.json())
            .then((data) => {
                setVolunteers(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1>Volunteers</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <VolunteerList volunteers={volunteers} />
            )}
        </div>
    );
};

export default VolunteerPage;