'use client';
import CarCard from "@/components/CarCard";
import "../globals.css";
import { FaTrophy, FaRoad, FaTag, FaMapPin, FaQuoteRight, FaInstagram, FaFacebook, FaDiscord, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
        <img src="/hero-bg13.jpg" alt="Hero Background" className="hero-image" />
        <div className="hero-overlay"></div>

        <nav className={navWhite ? 'bg-white' : ''}>

          <div className="logo">

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" preserveAspectRatio="xMidYMid meet">
              <path d="M0 0 C3.447 3.103 4.287 4.758 4.938 9.312 C4.793 10.282 4.649 11.251 4.5 12.25 C0.976 14.763 -2.852 16.296 -6.859 17.887 C-8.692 18.645 -10.525 19.404 -12.358 20.164 C-13.622 20.681 -14.891 21.188 -16.164 21.684 C-23.493 24.122 -23.493 24.122 -28.514 29.393 C-28.862 31.825 -28.862 31.825 -28.5 35.25 C-28.83 35.58 -29.16 35.91 -29.5 36.25 C-17.566 36.497 -5.741 35.82 6.163 35.023 C9.324 34.812 12.485 34.607 15.646 34.404 C17.688 34.271 19.729 34.138 21.77 34.004 C22.699 33.943 23.628 33.883 24.586 33.821 C25.478 33.761 26.37 33.701 27.288 33.639 C28.44 33.562 28.44 33.562 29.614 33.484 C33.915 33.135 38.206 32.679 42.5 32.25 C42.5 25.32 42.5 18.39 42.5 11.25 C45.039 10.078 47.578 8.906 50.117 7.734 C52.768 6.083 53.266 5.028 54.5 2.25 C62.864 -3.326 78.953 -0.334 88.407 1.535 C93.469 2.66 98.485 3.933 103.5 5.25 C104.954 5.629 106.409 6.009 107.863 6.388 C114.427 8.102 120.987 9.829 127.542 11.575 C136.478 13.954 145.416 16.272 154.438 18.312 C155.281 18.504 156.125 18.695 156.994 18.893 C164.339 20.513 171.469 21.389 178.984 21.461 C180.646 21.487 182.307 21.514 183.968 21.542 C184.83 21.555 185.693 21.568 186.581 21.582 C200.71 21.81 214.519 22.447 228.54 24.302 C236.093 25.249 243.282 25.321 250.859 24.583 C256.232 24.072 256.232 24.072 259.5 26.25 C259.688 29.188 259.688 29.188 259.5 32.25 C259.5 35.868 260.51 37.328 262.312 40.438 C267.718 49.768 269.002 56.807 268.938 67.5 C268.957 68.651 268.977 69.802 268.998 70.988 C268.991 83.152 266.089 93.405 257.5 102.25 C251.74 107.738 245.349 111.569 237.5 113.25 C235.176 112.844 235.176 112.844 233.5 112.25 C234.212 110.456 234.212 110.456 234.938 108.625 C238.938 97.831 238.241 87.041 234.5 76.25 C228.375 62.937 220.035 54.872 206.5 49.25 C194.884 45.232 182.686 46.606 171.5 51.25 C168.783 52.685 166.196 54.207 163.621 55.883 C161.5 57.25 161.5 57.25 159.348 58.18 C156.996 59.542 156.575 60.788 155.5 63.25 C154.555 64.614 153.596 65.967 152.625 67.312 C145.024 78.685 143.34 90.748 145.734 104.07 C146.416 106.903 147.205 109.661 148.048 112.449 C148.319 113.348 148.591 114.248 148.871 115.174 C149.182 116.202 149.182 116.202 149.5 117.25 C148.458 117.256 148.458 117.256 147.395 117.263 C130.175 117.368 112.956 117.477 95.736 117.589 C87.408 117.644 79.079 117.697 70.751 117.747 C61.096 117.806 51.44 117.868 41.785 117.934 C40.594 117.942 40.594 117.942 39.378 117.95 C14.947 118.118 -9.479 118.417 -33.906 118.923 C-48.44 119.219 -62.964 119.307 -77.5 119.25 C-77.196 118.341 -77.196 118.341 -76.885 117.413 C-76.618 116.612 -76.35 115.81 -76.074 114.984 C-75.81 114.193 -75.545 113.401 -75.272 112.585 C-71.128 100.053 -71.346 88.537 -76.5 76.25 C-78.224 72.981 -80.174 70.117 -82.5 67.25 C-83.001 66.625 -83.503 66 -84.02 65.355 C-91.418 57.093 -102.217 52.94 -113.078 52.035 C-126.5 51.556 -137.854 55.86 -147.75 64.875 C-156.678 74.309 -160.016 86.13 -159.824 98.793 C-159.088 106.647 -156.559 113.55 -152.5 120.25 C-152.5 120.91 -152.5 121.57 -152.5 122.25 C-151.84 122.25 -151.18 122.25 -150.5 122.25 C-150.5 122.91 -150.5 123.57 -150.5 124.25 C-168.532 123.683 -186.156 121.918 -203.75 117.812 C-204.583 117.619 -205.415 117.426 -206.273 117.228 C-215.205 115.027 -223.3 112.071 -230.5 106.25 C-232.613 102.024 -232.038 96.706 -232.188 92.062 C-232.267 90.938 -232.346 89.813 -232.428 88.654 C-232.634 80.48 -232.634 80.48 -229.46 77.038 C-226.885 75.222 -224.288 73.713 -221.5 72.25 C-220.343 71.506 -219.192 70.753 -218.051 69.984 C-188.255 51.726 -154.067 39.04 -119.084 36.409 C-104.554 35.258 -93.862 31.551 -80.97 24.957 C-74.042 21.549 -66.915 18.583 -59.812 15.562 C-59.058 15.24 -58.304 14.918 -57.527 14.586 C-48.509 10.733 -39.472 6.945 -30.312 3.438 C-29.513 3.13 -28.714 2.823 -27.89 2.507 C-19.006 -0.813 -8.99 -4.495 0 0 Z " transform="translate(231.5,58.75)" />
              <path d="M0 0 C8.06 6.613 13.623 15.258 15.066 25.695 C16.067 37.227 14.238 47.815 6.688 56.891 C5.885 57.784 5.885 57.784 5.066 58.695 C4.279 59.62 4.279 59.62 3.477 60.562 C-3.041 67.709 -12.203 72.106 -21.832 72.949 C-33.512 73.379 -43.184 70.515 -51.934 62.695 C-52.538 62.205 -53.143 61.716 -53.766 61.211 C-60.785 55.033 -65.383 45.19 -66.172 35.883 C-66.463 23.4 -63.248 13.158 -54.934 3.695 C-39.316 -11.18 -17.564 -12.505 0 0 Z " transform="translate(447.93359375,120.3046875)" />
              <path d="M0 0 C8.155 5.707 13.281 13.843 15.504 23.496 C16.35 32.593 15.94 40.431 11.504 48.496 C11.103 49.264 10.702 50.033 10.289 50.824 C5.329 59.277 -2.927 65.479 -12.402 68.031 C-13.093 68.185 -13.784 68.338 -14.496 68.496 C-15.713 68.785 -16.93 69.074 -18.184 69.371 C-29.027 70.365 -39.202 66.184 -47.496 59.496 C-54.291 53.212 -58.941 44.247 -59.832 35.016 C-59.975 21.418 -56.965 12.396 -47.496 2.496 C-34.076 -10.179 -14.933 -8.997 0 0 Z " transform="translate(137.49609375,123.50390625)" />
            </svg>
            <a href="#">CAR-RENTAL</a>
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
          <p>Choose from our modern fleet, economy cars, <br /> SUVs and luxury models, with clear pricing, and convenient pickup or delivery options.</p>
        </div>

        <div className="hero-text-right" >
          <p>Well-maintained vehicles, 24/7 roadside assistance and friendly <br /> support to keep your trip smooth and stress-free.</p>
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

      <div className="steps">,

        <div className="overlay"></div>

        <div className="s1">
          <div>
            <h3>1</h3>
          </div>

          <div>
            <p className="title">Choose a vehicle</p>
            <p className="txt">Browse by size, fuel type and features pick the vehicle that fits your trip and budget.</p>
          </div>
        </div>

        <div className="s1">

          <div>
            <h3>2</h3>
          </div>

          <div>
            <p className="title">Pick location & date</p>
            <p className="txt">Select pickup and drop-off locations and exact dates choose delivery to your door or collect at our office.</p>
          </div>

        </div>

        <div className="s1">

          <div>
            <h3>3</h3>
          </div>

          <div>
            <p className="title">Make a booking</p>
            <p className="txt">Reserve securely online with card payment — receive instant confirmation and rental agreement details.</p>
          </div>

        </div>

        <div className="s1">

          <div>
            <h3>4</h3>
          </div>

          <div>
            <p className="title">Sit back & relax</p>
            <p className="txt">Pick up your car and enjoy the trip — we're available 24/7 for support, changes or roadside help.</p>
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
              questionAnswer1="Search our fleet, choose your dates and vehicle, then complete your booking online. Bring a valid driver’s license and the card used for booking at pickup."

              questionName2="Can i rent a car with debit card?"
              questionAnswer2="Yes, we accept debit cards for most rentals. Some vehicles or promotions may require a credit card or additional ID. Check the payment requirements on the vehicle page."

              questionName3="What kind of Car Rental do i need?"
              questionAnswer3="Choose by passenger count, luggage needs and road conditions: compact for city driving, SUV for families or rough roads, and luxury for events or business travel."

              questionName4="What is a rental car security deposit"
              questionAnswer4="A refundable hold placed on your card to cover incidents or damages. The amount depends on the vehicle class and is released after vehicle inspection when the rental ends."
            />

          </div>

          <div className="question-right">
            <Accordion
              id="accordion-right"

              questionName1="What is a rental car security deposit?"
              questionAnswer1="A refundable hold placed on your payment method to cover potential damages or fines. The exact amount varies by vehicle class and is released after inspection."

              questionName2="Can i cancel or modify my reservation?"
              questionAnswer2="Yes, you can cancel or modify online. Free cancellation is available up to 48 hours before pickup for most rates; changes after that may incur fees or rate differences."

              questionName3="Can i cancel or modify my reservation?"
              questionAnswer3="If you need to return the car early, contact support, refunds depend on the rate type. We can adjust your booking and invoice any applicable differences."

              questionName4="Is it possible to extend my rental period?"
              questionAnswer4="Yes, extensions are possible when the vehicle is available. Extend via your booking page or contact us; additional days are charged at the current daily rate."
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
            {/* <p>Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.</p> */}
          </div>

          <div className="year">
            <p>&copy; {currentYear}. All rights reserved.</p>
          </div>
        </div>

        <div className="foot-right">
          <a href="#"> <FaInstagram /> </a>
          <a href="#"> <FaXTwitter /> </a>
          <a href="#"> <FaFacebook /> </a>
          <a href="#"> <FaDiscord /> </a>
          <a href="#"> <FaTiktok /> </a>
        </div>

      </footer>

    </div>
  )
}

export default HomePage
