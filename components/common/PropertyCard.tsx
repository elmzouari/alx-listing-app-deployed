import { PropertyProps } from "@/interfaces"
import Image from "next/image"
const PropertyCard: React.FC<PropertyProps> = ({
	name,
	image,
	discount,
}) => {
	return (
		<div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
			<div className="relative h-48 bg-gray-200">
				<Image src={image} alt={name} className="w-full h-full object-cover" />
				{discount && (
					<div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
						{discount}% OFF
					</div>
				)}
			</div>
			<div className="p-4">
				<div className="flex justify-betweeb items-start">

					<h3 className="font-semibold text-lg">{name}</h3>
				</div>
			</div>

		</div>
	)
}

export default PropertyCard
