import React, { useEffect, useState } from 'react';

// Mock API functions (replace with real API calls)
const fetchDonations = async () => [
    { id: 1, donor: 'Alice', status: 'Unassigned', details: '2 bags of clothes' },
    { id: 2, donor: 'Bob', status: 'Assigned', volunteer: 'You', details: '5 boxes of food' },
    { id: 3, donor: 'Charlie', status: 'Assigned', volunteer: 'Other', details: 'Toys' },
];
const acceptDonation = async (donationId) => true;
const updateDonationStatus = async (donationId, status) => true;

const VolunteerDashboard = () => {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulate logged-in volunteer
    const volunteerName = 'You';

    useEffect(() => {
        const loadDonations = async () => {
            setLoading(true);
            const data = await fetchDonations();
            setDonations(data);
            setLoading(false);
        };
        loadDonations();
    }, []);

    const handleAccept = async (id) => {
        await acceptDonation(id);
        setDonations((prev) =>
            prev.map((d) =>
                d.id === id ? { ...d, status: 'Assigned', volunteer: volunteerName } : d
            )
        );
    };

    const handleUpdateStatus = async (id, status) => {
        await updateDonationStatus(id, status);
        setDonations((prev) =>
            prev.map((d) =>
                d.id === id ? { ...d, status } : d
            )
        );
    };

    const unassigned = donations.filter((d) => d.status === 'Unassigned');
    const assignedToMe = donations.filter(
        (d) => d.status !== 'Unassigned' && d.volunteer === volunteerName
    );

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
            <h2>Volunteer Dashboard</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <section>
                        <h3>Unassigned Donations</h3>
                        {unassigned.length === 0 ? (
                            <p>No unassigned donations.</p>
                        ) : (
                            <ul>
                                {unassigned.map((donation) => (
                                    <li key={donation.id} style={{ marginBottom: 12 }}>
                                        <strong>From:</strong> {donation.donor} <br />
                                        <strong>Details:</strong> {donation.details} <br />
                                        <button onClick={() => handleAccept(donation.id)}>
                                            Accept Pickup
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                    <section style={{ marginTop: 32 }}>
                        <h3>Your Assigned Tasks</h3>
                        {assignedToMe.length === 0 ? (
                            <p>No assigned tasks.</p>
                        ) : (
                            <ul>
                                {assignedToMe.map((donation) => (
                                    <li key={donation.id} style={{ marginBottom: 12 }}>
                                        <strong>From:</strong> {donation.donor} <br />
                                        <strong>Details:</strong> {donation.details} <br />
                                        <strong>Status:</strong> {donation.status} <br />
                                        {donation.status === 'Assigned' && (
                                            <button onClick={() => handleUpdateStatus(donation.id, 'Picked Up')}>
                                                Mark as Picked Up
                                            </button>
                                        )}
                                        {donation.status === 'Picked Up' && (
                                            <button onClick={() => handleUpdateStatus(donation.id, 'Delivered')}>
                                                Mark as Delivered
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </>
            )}
        </div>
    );
};

export default VolunteerDashboard;