import React, { useEffect, useState } from 'react';

// Mock data for demonstration
const mockDonations = [
    {
        id: 1,
        title: 'Food for Homeless',
        status: 'active',
        steps: [
            { label: 'Requested', completed: true },
            { label: 'Picked Up', completed: true },
            { label: 'Delivered', completed: false },
        ],
        date: '2024-06-01',
        amount: 50,
        description: 'Donated 10 meals for the homeless.',
    },
    {
        id: 2,
        title: 'Books for Kids',
        status: 'completed',
        steps: [
            { label: 'Requested', completed: true },
            { label: 'Picked Up', completed: true },
            { label: 'Delivered', completed: true },
        ],
        date: '2024-05-15',
        amount: 30,
        description: 'Donated books to local school.',
    },
    {
        id: 3,
        title: 'Clothes Donation',
        status: 'completed',
        steps: [
            { label: 'Requested', completed: true },
            { label: 'Picked Up', completed: true },
            { label: 'Delivered', completed: true },
        ],
        date: '2024-04-10',
        amount: 20,
        description: 'Donated clothes for charity.',
    },
];

// Track System Component
const TrackSystem = ({ steps }) => (
    <div style={{ padding: '24px' }}>
        <h3>Donation Progress</h3>
        <ol style={{ listStyle: 'none', padding: 0 }}>
            {steps.map((step, idx) => (
                <li key={idx} style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            background: step.completed ? '#4caf50' : '#ccc',
                            marginRight: 12,
                            textAlign: 'center',
                            color: '#fff',
                            fontWeight: 'bold',
                            lineHeight: '20px',
                        }}
                    >
                        {step.completed ? '✓' : idx + 1}
                    </span>
                    <span style={{ fontWeight: step.completed ? 'bold' : 'normal' }}>{step.label}</span>
                </li>
            ))}
        </ol>
    </div>
);

// Past Donation Card
const DonationCard = ({ donation }) => (
    <div style={{
        border: '1px solid #eee',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        background: '#fff',
        maxWidth: 350,
    }}>
        <h4>{donation.title}</h4>
        <p><strong>Date:</strong> {donation.date}</p>
        <p><strong>Amount:</strong> ${donation.amount}</p>
        <p>{donation.description}</p>
    </div>
);

const DonationList = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        // Replace with API call in real app
        setDonations(mockDonations);
    }, []);

    const activeDonation = donations.find(d => d.status === 'active');
    const pastDonations = donations.filter(d => d.status === 'completed');

    return (
        <div style={{ padding: 32, background: '#f7f7f7', minHeight: '100vh' }}>
            {/* First Part: Active Donation and Track System */}
            <div style={{ display: 'flex', gap: 32, marginBottom: 48 }}>
                {/* Left: Active Donation */}
                <div style={{
                    flex: 1,
                    background: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    padding: 24,
                    minHeight: 250,
                }}>
                    <h2>Active Donation</h2>
                    {activeDonation ? (
                        <>
                            <h3>{activeDonation.title}</h3>
                            <p><strong>Date:</strong> {activeDonation.date}</p>
                            <p><strong>Amount:</strong> ${activeDonation.amount}</p>
                            <p>{activeDonation.description}</p>
                        </>
                    ) : (
                        <p>No active donations.</p>
                    )}
                </div>
                {/* Right: Track System */}
                <div style={{
                    flex: 1,
                    background: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    minHeight: 250,
                }}>
                    {activeDonation ? (
                        <TrackSystem steps={activeDonation.steps} />
                    ) : (
                        <div style={{ padding: 24 }}>
                            <h3>Donation Progress</h3>
                            <p>No active donation to track.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Second Part: Past Donations */}
            <div>
                <h2>Past Donations</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                    {pastDonations.length > 0 ? (
                        pastDonations.map(donation => (
                            <DonationCard key={donation.id} donation={donation} />
                        ))
                    ) : (
                        <p>No past donations found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DonationList;