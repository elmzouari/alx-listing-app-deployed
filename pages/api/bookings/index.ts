import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    const { booking } = request.body;
    console.log("IN BOOKING API, booking")
    console.log("booking:", booking)
    if (booking) {
      return response.status(200).json({ 'message': 'Booking Successful' })
    }
  } else {
    response.setHeader('Allow', ['POST'])
    response.status(405).end(`Method ${request.method} Not Allowed in here`)
  }
}
