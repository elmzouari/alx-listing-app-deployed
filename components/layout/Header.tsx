import Link from "next/link";
import Search from "./Search";
const Header: React.FC = () => {
	const accommodations: string[] = ['Rooms', 'Mansion', 'Countryside', 'Beachfront', 'City', 'Mountain']
	return (
		<header className="bg-blue-600 shadow-md py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				<h3 className="font-bold text-2xl">
					<Link href="/">Home</Link>
				</h3>
				<nav className="flex bg-cyan-600 justify-between items-center">
					<ul className="flex space-x-6">
						<li className="hover:underline">
							<button className="px-4 py-2 text-gray-600 hover:text-blue-600">Sign In</button>
						</li>
						<li className="hover:underline">
							<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
								Sign Up
							</button>
						</li>
						<li className="">
							<Link href='/booking' className="background-white">Book Stay</Link>
						</li>
					</ul>
				</nav>
				<div>
					<Search placeholder="Search properties..." />
					<button className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1 rounded-md">Search</button>
				</div>
				<div className="mt-4 flex space-x-4 overflow-x-auto py-2">
					{
						accommodations.map((item) => (
							<button
								key={item}
								className="px-4 py-2 bg-gray-100 rounded-full text-sm whitespace-nowrap hover:bg-gray-200"
							>
								{item}
							</button>
						))
					}
				</div>
			</div>
		</header>
	)
}
export default Header;
