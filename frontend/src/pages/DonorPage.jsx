import React from 'react';
import DonorDashboard from '../components/donor/DonorDashboard';
import DonorForm from '../components/donor/DonorForm';

const DonorPage = () => {
    return (
        <div>
            <DonorDashboard />
            <DonorForm />
        </div>
    );
};

export default DonorPage;