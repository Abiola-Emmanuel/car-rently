import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const ReviewerCard = ({ image, textH3, reviewing, reviewer }) => {
  return (
    <div className="rv">

      <img src={image} alt="Reviewer" />
      <div className="overlay"></div>
      <div className="quote">
        <FaQuoteRight />
      </div>
      <div className="rv-text">
        <h3>{textH3}</h3>
        <p className="reviewing">{reviewing}</p>
        <div className="reviewer"><div className="line"></div> <span>{reviewer}</span></div>
      </div>

    </div>
  )
}

export default ReviewerCard
