import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, List, ListItem, Typography } from '@mui/material'
import img1 from '../assets/img/todays_deal_.png'
import Chicken from "../assets/img/chicken.png"
import Motton from "../assets/img/motton.png"
import Fish from "../assets/img/fish.png"
import Eggs from "../assets/img/eggs.png"
import ReadytoCook from "../assets/img/ready-to-cook.png"
import SpreadsColdCuts from "../assets/img/spreads-cold-cuts.png"
import MeatMasala from "../assets/img/meat-masala.png"
import ProductcardSec from '../components/products/ProductcardSec'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, NavLink } from 'react-router-dom'
import fishb from "../assets/img/fishb.png"
import banner2 from "../assets/img/banner2.png"
import logo from '../assets/img/logo.png'
import googleplay from "../assets/img/googleplay.png"
import appstore from "../assets/img/appstore.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import mastercard from "../assets/img/mastercard.png"
import blogo from "../assets/img/licious_bottom_nav.svg"
const categoriedata = [
  {
    id: "0",
    bgcolor: "#FFFCEA",
    useimg: img1,
    imgalt: "total",
    mainTitle: "Todays Deal",
  },
  {
    id: "1",
    bgcolor: "#FFF2F2",
    useimg: Chicken,
    imgalt: "Chicken",
    mainTitle: "Chicken",
  },
  {
    id: "2",
    bgcolor: "#E4ECF4",
    useimg: Motton,
    imgalt: "Motton",
    mainTitle: "Motton",
  },
  {
    id: "3",
    bgcolor: "#EDFDF5",
    useimg: Fish,
    imgalt: "Fish & Prawns",
    mainTitle: "Fish & Prawns",
  },
  {
    id: "4",
    bgcolor: "#FFFCEA",
    useimg: Eggs,
    imgalt: "Eggs",
    mainTitle: "Eggs",
  },
  {
    id: "5",
    bgcolor: "#FFF2F2",
    useimg: ReadytoCook,
    imgalt: "Ready to Cook",
    mainTitle: "Ready to Cook",
  },
  {
    id: "6",
    bgcolor: "#E4ECF4",
    useimg: SpreadsColdCuts,
    imgalt: "Spreads & Cold Cuts",
    mainTitle: "Spreads & Cold Cuts",
  },
  {
    id: "7",
    bgcolor: "#EDFDF5",
    useimg: MeatMasala,
    imgalt: "Meat Masala",
    mainTitle: "Meat Masala",
  },
]

const Home = () => {
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
    <>
      <section className="section">
        <Box className="categorie-section">
          <Container>
            <Box className="head-box">
              <Typography className="main-head-text">Shop by categories <span className="main-sub-text">Freshest meats and much more!</span> </Typography>
            </Box>
            <Grid container spacing={isMobile ? 1 : isTablet ? 2 : 5}>
              {categoriedata.map((cureEle, index) => {
                const { bgcolor, useimg, imgalt, mainTitle } = cureEle;
                return (
                  <Grid item lg={2} sm={2} xs={4} key={index}>
                    <Box className="card-body" sx={{ backgroundColor: bgcolor }}>
                      <Box className="img-box"><img src={useimg} alt={imgalt} width="100%" /></Box>
                      <Typography className="main-title">{mainTitle}</Typography>
                    </Box>
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </Box>
      </section>
      <ProductcardSec MainHeadText="Bestsellers" MainSubText="Most popular products near you!" />
      <section className="section">
        <Box>
          <Container>
            <Box className="head-box">
              <Box>
                <Typography className="main-head-text" >Fresh at ChefsPlace!<span className="main-sub-text" > Handpicked assortment just for you</span> </Typography>
              </Box>
              <Box sx={{ ml: "auto" }}>
                <Button className="btn-box" onClick={handleSlidePrev}><ArrowBackIcon className="icon" /></Button>
                <Button className="btn-box" onClick={handleSlideNext}><ArrowForwardIcon className="icon" /></Button>
              </Box>
            </Box>
            <Swiper
              onSwiper={setSwiper}
              slidesPerView={isMobile ? 1 : isTablet ? 2 : 2}
              spaceBetween={30}
              loop={true}

              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              // navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Box className="banner-cart-body">
                  <Grid container spacing={2} alignItems="center">
                    <Grid item lg={6}>
                      <Box className="dic-box">
                        <Box sx={{ marginRight: "5px", marginTop: "7px" }} style={{ marginRight: "5px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                          <path d="M8.36454 2.8445C8.49742 2.68737 8.66009 2.56168 8.84195 2.47562C9.02381 2.38957 9.22076 2.34509 9.41996 2.34509C9.61915 2.34509 9.81611 2.38957 9.99796 2.47562C10.1798 2.56168 10.3425 2.68737 10.4754 2.8445L10.9712 3.431C11.1129 3.59862 11.2884 3.73034 11.4847 3.81642C11.681 3.90249 11.8931 3.94071 12.1052 3.92825L12.849 3.88475C13.0479 3.87313 13.2469 3.90608 13.433 3.98144C13.6191 4.05679 13.7881 4.17286 13.9289 4.32206C14.0698 4.47127 14.1793 4.65025 14.2504 4.84732C14.3215 5.04439 14.3525 5.25512 14.3415 5.46575L14.3004 6.2525C14.2887 6.477 14.3249 6.7014 14.4061 6.90911C14.4874 7.11682 14.6118 7.30253 14.77 7.4525L15.3239 7.9775C15.4724 8.11819 15.5912 8.29048 15.6726 8.48311C15.7539 8.67573 15.796 8.88437 15.796 9.09537C15.796 9.30638 15.7539 9.51501 15.6726 9.70763C15.5912 9.90026 15.4724 10.0726 15.3239 10.2132L14.77 10.7382C14.6117 10.8883 14.4873 11.0741 14.406 11.282C14.3247 11.4898 14.2886 11.7144 14.3004 11.939L14.3415 12.7265C14.3524 12.9371 14.3213 13.1478 14.2501 13.3449C14.179 13.5419 14.0693 13.7208 13.9284 13.87C13.7875 14.0191 13.6185 14.1351 13.4324 14.2103C13.2462 14.2856 13.0472 14.3185 12.8483 14.3067L12.1052 14.2632C11.8932 14.2509 11.6813 14.2892 11.4851 14.3752C11.2889 14.4613 11.1135 14.593 10.9719 14.7605L10.4761 15.347C10.3432 15.5042 10.1805 15.63 9.99856 15.7162C9.81664 15.8023 9.61959 15.8468 9.42031 15.8468C9.22103 15.8468 9.02399 15.8023 8.84206 15.7162C8.66014 15.63 8.49742 15.5042 8.36454 15.347L7.86871 14.7605C7.727 14.5929 7.55149 14.4611 7.35519 14.3751C7.15889 14.289 6.94681 14.2508 6.73467 14.2632L5.99092 14.3067C5.79198 14.3184 5.59298 14.2854 5.40689 14.2101C5.2208 14.1347 5.05181 14.0186 4.91097 13.8694C4.77012 13.7202 4.66058 13.5412 4.5895 13.3442C4.51842 13.1471 4.4874 12.9364 4.49846 12.7257L4.53954 11.939C4.55121 11.7145 4.51506 11.4901 4.43377 11.2824C4.35248 11.0747 4.22813 10.889 4.06992 10.739L3.516 10.214C3.36748 10.0733 3.24867 9.90101 3.16733 9.70838C3.08599 9.51576 3.04395 9.30713 3.04395 9.09612C3.04395 8.88512 3.08599 8.67649 3.16733 8.48386C3.24867 8.29123 3.36748 8.11894 3.516 7.97825L4.06992 7.45325C4.22823 7.3032 4.35263 7.11737 4.43393 6.90952C4.51522 6.70167 4.55131 6.47712 4.53954 6.2525L4.49846 5.465C4.4876 5.25442 4.51879 5.04379 4.59 4.84685C4.66122 4.6499 4.77086 4.47107 4.91176 4.32202C5.05266 4.17297 5.22166 4.05706 5.40773 3.98184C5.5938 3.90662 5.79276 3.87379 5.99162 3.8855L6.73467 3.929C6.94669 3.94135 7.15863 3.90307 7.3548 3.817C7.55098 3.73093 7.72637 3.59927 7.868 3.43175L8.36383 2.84525L8.36454 2.8445Z" stroke="#787474" />
                          <path d="M7.64941 7.2207H7.6565V7.2282H7.64941V7.2207ZM11.1911 10.9707H11.1982V10.9782H11.1911V10.9707Z" stroke="#787474" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M11.5449 6.8457L7.29492 11.3457" stroke="#787474" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></Box> 5% offer</Box>
                      <Typography className="sub-text">Explore New Arrivals</Typography>
                      <Typography className="main-text">Shop the latest Fish Delights</Typography>
                      <Link className='btn-text'>Show me all</Link>
                    </Grid>
                    <Grid item lg={6}>
                      <Box className="img-box">
                        <img src={banner2} alt="" width="100%" />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="banner-cart-body" sx={{ backgroundColor: "#FFF2F2" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item lg={6}>
                      <Box className="dic-box">
                        <Box sx={{ marginRight: "5px", marginTop: "7px" }} style={{ marginRight: "5px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                          <path d="M8.36454 2.8445C8.49742 2.68737 8.66009 2.56168 8.84195 2.47562C9.02381 2.38957 9.22076 2.34509 9.41996 2.34509C9.61915 2.34509 9.81611 2.38957 9.99796 2.47562C10.1798 2.56168 10.3425 2.68737 10.4754 2.8445L10.9712 3.431C11.1129 3.59862 11.2884 3.73034 11.4847 3.81642C11.681 3.90249 11.8931 3.94071 12.1052 3.92825L12.849 3.88475C13.0479 3.87313 13.2469 3.90608 13.433 3.98144C13.6191 4.05679 13.7881 4.17286 13.9289 4.32206C14.0698 4.47127 14.1793 4.65025 14.2504 4.84732C14.3215 5.04439 14.3525 5.25512 14.3415 5.46575L14.3004 6.2525C14.2887 6.477 14.3249 6.7014 14.4061 6.90911C14.4874 7.11682 14.6118 7.30253 14.77 7.4525L15.3239 7.9775C15.4724 8.11819 15.5912 8.29048 15.6726 8.48311C15.7539 8.67573 15.796 8.88437 15.796 9.09537C15.796 9.30638 15.7539 9.51501 15.6726 9.70763C15.5912 9.90026 15.4724 10.0726 15.3239 10.2132L14.77 10.7382C14.6117 10.8883 14.4873 11.0741 14.406 11.282C14.3247 11.4898 14.2886 11.7144 14.3004 11.939L14.3415 12.7265C14.3524 12.9371 14.3213 13.1478 14.2501 13.3449C14.179 13.5419 14.0693 13.7208 13.9284 13.87C13.7875 14.0191 13.6185 14.1351 13.4324 14.2103C13.2462 14.2856 13.0472 14.3185 12.8483 14.3067L12.1052 14.2632C11.8932 14.2509 11.6813 14.2892 11.4851 14.3752C11.2889 14.4613 11.1135 14.593 10.9719 14.7605L10.4761 15.347C10.3432 15.5042 10.1805 15.63 9.99856 15.7162C9.81664 15.8023 9.61959 15.8468 9.42031 15.8468C9.22103 15.8468 9.02399 15.8023 8.84206 15.7162C8.66014 15.63 8.49742 15.5042 8.36454 15.347L7.86871 14.7605C7.727 14.5929 7.55149 14.4611 7.35519 14.3751C7.15889 14.289 6.94681 14.2508 6.73467 14.2632L5.99092 14.3067C5.79198 14.3184 5.59298 14.2854 5.40689 14.2101C5.2208 14.1347 5.05181 14.0186 4.91097 13.8694C4.77012 13.7202 4.66058 13.5412 4.5895 13.3442C4.51842 13.1471 4.4874 12.9364 4.49846 12.7257L4.53954 11.939C4.55121 11.7145 4.51506 11.4901 4.43377 11.2824C4.35248 11.0747 4.22813 10.889 4.06992 10.739L3.516 10.214C3.36748 10.0733 3.24867 9.90101 3.16733 9.70838C3.08599 9.51576 3.04395 9.30713 3.04395 9.09612C3.04395 8.88512 3.08599 8.67649 3.16733 8.48386C3.24867 8.29123 3.36748 8.11894 3.516 7.97825L4.06992 7.45325C4.22823 7.3032 4.35263 7.11737 4.43393 6.90952C4.51522 6.70167 4.55131 6.47712 4.53954 6.2525L4.49846 5.465C4.4876 5.25442 4.51879 5.04379 4.59 4.84685C4.66122 4.6499 4.77086 4.47107 4.91176 4.32202C5.05266 4.17297 5.22166 4.05706 5.40773 3.98184C5.5938 3.90662 5.79276 3.87379 5.99162 3.8855L6.73467 3.929C6.94669 3.94135 7.15863 3.90307 7.3548 3.817C7.55098 3.73093 7.72637 3.59927 7.868 3.43175L8.36383 2.84525L8.36454 2.8445Z" stroke="#787474" />
                          <path d="M7.64941 7.2207H7.6565V7.2282H7.64941V7.2207ZM11.1911 10.9707H11.1982V10.9782H11.1911V10.9707Z" stroke="#787474" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M11.5449 6.8457L7.29492 11.3457" stroke="#787474" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></Box> 5% offer</Box>
                      <Typography className="sub-text">Digital gift Cards</Typography>
                      <Typography className="main-text">Give the Gift Of <br /> Choice</Typography>
                      <Link className='btn-text'>Show me all</Link>
                    </Grid>
                    <Grid item lg={6}>
                      <Box className="img-box">
                        <img src={fishb} alt="" width="100%" />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="banner-cart-body" sx={{ backgroundColor: "#ECF5FD" }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item lg={6}>
                      <Box className="dic-box">
                        <Box sx={{ marginRight: "5px", marginTop: "7px" }} style={{ marginRight: "5px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                          <path d="M8.36454 2.8445C8.49742 2.68737 8.66009 2.56168 8.84195 2.47562C9.02381 2.38957 9.22076 2.34509 9.41996 2.34509C9.61915 2.34509 9.81611 2.38957 9.99796 2.47562C10.1798 2.56168 10.3425 2.68737 10.4754 2.8445L10.9712 3.431C11.1129 3.59862 11.2884 3.73034 11.4847 3.81642C11.681 3.90249 11.8931 3.94071 12.1052 3.92825L12.849 3.88475C13.0479 3.87313 13.2469 3.90608 13.433 3.98144C13.6191 4.05679 13.7881 4.17286 13.9289 4.32206C14.0698 4.47127 14.1793 4.65025 14.2504 4.84732C14.3215 5.04439 14.3525 5.25512 14.3415 5.46575L14.3004 6.2525C14.2887 6.477 14.3249 6.7014 14.4061 6.90911C14.4874 7.11682 14.6118 7.30253 14.77 7.4525L15.3239 7.9775C15.4724 8.11819 15.5912 8.29048 15.6726 8.48311C15.7539 8.67573 15.796 8.88437 15.796 9.09537C15.796 9.30638 15.7539 9.51501 15.6726 9.70763C15.5912 9.90026 15.4724 10.0726 15.3239 10.2132L14.77 10.7382C14.6117 10.8883 14.4873 11.0741 14.406 11.282C14.3247 11.4898 14.2886 11.7144 14.3004 11.939L14.3415 12.7265C14.3524 12.9371 14.3213 13.1478 14.2501 13.3449C14.179 13.5419 14.0693 13.7208 13.9284 13.87C13.7875 14.0191 13.6185 14.1351 13.4324 14.2103C13.2462 14.2856 13.0472 14.3185 12.8483 14.3067L12.1052 14.2632C11.8932 14.2509 11.6813 14.2892 11.4851 14.3752C11.2889 14.4613 11.1135 14.593 10.9719 14.7605L10.4761 15.347C10.3432 15.5042 10.1805 15.63 9.99856 15.7162C9.81664 15.8023 9.61959 15.8468 9.42031 15.8468C9.22103 15.8468 9.02399 15.8023 8.84206 15.7162C8.66014 15.63 8.49742 15.5042 8.36454 15.347L7.86871 14.7605C7.727 14.5929 7.55149 14.4611 7.35519 14.3751C7.15889 14.289 6.94681 14.2508 6.73467 14.2632L5.99092 14.3067C5.79198 14.3184 5.59298 14.2854 5.40689 14.2101C5.2208 14.1347 5.05181 14.0186 4.91097 13.8694C4.77012 13.7202 4.66058 13.5412 4.5895 13.3442C4.51842 13.1471 4.4874 12.9364 4.49846 12.7257L4.53954 11.939C4.55121 11.7145 4.51506 11.4901 4.43377 11.2824C4.35248 11.0747 4.22813 10.889 4.06992 10.739L3.516 10.214C3.36748 10.0733 3.24867 9.90101 3.16733 9.70838C3.08599 9.51576 3.04395 9.30713 3.04395 9.09612C3.04395 8.88512 3.08599 8.67649 3.16733 8.48386C3.24867 8.29123 3.36748 8.11894 3.516 7.97825L4.06992 7.45325C4.22823 7.3032 4.35263 7.11737 4.43393 6.90952C4.51522 6.70167 4.55131 6.47712 4.53954 6.2525L4.49846 5.465C4.4876 5.25442 4.51879 5.04379 4.59 4.84685C4.66122 4.6499 4.77086 4.47107 4.91176 4.32202C5.05266 4.17297 5.22166 4.05706 5.40773 3.98184C5.5938 3.90662 5.79276 3.87379 5.99162 3.8855L6.73467 3.929C6.94669 3.94135 7.15863 3.90307 7.3548 3.817C7.55098 3.73093 7.72637 3.59927 7.868 3.43175L8.36383 2.84525L8.36454 2.8445Z" stroke="#787474" />
                          <path d="M7.64941 7.2207H7.6565V7.2282H7.64941V7.2207ZM11.1911 10.9707H11.1982V10.9782H11.1911V10.9707Z" stroke="#787474" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M11.5449 6.8457L7.29492 11.3457" stroke="#787474" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></Box> 5% offer</Box>
                      <Typography className="sub-text">Sale Collection</Typography>
                      <Typography className="main-text">Up to 80% Of Retail</Typography>
                      <Link className='btn-text'>Show me all</Link>
                    </Grid>
                    <Grid item lg={6}>
                      <Box className="img-box">
                        <img src={fishb} alt="" width="100%" />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Container>
        </Box>
      </section>
      <ProductcardSec MainHeadText="Combos for you" MainSubText="Savour the savings!" />
      <ProductcardSec MainHeadText="Under Rs.199 Store" MainSubText="Stay meativated on a budget" />
      <ProductcardSec MainHeadText="Delicious boneless cuts" />
      <ProductcardSec MainHeadText="Breakfast specials" />
      <ProductcardSec MainHeadText="Top Rated" MainSubText="Stay meativated on a budget" />
      <section className="section">
        <Box className="about-section">
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={4} sm={6} xs={12}>
                <Box className="card-body">
                  <Box className="red-line"></Box>
                  <Typography className="main-text">We will sell only the meat that we would eat ourselves.</Typography>
                  <Typography className="sub-text">At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience. </Typography>
                </Box>
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Box className="card-body">
                  <Box className="red-line"></Box>
                  <Typography className="main-text">We will sell only the meat that we would eat ourselves.</Typography>
                  <Typography className="sub-text">At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience. </Typography>
                </Box>
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Box className="card-body">
                  <Box className="red-line"></Box>
                  <Typography className="main-text">We will sell only the meat that we would eat ourselves.</Typography>
                  <Typography className="sub-text">At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience. </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
      <section className="section">
        <Container>
          <Box className="footer-section">

            <Box className="footer-logo-body">
              <Box className="logo-img">

                <img src={logo} alt='' width="70px" />
              </Box>
              <Box className="footer-line"></Box>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item lg={3}>
                  <Typography sx={{ fontSize: "15px", fontWeight: "600", mt: 2 }}>EXPERIENCE LICIOUS APP ON MOBILE</Typography>
                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box sx={{ marginRight: "5px" }}><Link><img src={googleplay} alt='googleplay' width="100px" /></Link></Box>
                    <Box><Link><img src={appstore} alt='appstore' width="100px" /></Link></Box>
                  </Box>
                  <Box sx={{ marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>KEEP IN TOUCH</Typography>
                    <Box sx={{ display: "flex", mt: 1 }}>
                      <Box sx={{ marginRight: "5px" }}><Link><svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                        <circle cx="16.7026" cy="17.1172" r="16.2144" fill="#111111" fillOpacity="0.8" />
                        <path d="M25.7026 11.5361C25.0333 11.8297 24.32 12.0243 23.5764 12.1188C24.3414 11.6621 24.9253 10.9443 25.1998 10.0792C24.4865 10.5044 23.699 10.8048 22.8598 10.9724C22.1825 10.2513 21.2173 9.80469 20.1643 9.80469C18.1213 9.80469 16.4765 11.4629 16.4765 13.4958C16.4765 13.7883 16.5013 14.0696 16.562 14.3373C13.4941 14.1877 10.7795 12.7173 8.95589 10.4774C8.63751 11.0298 8.45076 11.6621 8.45076 12.3427C8.45076 13.6207 9.10889 14.7536 10.0899 15.4094C9.49701 15.3982 8.91539 15.2261 8.42264 14.9549C8.42264 14.9662 8.42264 14.9808 8.42264 14.9954C8.42264 16.7887 9.70176 18.2782 11.3791 18.6213C11.0788 18.7034 10.7514 18.7428 10.4116 18.7428C10.1754 18.7428 9.93689 18.7293 9.71301 18.6798C10.1911 20.1412 11.5479 21.2156 13.1611 21.2504C11.9056 22.2326 10.3115 22.8243 8.58576 22.8243C8.28314 22.8243 7.99289 22.8108 7.70264 22.7737C9.33726 23.8278 11.2745 24.4297 13.3636 24.4297C20.1541 24.4297 23.8666 18.8047 23.8666 13.9289C23.8666 13.7658 23.861 13.6083 23.8531 13.4519C24.5855 12.9322 25.2009 12.2831 25.7026 11.5361Z" fill="white" />
                      </svg></Link></Box>
                      <Box sx={{ marginRight: "5px" }}><Link><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <circle cx="17.1313" cy="17.1172" r="16.2144" fill="#111111" fillOpacity="0.8" />
                        <path d="M19.9885 11.1059H21.6317V8.24394C21.3482 8.20494 20.3732 8.11719 19.2377 8.11719C16.8685 8.11719 15.2455 9.60744 15.2455 12.3464V14.8672H12.631V18.0667H15.2455V26.1172H18.451V18.0674H20.9597L21.358 14.8679H18.4502V12.6637C18.451 11.7389 18.7 11.1059 19.9885 11.1059Z" fill="white" />
                      </svg></Link></Box>
                      <Box><Link><svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                        <circle cx="16.5601" cy="17.1172" r="16.2144" fill="#111111" fillOpacity="0.8" />
                        <path d="M25.5125 13.4092C25.4703 12.4528 25.3157 11.7953 25.0941 11.2256C24.8656 10.6208 24.5139 10.0793 24.0532 9.6292C23.6031 9.17208 23.0581 8.81688 22.4603 8.59189C21.8873 8.37033 21.2332 8.21567 20.2768 8.1735C19.3132 8.12776 19.0073 8.11719 16.5635 8.11719C14.1197 8.11719 13.8138 8.12776 12.8538 8.16993C11.8974 8.2121 11.2399 8.3669 10.6703 8.58832C10.0654 8.81688 9.52389 9.16851 9.07378 9.6292C8.61666 10.0793 8.26159 10.6243 8.03647 11.2221C7.81491 11.7953 7.66025 12.4493 7.61808 13.4057C7.57234 14.3692 7.56177 14.6751 7.56177 17.1189C7.56177 19.5628 7.57234 19.8687 7.61451 20.8287C7.65668 21.7851 7.81148 22.4426 8.03304 23.0123C8.26159 23.6171 8.61666 24.1586 9.07378 24.6087C9.52389 25.0658 10.0689 25.421 10.6667 25.646C11.2399 25.8676 11.8938 26.0222 12.8504 26.0644C13.8102 26.1067 14.1162 26.1171 16.5601 26.1171C19.0039 26.1171 19.3098 26.1067 20.2698 26.0644C21.2262 26.0222 21.8837 25.8676 22.4533 25.646C23.663 25.1783 24.6194 24.2219 25.0871 23.0123C25.3085 22.4392 25.4633 21.7851 25.5055 20.8287C25.5477 19.8687 25.5583 19.5628 25.5583 17.1189C25.5583 14.6751 25.5547 14.3692 25.5125 13.4092ZM23.8916 20.7583C23.8528 21.6374 23.7052 22.1121 23.5821 22.4286C23.2797 23.2127 22.6573 23.8351 21.8731 24.1376C21.5567 24.2606 21.0785 24.4083 20.2029 24.4469C19.2535 24.4892 18.9687 24.4996 16.5671 24.4996C14.1654 24.4996 13.8771 24.4892 12.9311 24.4469C12.0521 24.4083 11.5774 24.2606 11.2609 24.1376C10.8707 23.9933 10.5155 23.7648 10.2272 23.4659C9.92827 23.174 9.69971 22.8224 9.55549 22.4321C9.43242 22.1157 9.28476 21.6374 9.24616 20.7619C9.20386 19.8125 9.19342 19.5276 9.19342 17.1259C9.19342 14.7243 9.20386 14.436 9.24616 13.4901C9.28476 12.6111 9.43242 12.1364 9.55549 11.8199C9.69971 11.4295 9.92827 11.0745 10.2307 10.786C10.5225 10.4871 10.8741 10.2586 11.2645 10.1145C11.5809 9.99141 12.0592 9.84375 12.9347 9.80502C13.8841 9.76285 14.169 9.75227 16.5705 9.75227C18.9758 9.75227 19.2605 9.76285 20.2065 9.80502C21.0855 9.84375 21.5602 9.99141 21.8767 10.1145C22.2669 10.2586 22.6221 10.4871 22.9104 10.786C23.2093 11.0779 23.4379 11.4295 23.5821 11.8199C23.7052 12.1364 23.8528 12.6145 23.8916 13.4901C23.9337 14.4395 23.9443 14.7243 23.9443 17.1259C23.9443 19.5276 23.9337 19.8089 23.8916 20.7583Z" fill="white" />
                        <path d="M16.5639 12.4951C14.0111 12.4951 11.9399 14.5662 11.9399 17.1191C11.9399 19.672 14.0111 21.743 16.5639 21.743C19.1168 21.743 21.1878 19.672 21.1878 17.1191C21.1878 14.5662 19.1168 12.4951 16.5639 12.4951ZM16.5639 20.1185C14.9078 20.1185 13.5644 18.7753 13.5644 17.1191C13.5644 15.4628 14.9078 14.1196 16.5639 14.1196C18.2201 14.1196 19.5633 15.4628 19.5633 17.1191C19.5633 18.7753 18.2201 20.1185 16.5639 20.1185Z" fill="white" />
                        <path d="M22.4504 12.3124C22.4504 12.9085 21.967 13.3919 21.3707 13.3919C20.7746 13.3919 20.2913 12.9085 20.2913 12.3124C20.2913 11.7161 20.7746 11.2329 21.3707 11.2329C21.967 11.2329 22.4504 11.7161 22.4504 12.3124Z" fill="white" />
                      </svg></Link></Box>

                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} sx={{ mr: "auto", ml: "auto" }}>
                  <Grid container spacing={2}>
                    <Grid item lg={6}>
                      <Box sx={{ fontWeight: "600", }}>USEFUL LINKS</Box>
                      <List className='list-group'>
                        <ListItem className="list-item"><Link className="footer-nav-link">Why Licious?</Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">Refer & Earn</Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">Licious Cash & Cash+</Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">Careers</Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">BLOG</Link></ListItem>
                      </List>
                    </Grid>
                    <Grid item lg={6}>
                      <Box></Box>
                      <List className='list-group'>
                        <ListItem className="list-item"><Link className="footer-nav-link">About us</Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">Bug Bounty Guidelines </Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">T&C</Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">FAQ</Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">FSSC 22000 Certification</Link></ListItem>
                        <ListItem className="list-item"><Link className="footer-nav-link">Sitemap</Link></ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={3}>
                  <Box sx={{ mb: 2, fontWeight: "600" }}>CONTACT US</Box>
                  <Box className="addres-section">
                    <Typography><Link>Call: 1800-4190-786</Link></Typography>
                    <Typography><Link>talktous@licious.com</Link></Typography>
                    <Typography>REGISTERED OFFICE ADDRESS:</Typography>
                    <Typography>DELIGHTFUL GOURMET PVT LTD <br />
                      Maruthi Infotech Center 11/1,12/1 B wing 1st <br />
                      Floor Amarjyothi layout Intermediate ring <br />
                      road Domlur, B.B.M.P East, Karnataka-560071 <br />
                      Bangalore, Karnataka - 560071</Typography>
                    <Box sx={{ my: 3 }}><img src={mastercard} alt='img' width="60%" /> </Box>
                    <Typography sx={{ fontWeight: "600", }}>HAVE SECURITY CONCERN?</Typography>
                    <Typography>Mail us to:</Typography>
                    <Typography><Link>security@licious.com</Link></Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </section>
      <section className="section">
        <Box className="we-serve-section">
          <Container>
            <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: 2 }}>CITIES WE SERVE</Typography>
            <Box className="serve-body">
              <Typography className="serve-box"><Link className="footer-text">Bengaluru</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">NCR</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Hyderabad</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Chandigarh</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Panchkula</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Mohali</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Mumbai</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Pune</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Chennai</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Coimbatore</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Jaipur</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Cochin</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Vijaywada</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Vishakhapatnam</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Kolkata</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Lacknow</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Kanpur</Link></Typography>
              <Typography className="serve-box"><Link className="footer-text">Nagpur</Link></Typography>
            </Box>
          </Container>
        </Box>
      </section>
      <section>
        <Box className="footer-about-section">
          <Container>
            <Box>
              <Typography className='footer-about-main-text'>© 2021 Delightful Gourmet Pvt Ltd. All Rights Reserved.</Typography>
              <Typography className="footer-about-sub-text" >Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are completely natural and healthy. Once you've experienced Licious, you'll never go back to the old way of buying meat and seafood.</Typography>
            </Box>
          </Container>
        </Box>
      </section>
      <section>
        <Box  className="footer-bottom-nav-section">
          <Grid container spacing={2} className="list-group-footer">
            <Grid item xs={3} ListItem className="list-item">
              <NavLink className="nav-link">
                <span>
                  {/* <img src={blogo} alt="" style={{ width: "24px", height: "24px", fill: "red"}}/>   */}
                  <img
                    src={require("../assets/img/licious_bottom_nav.svg").default}
                    alt=""
                    style={{ width: "24px", height: "24px", fill: "red" }}
                  />
                </span>
                <span>Licious</span>
              </NavLink>
            </Grid>
            <Grid item xs={3} className="list-item">
              <NavLink className="nav-link">
                <span>                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 22 23" fill="none">
                  <g clipPath="url(#clip0_181_2835)">
                    <path d="M10.5364 3.41239C10.7393 3.41282 10.9399 3.45665 11.1246 3.54096L19.0104 7.30165C19.0393 7.31119 19.0669 7.32439 19.0924 7.34094C19.0714 7.35648 19.0487 7.36966 19.0247 7.38022L11.1246 11.1409C10.9398 11.2247 10.7392 11.2681 10.5364 11.2681C10.3335 11.2681 10.1329 11.2247 9.9481 11.1409L2.06225 7.38022C2.03336 7.37069 2.00581 7.35748 1.98026 7.34094C2.00133 7.32539 2.02404 7.31222 2.04799 7.30165L9.9481 3.54096C10.1328 3.45665 10.3334 3.41282 10.5364 3.41239ZM10.5364 1.98383C10.121 1.98282 9.71063 2.0743 9.33492 2.25168L1.44907 6.0088C1.18081 6.11289 0.950255 6.29582 0.787673 6.53356C0.625091 6.77131 0.538086 7.05275 0.538086 7.34094C0.538086 7.62912 0.625091 7.91057 0.787673 8.14832C0.950255 8.38606 1.18081 8.56899 1.44907 8.67307L9.33492 12.4302C9.71098 12.6065 10.1211 12.6979 10.5364 12.6979C10.9516 12.6979 11.3617 12.6065 11.7378 12.4302L19.6236 8.67307C19.8919 8.56899 20.1224 8.38606 20.285 8.14832C20.4476 7.91057 20.5346 7.62912 20.5346 7.34094C20.5346 7.05275 20.4476 6.77131 20.285 6.53356C20.1224 6.29582 19.8919 6.11289 19.6236 6.0088L11.7378 2.25168C11.3621 2.0743 10.9517 1.98282 10.5364 1.98383Z" fill="#4D4D4F" stroke="#4D4D4F" strokeWidth="0.2" />
                    <path d="M10.536 17.0907C10.0007 17.0934 9.47214 16.9711 8.99229 16.7335L0.949576 12.73C0.862809 12.6901 0.78493 12.6331 0.720561 12.5624C0.656191 12.4918 0.606642 12.4089 0.574854 12.3187C0.543066 12.2285 0.529685 12.1328 0.535506 12.0373C0.541328 11.9419 0.566232 11.8485 0.608742 11.7629C0.651252 11.6772 0.710502 11.601 0.782976 11.5387C0.855451 11.4765 0.939673 11.4294 1.03065 11.4004C1.12162 11.3713 1.21749 11.3609 1.31257 11.3696C1.40765 11.3784 1.50001 11.4062 1.58415 11.4514L9.62686 15.4514C9.90974 15.5907 10.2208 15.6631 10.536 15.6631C10.8512 15.6631 11.1622 15.5907 11.4451 15.4514L19.4878 11.4514C19.6562 11.3739 19.848 11.3652 20.0228 11.427C20.1975 11.4888 20.3413 11.6163 20.4238 11.7825C20.5063 11.9487 20.521 12.1406 20.4647 12.3174C20.4084 12.4943 20.2856 12.6423 20.1223 12.73L12.0796 16.73C11.6001 16.9688 11.0715 17.0923 10.536 17.0907Z" fill="#4D4D4F" stroke="#4D4D4F" strokeWidth="0.2" />
                    <path d="M10.536 21.9837C10.0009 21.9848 9.47271 21.8626 8.99229 21.6266L0.949577 17.623C0.862809 17.5831 0.78493 17.5261 0.720561 17.4555C0.656191 17.3848 0.606642 17.302 0.574854 17.2118C0.543066 17.1216 0.529685 17.0259 0.535506 16.9304C0.541328 16.8349 0.566232 16.7416 0.608742 16.656C0.651253 16.5703 0.710502 16.4941 0.782976 16.4318C0.855451 16.3695 0.939673 16.3225 1.03065 16.2934C1.12162 16.2644 1.21749 16.2539 1.31257 16.2627C1.40765 16.2715 1.50001 16.2993 1.58416 16.3445L9.62687 20.3445C9.90974 20.4838 10.2208 20.5562 10.536 20.5562C10.8512 20.5562 11.1622 20.4838 11.4451 20.3445L19.4878 16.3445C19.6562 16.267 19.848 16.2582 20.0228 16.32C20.1975 16.3818 20.3413 16.5093 20.4238 16.6756C20.5063 16.8418 20.521 17.0336 20.4647 17.2105C20.4084 17.3873 20.2856 17.5353 20.1223 17.623L12.0796 21.6266C11.5992 21.8626 11.0711 21.9848 10.536 21.9837Z" fill="#4D4D4F" stroke="#4D4D4F" strokeWidth="0.2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_181_2835">
                      <rect width="21" height="22" fill="white" transform="translate(0.201172 0.983826)" />
                    </clipPath>
                  </defs>
                </svg></span>
                <span>Categories</span>
              </NavLink>
            </Grid>
            <Grid item xs={3} className="list-item">
              <NavLink className="nav-link">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 18 18" fill="none">
                    <circle cx="8.73274" cy="8.09135" r="7.06819" stroke="black" stroke-opacity="0.63" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.511 13.3745L17.081 16.9445" stroke="black" stroke-opacity="0.63" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span>Search</span>
              </NavLink>
            </Grid>
            <Grid item xs={3} className="list-item">
              <NavLink className="nav-link">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 19 20" fill="none">
                    <g clip-path="url(#clip0_257_889)">
                      <path d="M16.8123 18.4835V16.5946C16.8123 15.5927 16.4143 14.6318 15.7058 13.9233C14.9974 13.2148 14.0365 12.8168 13.0345 12.8168H5.47895C4.47702 12.8168 3.51613 13.2148 2.80766 13.9233C2.09918 14.6318 1.70117 15.5927 1.70117 16.5946V18.4835" stroke="#4D4D4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.2563 9.03939C11.3427 9.03939 13.0341 7.34802 13.0341 5.26161C13.0341 3.1752 11.3427 1.48383 9.2563 1.48383C7.16989 1.48383 5.47852 3.1752 5.47852 5.26161C5.47852 7.34802 7.16989 9.03939 9.2563 9.03939Z" stroke="#4D4D4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_257_889">
                        <rect width="18" height="19" fill="white" transform="translate(0.201172 0.483826)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="main-text">Account</span>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  )
}

export default Home
