// pages/api/customer.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const requestBody = req.body; // the body from frontend

      const response = await fetch(
        "https://savtrack.savtechglobal.com/api/customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any auth headers here if required, e.g.,
            // "Authorization": `Bearer ${process.env.API_KEY}`
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      // Return the API response to the frontend
      res.status(200).json(data);
    } catch (error) {
      console.error("Error calling external API:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
