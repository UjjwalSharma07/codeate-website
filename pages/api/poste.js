import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { text, linkedinId, token } = req.body;
    //   const token = req.session.accessToken;
    //   const linkedinId = req.session.linkedinId; // You should set this value during authentication

      const response = await axios.post(
        "https://api.linkedin.com/v2/shares",
        {
          owner: `urn:li:person:${linkedinId}`,
          text: {
            text: text,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create LinkedIn post" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
