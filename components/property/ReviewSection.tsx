import { ReviewProps } from "@/interfaces";
import axios from "axios";
import { useState, useEffect } from "react";

type ReviewSectionProps = { propertyId: string }

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
	const [reviews, setReviews] = useState<[] | [ReviewProps]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await axios.get(`/api/properties/${propertyId}/reviews`);
				setReviews(response.data);
			} catch (error) {
				console.error("Error fetching reviews:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchReviews();
	}, [propertyId]);

	if (loading) {
		return <p>Loading reviews...</p>;
	}

	return (
		<div>
			{reviews?.map((review) => (
				<div key={review.reviewId}>
					<p>{review.content}</p>
				</div>
			))}
		</div>
	);
};

export default ReviewSection;
