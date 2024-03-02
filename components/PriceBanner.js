import React, { useEffect, useState } from 'react';

const PriceBanner = () => {

//   const targetEpochTime = new Date('2023-09-27T00:00:00').getTime(); // Set your target date and time here
// const currentEpochTime = Date.now(); // Current date and time in epoch time

// // Calculate the time remaining between the target date and current date
// const timeDiff = targetEpochTime - currentEpochTime;

// // Convert the time difference to hours, minutes, and seconds
// const hours = Math.floor((timeDiff / (1000 * 60 * 60)));
// const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
// const seconds = Math.floor((timeDiff / 1000) % 60);

// console.log(`Time Remaining: ${hours}h ${minutes}m ${seconds}s`);


  const targetDate = new Date('2023-09-27T00:00:00'); // Set your target date and time here
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Calculate the time remaining between the target date and current date
  function calculateTimeRemaining() {
    const now = new Date();
    // console.log(now);
    const timeDiff = targetDate - now;
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)));
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    return { hours, minutes, seconds };
  }

  // Update the timer every second
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);
      if (newTimeRemaining.hours === 0 && newTimeRemaining.minutes === 0 && newTimeRemaining.seconds === 0) {
        clearInterval(timerInterval); // Stop the timer when it reaches 0
      }
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup when component unmounts
  }, []);


  return (
    <div className="bg-yellow-500 text-white p-4 text-center">
      <div className='flex flex-row items-center justify-center'>
      {/* <div className='mx-5'>
          <p className=" text-lg lg:text-2xl line-through decoration-black font-bold">Rs 399</p>
          <p className="text-sm">Original Offer</p>
        </div> */}
        <div className=''>
          <p className="text-lg lg:text-2xl font-bold">Rs 299</p>
          <p className="text-sm">Original Offer</p>
        </div>
        <div className='block lg:flex flex-row justify-center items-center'>
          {/* <div className='text-md lg:text-xl flex font-bold mr-2'>[Ends in:</div> */}
          {/* <div className='flex flex-row justify-center items-center'> */}
            {/* <div className='text-md lg:text-xl font-bold mr-2'>{timeRemaining.hours}h</div> */}
            {/* <div className='text-md lg:text-xl font-bold mr-2'>{timeRemaining.minutes}m</div> */}
            {/* <div className='text-md lg:text-xl font-bold'>{timeRemaining.seconds}s]</div> */}
          {/* </div> */}

        </div>
      </div>
    </div>
  );
};

export default PriceBanner;
