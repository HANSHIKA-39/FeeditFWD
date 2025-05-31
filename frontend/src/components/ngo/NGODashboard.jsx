import React, { useState } from "react";

// Dummy data for demonstration
const volunteerRequests = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        profilePic: "https://i.pravatar.cc/100?img=1",
        bio: "Passionate about helping others.",
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        profilePic: "https://i.pravatar.cc/100?img=2",
        bio: "Experienced in food distribution.",
    },
];

const volunteers = [
    {
        id: 3,
        name: "Carol Lee",
        email: "carol@example.com",
        profilePic: "https://i.pravatar.cc/100?img=3",
        bio: "Loves volunteering.",
        orders: 12,
    },
    {
        id: 4,
        name: "David Kim",
        email: "david@example.com",
        profilePic: "https://i.pravatar.cc/100?img=4",
        bio: "Community organizer.",
        orders: 8,
    },
];

const NGODashboard = () => {
    const [pendingRequests, setPendingRequests] = useState(volunteerRequests);
    const [members, setMembers] = useState(volunteers);

    const handleAccept = (id) => {
        const accepted = pendingRequests.find((v) => v.id === id);
        setMembers([...members, { ...accepted, orders: 0 }]);
        setPendingRequests(pendingRequests.filter((v) => v.id !== id));
    };

    const handleReject = (id) => {
        setPendingRequests(pendingRequests.filter((v) => v.id !== id));
    };

    return (
        <div style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
            <h1>NGO Dashboard</h1>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Volunteer Requests</h2>
                {pendingRequests.length === 0 ? (
                    <p>No pending requests.</p>
                ) : (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {pendingRequests.map((v) => (
                            <li
                                key={v.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "1rem",
                                    background: "#f9f9f9",
                                    padding: "1rem",
                                    borderRadius: 8,
                                }}
                            >
                                <img
                                    src={v.profilePic}
                                    alt={v.name}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        marginRight: 16,
                                    }}
                                />
                                <div style={{ flex: 1 }}>
                                    <strong>{v.name}</strong>
                                    <div>{v.email}</div>
                                    <div style={{ fontSize: 14, color: "#555" }}>{v.bio}</div>
                                </div>
                                <button
                                    onClick={() => handleAccept(v.id)}
                                    style={{
                                        marginRight: 8,
                                        background: "#4caf50",
                                        color: "#fff",
                                        border: "none",
                                        padding: "0.5rem 1rem",
                                        borderRadius: 4,
                                        cursor: "pointer",
                                    }}
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={() => handleReject(v.id)}
                                    style={{
                                        background: "#f44336",
                                        color: "#fff",
                                        border: "none",
                                        padding: "0.5rem 1rem",
                                        borderRadius: 4,
                                        cursor: "pointer",
                                    }}
                                >
                                    Reject
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <section>
                <h2>Volunteer Members</h2>
                {members.length === 0 ? (
                    <p>No volunteers yet.</p>
                ) : (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {members.map((v) => (
                            <li
                                key={v.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "1rem",
                                    background: "#e3f2fd",
                                    padding: "1rem",
                                    borderRadius: 8,
                                }}
                            >
                                <img
                                    src={v.profilePic}
                                    alt={v.name}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        marginRight: 16,
                                    }}
                                />
                                <div>
                                    <strong>{v.name}</strong>
                                    <div>{v.email}</div>
                                    <div style={{ fontSize: 14, color: "#555" }}>{v.bio}</div>
                                    <div style={{ fontSize: 14, color: "#1976d2" }}>
                                        Orders completed: <b>{v.orders}</b>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default NGODashboard;