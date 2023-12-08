import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import b1 from "../../assets/img/b1.png"
import cate2 from "../../assets/img/cate2.png"
import cate3 from "../../assets/img/cate3.png"
import cate4 from "../../assets/img/cate4.png"
import cate5 from "../../assets/img/cate5.png"
import cate6 from "../../assets/img/cate6.png"
const productData = [
  {
    id: "0",
    useimg: b1,
    imgalt: "",
    mainText: "Chicken Curry Cut - Large Pieces",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
  {
    id: "1",
    useimg: cate2,
    imgalt: "",
    mainText: "Basa (Pungus) - Fry Cut",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
  {
    id: "2",
    useimg: cate3,
    imgalt: "",
    mainText: "Chicken leg Piece- Small Pieces",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
  {
    id: "3",
    useimg: cate4,
    imgalt: "",
    mainText: "Chicken Bonless- Small Pieces",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
  {
    id: "4",
    useimg: cate5,
    imgalt: "",
    mainText: "Chicken Lollipop - Large Pieces",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
  {
    id: "5",
    useimg: cate6,
    imgalt: "",
    mainText: "Chicken Bonless- Small Pieces",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
  {
    id: "6",
    useimg: b1,
    imgalt: "",
    mainText: "Chicken Curry Cut - Large Pieces",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
  {
    id: "7",
    useimg: cate2,
    imgalt: "",
    mainText: "Chicken Curry Cut - Large Pieces",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
  {
    id: "8",
    useimg: cate3,
    imgalt: "",
    mainText: "Chicken Curry Cut - Large Pieces",
    timeText: "Today in 90 mins",
    weightText: "500g",
    pieces: "12-18 Pieces ",
    servres: "Serves 4 ",
    mainPrice: "₹380 ",
    delPrice: "420",
  },
]

const ProductcardSec = (props) => {

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const [swiper, setSwiper] = useState(null);

  const handleSlidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };


  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (window.innerWidth > 720 && window.innerWidth < 1200) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);
  return (

    <section className='section'>
      <Box className="best">
        <Container>
          <Box className="head-box">
            <Box>
              <Typography className="main-head-text" >{props.MainHeadText}<span className="main-sub-text" > {props.MainSubText}</span> </Typography>
            </Box>
            <Box sx={{ ml: "auto" }}>
              <Button className="btn-box" onClick={handleSlidePrev}><ArrowBackIcon className="icon" /></Button>
              <Button className="btn-box" onClick={handleSlideNext}><ArrowForwardIcon className="icon" /></Button>
            </Box>
          </Box>
          <Box>
            <Swiper
              onSwiper={setSwiper}
              slidesPerView={isTablet ? 3 : isMobile ? 2 : 5}
              spaceBetween={isTablet ? 30 : isMobile ? 10 : 30}
              loop={true}

              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              // navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {productData.map((cureEle, i) => {
                const { useimg, imgalt, mainText, timeText, weightText, pieces, servres, mainPrice, delPrice } = cureEle;
                return (
                  <SwiperSlide key={i}>
                    <Box className="card-categorie-body">
                      <Box className="img-section">
                        <Box className="img-box">
                          <img src={useimg} alt={imgalt} width="100%" />
                        </Box>
                      </Box>
                      <Box className="add-bag-body">
                        <Link className="add-bag-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <path d="M1.04017 6.70995C1.33402 5.35447 1.48122 4.67773 1.9666 4.24103C2.0563 4.16057 2.15333 4.08735 2.25662 4.02218C2.81641 3.66919 3.56608 3.66919 5.06544 3.66919H5.99733C7.49613 3.66919 8.24526 3.66919 8.80451 4.02218C8.90848 4.08774 9.00534 4.16136 9.09453 4.24154C9.58045 4.67773 9.72765 5.35497 10.0215 6.70945C10.4434 8.65392 10.6546 9.62616 10.1687 10.315C10.0811 10.4401 9.97827 10.5555 9.86226 10.6594C9.22422 11.2333 8.14895 11.2333 5.99733 11.2333H5.06544C2.91327 11.2333 1.83745 11.2333 1.19941 10.6594C1.08397 10.5554 0.981377 10.4399 0.89352 10.315C0.407599 9.62616 0.618821 8.65392 1.04127 6.70945L1.04017 6.70995Z" stroke="white" />
                            <path d="M3.8894 3.14035V2.68507C3.8894 2.32282 4.06236 1.97541 4.37022 1.71926C4.67809 1.46312 5.09564 1.31921 5.53103 1.31921C5.96641 1.31921 6.38397 1.46312 6.69183 1.71926C6.9997 1.97541 7.17265 2.32282 7.17265 2.68507V3.14035M3.98243 7.23792C4.09548 7.50451 4.30514 7.73535 4.5825 7.89864C4.85986 8.06192 5.19126 8.14961 5.53103 8.14961C5.8708 8.14961 6.2022 8.06192 6.47956 7.89864C6.75692 7.73535 6.96657 7.50451 7.07963 7.23792" stroke="white" strokeLinecap="round" />
                          </svg>
                          <span style={{ marginLeft: "7px" }}>Add to Bag</span>
                        </Link>
                      </Box>
                      <Box>
                        <Typography sx={{ mt: 2 }}><Link className="main-text"> {mainText}</Link></Typography>
                        <Box sx={{ display: "flex", mt: 1 }}>
                          <Box>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
                              <path d="M18.778 10.2065C18.778 4.8064 14.5744 0.428711 9.38899 0.428711C4.20359 0.428711 0 4.8064 0 10.2065C0 15.6067 4.20359 19.9844 9.38899 19.9844C14.5744 19.9844 18.778 15.6067 18.778 10.2065Z" fill="url(#paint0_linear_181_3564)" />
                              <g filter="url(#filter0_d_181_3564)">
                                <path d="M13.1211 8.93967C13.0425 8.78761 12.8966 8.7058 12.7281 8.7058H9.04545L12.043 4.9129C12.0767 4.77259 12.043 4.63221 11.9532 4.51531C11.8746 4.41 11.7399 4.33984 11.6051 4.33984H7.52197C7.27492 4.33984 7.07283 4.5503 7.07283 4.80758L5.59741 10.4404C5.59741 10.6977 5.7995 10.9081 6.04655 10.9081H7.83333L6.17007 15.5353C6.1364 15.7575 6.25992 15.9679 6.46202 16.0499C6.51818 16.0732 6.56307 16.0732 6.61923 16.0732C6.77644 16.0732 6.92244 15.9913 7.00101 15.851L13.121 9.41908C13.1997 9.26702 13.1998 9.09171 13.1211 8.93967Z" fill="white" />
                              </g>
                              <defs>
                                <filter id="filter0_d_181_3564" x="1.59741" y="2.33984" width="15.5825" height="19.7334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                  <feOffset dy="2" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0.491667 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_181_3564" />
                                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_181_3564" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_181_3564" x1="9.38899" y1="0.428711" x2="9.38899" y2="19.9844" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#F7C855" />
                                  <stop offset="1" stopColor="#FFAA01" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </Box>
                          <Typography className="time-text">{timeText}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                          <Typography className="weight-text">{weightText} </Typography>
                          <Typography className="pieces-text">{pieces}</Typography>
                          <Typography className="serves-text">{servres}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", mt: 1, alignItems: "flex-end" }}>
                          <Typography className="main-price-text">{mainPrice}</Typography>
                          <Typography className="del-price"><del>{delPrice}</del></Typography>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Box>
        </Container>
      </Box>
    </section>
  )
}

export default ProductcardSec;

