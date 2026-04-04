import React from 'react'

// ? destructuring the function and calling it into the button
const DonationButton = ({onDonate}) => {
    
  return (
    <button onClick={onDonate}>Donate Now</button>
  )
}

export default DonationButton