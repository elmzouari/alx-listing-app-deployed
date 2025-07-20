import BookingSection from "@/components/property/BookingSection";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
//import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import CustomBackground from "@/components/common/CustomBackground";
import { useEffect, useState } from "react";
import axios from "axios";
import { PropertyProps } from "@/interfaces";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  //const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`)
        console.log("RESPONSE DATA:", response.data)
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false)
      }
    };
    fetchProperty();
  }, [id])

  if (loading) return <p>Loading...</p>;

  if (!property) return <p>Property not found</p>
  return (
    <CustomBackground>
      <PropertyDetail property={property} />
      <BookingSection price={property.price} />
      <ReviewSection propertyId={property.name} />
    </CustomBackground>
  )
}
