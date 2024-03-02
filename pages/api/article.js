import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, text } = req.body;
      const token = req.session.accessToken;
      const linkedinId = req.session.linkedinId; // You should set this value during authentication

      const response = await axios.post(
        "https://api.linkedin.com/v2/ugcPosts",
        {
          author: `urn:li:person:${linkedinId}`,
          lifecycleState: "PUBLISHED",
          specificContent: {
            "com.linkedin.ugc.ShareContent": {
              shareCommentary: {
                text: title,
              },
              shareMediaCategory: "ARTICLE",
              media: [
                {
                  "com.linkedin.ugc.ShareMedia": {
                    status: "READY",
                    description: {
                      text: text,
                    },
                    originalUrl: "https://codeate8.netlify.app/",
                  },
                },
              ],
            },
          },
          visibility: {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
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
      res.status(500).json({ error: "Failed to create LinkedIn article" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
