import React from 'react';
//import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className="bg-gray=500 text-white p-10">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="font-bold mb-3">Informacje</h3>
						<ul>
							<li>
								<Link href="#">
									<span className="cursor-pointer hover:underline">About</span>
								</Link>
							</li>
							<li>
								<Link href="#">
									<span className="cursor-pointer hover:underline">Contact</span>
								</Link>
							</li>
							<li>
								<Link href="#">
									<span className="cursor-pointer hover:underline">Home</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center">
					<p>© 2023 Property Finder, Inc. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer;
