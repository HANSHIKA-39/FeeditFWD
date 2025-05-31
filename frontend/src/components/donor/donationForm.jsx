import React, { useState } from "react";

const DonationForm = () => {
    const [form, setForm] = useState({
        donorName: "",
        email: "",
        phone: "",
        foodType: "",
        quantity: "",
        unit: "kg",
        pickupAddress: "",
        city: "",
        state: "",
        zip: "",
        pickupDate: "",
        pickupTime: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here (API call, etc.)
        alert("Thank you for your donation!");
    };

    return (
        <form className="donation-form" onSubmit={handleSubmit} style={{maxWidth: 500, margin: "0 auto"}}>
            <h2>Donate Food</h2>
            <div>
                <label>Donor Name*</label>
                <input
                    type="text"
                    name="donorName"
                    value={form.donorName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email*</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone Number*</label>
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Type of Food*</label>
                <input
                    type="text"
                    name="foodType"
                    value={form.foodType}
                    onChange={handleChange}
                    placeholder="e.g. Cooked meals, Packaged food"
                    required
                />
            </div>
            <div>
                <label>Quantity*</label>
                <input
                    type="number"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    min="1"
                    required
                    style={{width: "70%"}}
                />
                <select name="unit" value={form.unit} onChange={handleChange} style={{width: "28%", marginLeft: "2%"}}>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="liters">liters</option>
                    <option value="pieces">pieces</option>
                </select>
            </div>
            <div>
                <label>Pickup Address*</label>
                <input
                    type="text"
                    name="pickupAddress"
                    value={form.pickupAddress}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>City*</label>
                <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>State*</label>
                <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>ZIP Code*</label>
                <input
                    type="text"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Preferred Pickup Date*</label>
                <input
                    type="date"
                    name="pickupDate"
                    value={form.pickupDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Preferred Pickup Time*</label>
                <input
                    type="time"
                    name="pickupTime"
                    value={form.pickupTime}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Additional Notes</label>
                <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Any special instructions?"
                />
            </div>
            <button type="submit" style={{marginTop: 16}}>Submit Donation</button>
        </form>
    );
};

export default DonationForm;