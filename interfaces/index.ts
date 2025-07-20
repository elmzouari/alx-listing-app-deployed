export interface CardProps { }
export interface ButtonProps { }
export interface BookingProps {
  propertyName: string,
  startDate: string,
  totalNights: number,
  bookingFee: number,
  price: number
}

export interface ReviewProps {
  reviewId: string
  content: string
  rating: number
  propertyId: string
}
/*{
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image20.jpg",
    discount: ""
  }*/
export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers
  image: string;
  discount: string;
  //description: string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}


export interface PillProps {
  title: string
}
