import React from "react";
import { Button } from "../button/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
// import { Grid } from 'swiper'

// import '../../styles/home/Events.module.css'

export default function EventsDiv() {
  return (
    <div className="events-div">
      <div>
        <p className="text-5xl font-semibold z-20 mt-10 text-center title mb-11">
          Upcomming Events
        </p>
        <Grid container>
          <Grid item>
            <img
              className="community-events-img rounded-xl mr-4 ml-4"
              src="https://github.com/KapadiaShubham/Codeate-media/blob/master/images/events-img.png?raw=true"
              alt="Community Events Img"
            />
          </Grid>

          <Grid item>
            <div className="community-events-data">
              <div className="ml-24">
                <h1 className="events-h1 text-2xl font-extrabold">
                  Upcoming Events
                </h1>
                <h1 className="events-h2 ml-2">Coming Soon</h1>
              </div>

              {/* <div className='ml-24'>
                <h1 className='events-h1 text-2xl font-extrabold'>Past Events</h1>
                <div className='events-list'>
                  <ul className='ml-2'>
                    <li>04/02/2022, Hackathon</li>
                    <li>06/02/2022, Hackathon</li>
                    <li>14/02/2022, Hackathon</li>
                  </ul>
                </div>
              </div> */}
              {/* <br></br> */}
              {/* <Link href='/CurrentEvents'>
              <Button className='ml-24'  buttonSize='btn--large' buttonColor='blue'>
                See More
              </Button>
              </Link> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
