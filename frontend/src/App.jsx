import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

// HomePage Component
function HomePage() {
  return (
    <div>
      <h1>Welcome to FeeditFWD</h1>
      <nav>
        <Link to="/donor"><button>Donor Page</button></Link>
        <Link to="/ngo"><button>NGO Page</button></Link>
        <Link to="/volunteer"><button>Volunteer Page</button></Link>
      </nav>
    </div>
  );
}

// DonorPage Component
function DonorPage() {
  const [data, setData] = React.useState(null);

  const fetchDonorData = async () => {
    try {
      const res = await axios.get("/api/donor");
      setData(res.data);
    } catch (err) {
      setData("Error fetching donor data");
    }
  };

  return (
    <div>
      <h2>Donor Page</h2>
      <button onClick={fetchDonorData}>Fetch Donor Data</button>
      <div>{data && JSON.stringify(data)}</div>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

// NGOPage Component
function NGOPage() {
  const [data, setData] = React.useState(null);

  const fetchNGOData = async () => {
    try {
      const res = await axios.get("/api/ngo");
      setData(res.data);
    } catch (err) {
      setData("Error fetching NGO data");
    }
  };

  return (
    <div>
      <h2>NGO Page</h2>
      <button onClick={fetchNGOData}>Fetch NGO Data</button>
      <div>{data && JSON.stringify(data)}</div>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

// VolunteerPage Component
function VolunteerPage() {
  const [data, setData] = React.useState(null);

  const fetchVolunteerData = async () => {
    try {
      const res = await axios.get("/api/volunteer");
      setData(res.data);
    } catch (err) {
      setData("Error fetching volunteer data");
    }
  };

  return (
    <div>
      <h2>Volunteer Page</h2>
      <button onClick={fetchVolunteerData}>Fetch Volunteer Data</button>
      <div>{data && JSON.stringify(data)}</div>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/ngo" element={<NGOPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
    </Router>
  );
}