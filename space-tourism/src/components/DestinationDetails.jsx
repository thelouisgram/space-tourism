import React from 'react'

const DestinationDetails = ({content, currentSlide, index}) => {
  return (
    <div>
        <h1 className={`${currentSlide === index ? 'active-content' : 'inactive-content'}`}>{content.name}</h1>
      {console.log(content.name)}
    </div>
  )
}

export default DestinationDetails
