// // const axios = require('axios')
// // const express = require("express");
// // const url = require('url');

// // const app = express()
// // // app.use(bodyParser.urlencoded({extended:true}))

// // // Set up OAuth 2.0 authentication
// const clientId = '86t7gxg7cp86q1';
// const clientSecret = 'mqTVorZhE278bOWz';
// const redirectUri = 'http://localhost:3000/projects/63abd934ed2e74fc4c339756';
// // let authCode;


// // // Step 1: Redirect the user to the LinkedIn OAuth 2.0 authorization page
// app.get('/auth/linkedin', (req, res) => {
//   const state = Math.random().toString(36).substring(2, 15);
//   const scope = 'w_member_social,r_emailaddress';
//   const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
//   res.redirect(authUrl);
//   authCode = url.parse(req.url, true).query.code;

// });






// // // get token
// //   // const code = router.query.code;
// //   //  axios.post('/api/linkedin/token', { code, redirectUri })
// //   //    .then(response => {
// //        // Redirect the user back to the original page with the project ID parameter
// //       //  router.push(`${projectId}`);
// //     //  })
// //     //  .catch(error => {
// //     //    console.error(error);
// //     //  });


// //     // access a token
// //     app.get('/linkedin-auth', (req, res) => {
      
// //       const authorizationCode = req.query.code;
      
// //       axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
// //         params: {
// //           grant_type: 'authorization_code',
// //           code: authorizationCode,
// //           redirect_uri: redirectUri,
// //           client_id: clientId,
// //           client_secret: clientSecret
// //         }
// //       })
// //       .then(response => {
// //         console.log('====================================');
// //         console.log(response.data);
// //         console.log('====================================');
// //         const accessToken = response.data.access_token;
// //         // console.log(accessToken);
// //         // Do something with the accessToken, e.g. store it in the session or database
// //         res.send('Access token generated successfully!');
// //       })
// //       .catch(error => {
// //         console.log(error.message);
// //         res.status(500).send('Failed to generate access token');
// //       });
// //     });
    

    


// // // Step 2: Exchange the authorization code for an access token
// // app.get('/auth/linkedin/callback', async (req, res) => {
// //   const { code, state } = req.query;
// //   const accessTokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
// //   const tokenPayload = {
// //     grant_type: 'authorization_code',
// //     code: code,
// //     redirect_uri: redirectUri,
// //     client_id: clientId,
// //     client_secret: clientSecret,
// //   };
// //   const tokenRes = await axios.post(accessTokenUrl, tokenPayload)
// //   const accessToken = tokenRes.data.access_token;
// //   let  linkedinId = response.data.id;
// //   // let linkedinId;

// //   // fetch id
// // // axios.get('https://api.linkedin.com/v2/me', {
// // //   headers: {
// // //     'Authorization': `Bearer ${accessToken}`,
// // //     'cache-control': 'no-cache',
// // //     'X-Restli-Protocol-Version': '2.0.0'
// // //   }
// // // }).then(response => {
// // //    linkedinId = response.data.id;
// // //   // Use the LinkedIn ID as needed
// // // }).catch(error => {
// // //   // Handle errors
// // // });


// //   // Step 3: Create a new post on behalf of the authenticated user
// //   const ugcPostsUrl = 'https://api.linkedin.com/v2/ugcPosts';
// //   const postPayload = {
// //     author: `urn:li:person:${linkedinId}`,
// //     lifecycleState: 'PUBLISHED',
// //     specificContent: {
// //       'com.linkedin.ugc.ShareContent': {
// //         shareCommentary: {
// //           text: 'Check out this post!',
// //         },
// //         shareMediaCategory: 'NONE',
// //       },
// //     },
// //     visibility: {
// //       'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
// //     },
// //   };
// //   const postHeaders = {
// //     Authorization: `Bearer ${accessToken}`,
// //     'Content-Type': 'application/json',
// //   };
// //   const postRes = await post(ugcPostsUrl, postPayload, { headers: postHeaders });
// //   const postId = postRes.data.id;
  
// //   // Step 4: Handle any errors or response data returned from the LinkedIn API
// //   res.send({ post_id: postId });
// // });




// // app.listen(8000, () => {
// //   console.log("Server started at 8000");
// // });


// require('dotenv').config()
// const express = require('express')
// const axios = require('axios')
// const bodyParser = require('body-parser')

// const app = express()





// // Retrieve auth token
// app.get('/auth', async (req, res) => {
//     try {
//       const { code } = req.query
//       const authData = {
//         grant_type: 'authorization_code',
//         code,
//         redirect_uri: REDIRECT_URI,
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET
//       }
//       const { data } = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, { params: authData })
//       res.send(data)
//     } catch (error) {
//       console.error(error)
//       res.sendStatus(500)
//     }
//   })
  
//   // Post on LinkedIn
//   app.post('/post', bodyParser.json(), async (req, res) => {
//     try {
//       const { token } = req.body
//       const postData = {
//         author: `urn:li:person:${req.body.author}`,
//         lifecycleState: 'PUBLISHED',
//         specificContent: {
//           'com.linkedin.ugc.ShareContent': {
//             shareCommentary: {
//               text: req.body.text
//             },
//             shareMediaCategory: 'NONE'
//           }
//         },
//         visibility: {
//           'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
//         }
//       }
//       const { data } = await axios.post('https://api.linkedin.com/v2/ugcPosts', postData, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//       res.send(data)
//     } catch (error) {
//       console.error(error)
//       res.sendStatus(500)
//     }
//   })
  
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
//   })
  

require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const cors = require('cors')

const app = express()
app.use(cors())

const PORT =  8000
const CLIENT_ID = '86t7gxg7cp86q1'
const CLIENT_SECRET = '86t7gxg7cp86q1'
const REDIRECT_URI = 'http://localhost:3000/projects/63abd934ed2e74fc4c339756'

const SESSION_SECRET = "This is my funky secret oh my god it has ninja turtles"


app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true }))

passport.use(new LinkedInStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: REDIRECT_URI,
  scope: ['r_emailaddress', 'r_liteprofile', 'w_member_social']
}, (accessToken, refreshToken, profile, done) => {
  // Store access token in session
  profile.accessToken = accessToken
  done(null, profile)
}))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

app.use(passport.initialize())
app.use(passport.session())




// LinkedIn authentication
app.get('/auth/linkedin', passport.authenticate('linkedin'))

app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/post')
})

// Retrieve auth token
app.get('/auth', async (req, res) => {
  try {
    const {code } = req.body
    console.log(code);
    const authData = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
    const { data } = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, { params: authData })
    req.session.accessToken = data.access_token


   await axios.get('https://api.linkedin.com/v2/me', {
  headers: {
    'Authorization': `Bearer ${req.session.accessToken}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
}).then(response => {
  let linkedinId = response.data.id;
   console.log('the id is --------------------', linkedinId);
  // Use the LinkedIn ID as needed
}).catch(error => {
  // Handle errors
  console.log("Error in iD".error);
});


    res.redirect('/post')
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// Post on LinkedIn
app.post('/post', bodyParser.json(), async (req, res) => {
  // try {
    // const { accessToken } = req.session
  //   const postData = {
  //     author: `urn:li:person:${req.body.author}`,
  //     lifecycleState: 'PUBLISHED',
  //     specificContent: {
  //       'com.linkedin.ugc.ShareContent': {
  //         shareCommentary: {
  //           text: req.body.title
  //         },
  //         shareMediaCategory: 'NONE'
  //       }
  //     },
  //     visibility: {
  //       'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
  //     }
  //   }
  //   const { data } = await axios.post('https://api.linkedin.com/v2/ugcPosts', postData, {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`
  //     }
  //   })
  //   res.send(data)
  // } catch (error) {
  //   console.error(error)
  //   res.sendStatus(500)
  // }
})



// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`)
//   })
  