// app/api/customer/route.js
export async function POST(req) {
  try {
    const requestBody = await req.json();

    const response = await fetch(
      "https://savtrack.savtechglobal.com/api/customer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
          // "Authorization": `Bearer ${process.env.SAVTRACK_API_KEY}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error calling external API:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
