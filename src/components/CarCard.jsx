import React from 'react'
import { IoPeople } from "react-icons/io5";
import { MdLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";




const CarCard = ({ image, name, price, doors, dataAos }) => {
  return (
    <div className='car-card' data-aos={dataAos}>
      <img src={image} alt={name} className='car-image' />
      <div className='fleet-details'>
        <p className='car-name'>{name}</p>

        <div className='features'>
          <div className='feature-icons'><IoPeople className='feature-icon' /> <span>2</span></div>
          <div className='feature-icons'><MdLuggage className='feature-icon' /> <span>3</span></div>
          <div className='feature-icons'><GiCarDoor className='feature-icon' /> <span>{doors}</span></div>
        </div>

        <div className="rate">
          <div className="amount">
            <p className='daily'>Daily rate from</p>
            <p className='money'>{price}</p>
          </div>

          <a href="#">Rent Now</a>
        </div>
      </div>

    </div>
  )
}

export default CarCard
