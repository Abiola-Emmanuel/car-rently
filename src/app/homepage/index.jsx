'use client';
import CarCard from "@/components/CarCard";
import "../globals.css";
import { FaTrophy, FaRoad, FaTag, FaMapPin, FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ReviewerCard from "@/components/ReviewerCard";
import Accordion from "@/components/Accordion";
import AOS from 'aos';
import 'aos/dist/aos.css';



const HomePage = () => {

  useEffect(() => {
    AOS.init();
  })

  const [navWhite, setNavWhite] = useState(false);
  const [currentYear, setCurrentYear] = useState("")

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavWhite(true)
      } else {
        setNavWhite(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)

  })
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);



  return (
    <div>

      {/* HERO */}

      <div className="hero">
        <img src="/hero-bg11.jpg" alt="Hero Background" />
        <div className="hero-overlay"></div>

        <nav className={navWhite ? 'bg-white' : ''}>

          <div className="logo">
            <a href="#">Logo</a>
          </div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Our Fleet</a>
          </div>

          <div className="book">
            <a href="#">Book Now</a>
          </div>

        </nav>

        <div className="hero-text-left" >
          <h2>Find your perfect car.</h2>
          <p>Experience the ultimate freedom of <br /> choice with Company - tailor your <br /> adventure by choosing from our <br /> premium fleet of vehicles...</p>
        </div>

        <div className="hero-text-right" >
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Illum maxime nulla praesentium cum qui atqu...</p>
        </div>

        <div className="hero-actions">
          <a href="#" className="get-started">Get Started</a>
          <a href="#" className="consult">Consult</a>
        </div>

        {/* <div className="mobile-hero-text">
          <h2>Welcome To Car Rentals</h2>
          <p>Experience the ultimate freedom of choice with Company - tailor br your adventure by choosing from our premium fleet of vehicles...</p>
        </div> */}

      </div>

      {/* FLEET */}

      <div className="fleet">

        <p className="the-cars">THE CARS</p>

        <h2 className="title">Our Impressive Fleet</h2>

        <div className="car-div">

          <CarCard
            dataAos="fade-up"
            image="/toyota1.jpg"
            name="Toyota Yaris"
            price="$200/day"
            doors="4"
          />
          <CarCard
            dataAos="fade-up"
            image="/alphard2.png"
            name="Alphard"
            price="$200/day"
            doors="4"
          />
          <CarCard
            dataAos="fade-up"
            image="/lexus.webp"
            name="Lexus"
            price="$200/day"
            doors="4"
          />
          <CarCard
            dataAos="fade-up"
            image="/innova.png"
            name="Innova"
            price="$200/day"
            doors="4"
          />
          <CarCard
            dataAos="fade-up"
            image="/fortuner.png"
            name="Toyota Fortuner"
            price="$200/day"
            doors="4"
          />
          <CarCard
            dataAos="fade-up"
            image="/zenix.jpeg"
            name="Innova Zenix"
            price="$200/day"
            doors="4"
          />


        </div>

        <div className="view-more">
          <a href="#">VIEW MORE</a>
        </div>

      </div>

      {/* FEATURES */}

      <div className="our-features">

        <h2 className="title">Our Features</h2>
        <p className="discover">Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.</p>

        <div className="ft-main">

          <div className="ft-left" data-aos="zoom-in">
            <div className="f1">
              <div className="ft-icon">
                <FaTrophy />
              </div>

              <div className="ft-text">
                <h3>First class services</h3>
                <p>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
              </div>
            </div>

            <div className="f1">
              <div className="ft-icon">
                <FaRoad />
              </div>

              <div className="ft-text">
                <h3>24/7 road assistance</h3>
                <p>Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
              </div>
            </div>

          </div>

          <div className="ft-mid">
            <img src="/car.png" alt="" />
          </div>

          <div className="ft-right" data-aos="zoom-in">

            <div className="f1">


              <div className="ft-text">
                <h3>Quality at Minimum Expense</h3>
                <p>Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</p>
              </div>

              <div className="ft-icon">
                <FaTag />
              </div>

            </div>

            <div className="f1">


              <div className="ft-text">
                <h3>Free Pick-Up & Drop-Off</h3>
                <p>Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
              </div>

              <div className="ft-icon">
                <FaMapPin />
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* STEPS */}

      <div className="steps">

        <div className="overlay"></div>

        <div className="s1">
          <div>
            <h3>1</h3>
          </div>

          <div>
            <p className="title">Choose a vehicle</p>
            <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
        </div>

        <div className="s1">

          <div>
            <h3>2</h3>
          </div>

          <div>
            <p className="title">Pick location & date</p>
            <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>

        </div>

        <div className="s1">

          <div>
            <h3>3</h3>
          </div>

          <div>
            <p className="title">Make a booking</p>
            <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>

        </div>

        <div className="s1">

          <div>
            <h3>4</h3>
          </div>

          <div>
            <p className="title">Sit back & relax</p>
            <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>

        </div>

      </div>

      {/* REVIEW */}

      <div className="review-main">

        <h2 className="title">
          Reviews
          <div className="title-line"></div>
        </h2>

        <div className="review">
          <ReviewerCard
            image="/rv1.jpg"
            textH3='Excellent Service! Car Rent Service!'
            reviewing='I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is responsive and helpful. '
            reviewer='Stephanie Hutchkiss'
          />


          <ReviewerCard
            image="/rv2.jpg"
            textH3='Excellent Service! Car Rent Service!'
            reviewing='Reviewer Excellent Service! Car Rent Service!
          We have been using Rentaly for our trips needs for several years now and have always been happy with their service.'
            reviewer='Jovan Reels'
          />

          <ReviewerCard
            image="/rv3.jpg"
            textH3='Excellent Service! Car Rent Service!'
            reviewing='Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.'
            reviewer='Kanesha Keyton'
          />


        </div>
      </div>

      {/* QUESTION */}

      <div className="questions">

        <p className="do">Do You Have</p>
        <h2 className="title">Any Questions?</h2>

        <div className="main-questions">

          <div className="question-left">
            <Accordion
              id="accordion-left"
              questionName1="How do i get started with Car Rental?"
              questionAnswer1="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."

              questionName2="Can i rent a car with debit card?"
              questionAnswer2="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."

              questionName3="What kind of Car Rental do i need?"
              questionAnswer3="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."

              questionName4="What is a rental car security deposit"
              questionAnswer4="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
            />

          </div>

          <div className="question-right">
            <Accordion
              id="accordion-right"

              questionName1="What is a rental car security deposit?"
              questionAnswer1="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."

              questionName2="Can i cancel or modify my reservation?"
              questionAnswer2="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."

              questionName3="Can i cancel or modify my reservation?"
              questionAnswer3="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."

              questionName4="Is it possible to extend my rental period?"
              questionAnswer4="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
            />
          </div>

        </div>

      </div>

      {/* ACCOMODATION */}

      <div className="accomodation">

        <div className="acc-left">

          <div className="acc-left1">
            <img src="/acc1.jpg" alt="accomodation" />
            <div className="overlay">
              <h2>Explore more to get your comfort zone</h2>
              <p>Book your perfect stay with us.</p>
              <a href="#">Booking Now</a>
            </div>
          </div>

          <div className="acc-left2">
            <img src="/acc2.jpg" alt="accomodation" />
            <div className="overlay">
              <p>Vehicle Available</p>
              <h2>3,490</h2>
            </div>
          </div>
        </div>

        <div className="acc-right">
          <img src="/acc-kids.jpg" alt="accomodation" />
          <div className="overlay">
            <h2>Beyond accomodation, creating <br /> memories of a lifetime</h2>
          </div>
        </div>


      </div>

      {/* FOOTER */}

      <footer>

        <div className="foot-left">
          <div className="fl-top">
            <h2>Car Rental</h2>
            <p>Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.</p>
          </div>

          <div className="year">
            &copy; {currentYear} Car rental. All rights reserved.
          </div>
        </div>

        <div className="foot-right">

        </div>

      </footer>

    </div>
  )
}

export default HomePage
