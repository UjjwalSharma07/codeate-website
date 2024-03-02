import {event1, event2, event3, event4, event5, event6, event7} from './EventImage'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function EventCard () {
    
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 764 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1
        }
    };
    return (
        <div className="flex">
        <Carousel        
        gap={20}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={4000}
        autoPlay={true}
        keyBoardControl={false}
        transitionDuration={500}
        arrows={false}
        >
                
                    
              
            </Carousel>
                </div>

    );
}

export default EventCard;