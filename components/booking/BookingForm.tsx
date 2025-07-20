import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
const BookingForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		cardNumber: "",
		expirationDate: "",
		cvv: "",
		billingAddress: {},
	})

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			console.log('submitting form:', formData);
			const response = await axios.post(`/${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, formData);
			alert(`Booking completed with status ${response.status}`);
			router.replace("/success")
		} catch (error) {
			setError("Failed to submit booking.");
			console.error(error)
		} finally {
			setLoading(false);
		}
	}


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }))
	};

	const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, 'billingAddress': { ...prevData['billingAddress'], [name]: value } }))
	}

	return (
		<div className="bg-white p-6 shadow-md rounded-lg">
			<h2 className="text-xl font-semibold">Contact Detail</h2>
			<form>
				{/* Contact Information */}
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label>First Name</label>
						<input
							type="text"
							name="firstName"
							className="border p-2 w-full mt-2"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>Last Name</label>
						<input
							type="text"
							name="lastName"
							className="border p-2 w-full mt-2"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							type="email"
							name="email"
							className="border p-2 w-full mt-2"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>Phone Number</label>
						<input
							type="text"
							name="phoneNumber"
							className="border p-2 w-full mt-2"
							onChange={handleChange}
						/>
					</div>
					{/* Payment Information */}
					<h2 className="text-xl font-semibold mt-6">Pay with</h2>
					{/*
						<label></label>
						<input type="text" className="border p-2 w-full mt-2" /> */}
					<div className="mt-4">
						<label>Card Number</label>
						<input type="text" className="border p-2 w-full mt-2"
							name="cardNumber"
							onChange={handleChange}
						/>
					</div>
					<div className="grid grid-cols-2 gap-4 mt-4">
						<div>
							<label>Expiration Date</label>
							<input type="text" className="border p-2 w-full mt-2"
								name="expirationDate"
								onChange={handleChange}
							/>
						</div>
						<div>
							<label>CVV</label>
							<input type="text" className="border p-2 w-full mt-2"
								name="cvv"
								onChange={handleChange}
							/>
						</div>
					</div>

					{/* Billing Address */}
					<div>
						<h2 className="text-xl font-semibold mt-6">Billing Address</h2>
						<div className="mt-4">
							<label>Street Address</label>
							<input type="text" className="border p-2 w-full mt-2"
								onChange={handleAddressChange}
								name='street'
							/>
						</div>
						<div className="grid grid-cols-2 gap-4 mt-4">
							<div>
								<label>City</label>
								<input type="text" className="border p-2 w-full mt-2"
									onChange={handleAddressChange}
									name="city"
								/>
							</div>
							<div>
								<label>State</label>
								<input type="text" className="border p-2 w-full mt-2"
									onChange={handleAddressChange}
									name='state'
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4 mt-4">
							<div>
								<label>Zip Code</label>
								<input type="text" className="border p-2 w-full mt-2"
									onChange={handleAddressChange}
									name='zip'
								/>
							</div>
							<div>
								<label>Country</label>
								<input type="text" className="border p-2 w-full mt-2"
									onChange={handleAddressChange}
									name='country'
								/>
							</div>
						</div>
					</div>

					{/* Submit Button */}
					<button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full" type='submit' disabled={loading} onSubmit={handleSubmit}>
						{loading ? "Processing..." : "Confirm & Pay"}
					</button>

					{/*DISPLAY ERROR*/}
					{error && <p className="text-red-500">{error}</p>}
				</div>
			</form>
		</div>
	);
};

export default BookingForm;
