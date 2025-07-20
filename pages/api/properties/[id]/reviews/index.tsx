
import { NextApiRequest, NextApiResponse } from "next";
//import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
	if (request.method === 'GET') {
		/** No reviews yet */
		//const id = request.query['id'];
		//const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
		return response.status(200).json([])
	} else {
		response.setHeader('Allow', ['GET'])
		response.status(405).end(`Method ${request.method} Not Allowed in here`)
	}
}
