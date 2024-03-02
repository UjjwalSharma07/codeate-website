import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { code, projectId } = req.body;
      console.log(code, projectId);
      const REDIRECT_URI = `https://www.codeate.in/projects/${projectId}`;
      const CLIENT_ID = "86t7gxg7cp86q1";
      const CLIENT_SECRET = "mqTVorZhE278bOWz";
      
      const authData = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      };

      const { data } = await axios.post(
        "https://www.linkedin.com/oauth/v2/accessToken",
        null,
        { params: authData }
      );

      console.log("the dataaaaaaaaaaaa", data);

      const token = data.access_token;
    //   req.session.accessToken = data.access_token;

    //   res.status(200).json({
    //     success: true,
    //     token,
    //   });

      console.log("the token is -------------", token);
      console.log("Everything is good");
  
      await axios
        .get("https://api.linkedin.com/v2/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "cache-control": "no-cache",
            "X-Restli-Protocol-Version": "2.0.0",
          },
        })
        .then((response) => {
          const linkedinId = response.data.id;
          console.log("the id is --------------------", linkedinId);
  
          res.status(200).json({
            success: true,
            token,
            linkedinId,
          });
        })
        .catch((error) => {
          // Handle errors
          console.log("Error in iD", error);
        });

    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to authenticate" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
