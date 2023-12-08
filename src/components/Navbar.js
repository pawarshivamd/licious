import { AppBar, Box, Container, FormControl, Grid, InputBase, MenuItem, Typography, alpha, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/img/logo.png'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledSelect = styled(Select)`
  padding: 0px;
.MuiSelect-select{
    padding:0px;
}
.MuiOutlinedInput-notchedOutline{
    border:none;
}
`;
const Navbar = () => {
    const [showscroll, setshowscroll] = useState(false);

    const [age, setAge] = React.useState('');
    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY > 0) {
                setshowscroll(true)
            }
            else {
                setshowscroll(false)
            };
        };
        window.addEventListener('scroll', handelScroll);
        return () => {
            window.removeEventListener('scroll', handelScroll);
        }
    });
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <nav className={`navbar ${showscroll ? "scroll-navbar" : ""} `}>
            <Container>
                <Grid container spacing={1} alignItems="center">
                    <Grid item lg={1}>
                        <Box>
                            <img src={logo} alt='' width="60px" />
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box sx={{ display: "flex", }}>
                            <LocationOnIcon sx={{ fontSize: "17px", marginTop: "3px" }} />
                            <Box>

                                <FormControl sx={{ minWidth: 120, p: 0 }}>
                                    <StyledSelect
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>Surat</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ahemdabad</MenuItem>
                                    </StyledSelect>
                                </FormControl>
                                <Typography className="addres-text">3453/56, Opp. Khanpur Gate, Near</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box className="search-box">
                            <input type='search' placeholder='Search for any delicious product' className="input-box" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="8.73274" cy="8.09135" r="7.06819" stroke="black" strokeOpacity="0.63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.5112 13.3745L17.0812 16.9445" stroke="black" strokeOpacity="0.63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Box>

                    </Grid>
                    <Grid item lg={3} className='cate-login-section'>
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            <Box sx={{ display: "flex" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
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
                                </svg>
                                <Typography className="categorie-text">Categories</Typography>
                            </Box>
                            <Box>
                                <Box sx={{ display: "flex" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                        <g clipPath="url(#clip0_181_2842)">
                                            <path d="M16.8123 18.4835V16.5946C16.8123 15.5927 16.4143 14.6318 15.7058 13.9233C14.9974 13.2148 14.0365 12.8168 13.0345 12.8168H5.47895C4.47702 12.8168 3.51613 13.2148 2.80766 13.9233C2.09918 14.6318 1.70117 15.5927 1.70117 16.5946V18.4835" stroke="#4D4D4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.2563 9.03939C11.3427 9.03939 13.0341 7.34802 13.0341 5.26161C13.0341 3.1752 11.3427 1.48383 9.2563 1.48383C7.16989 1.48383 5.47852 3.1752 5.47852 5.26161C5.47852 7.34802 7.16989 9.03939 9.2563 9.03939Z" stroke="#4D4D4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_181_2842">
                                                <rect width="18" height="19" fill="white" transform="translate(0.201172 0.483826)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <Typography className="login-text">Login</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={1} sx={{ ml: "auto" }}>
                        <Box className="nav-cart-body">
                            <Box>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                    <g clipPath="url(#clip0_181_2850)">                                                     
                                        <path d="M6.7081 16.7588C6.7081 16.3435 6.57907 15.9375 6.33734 15.5922C6.0956 15.2468 5.75201 14.9776 5.35001 14.8187C4.94802 14.6598 4.50566 14.6182 4.07891 14.6992C3.65215 14.7802 3.26014 14.9802 2.95247 15.2739C2.64479 15.5676 2.43526 15.9418 2.35038 16.3491C2.26549 16.7565 2.30906 17.1787 2.47557 17.5625C2.64209 17.9462 2.92406 18.2742 3.28585 18.5049C3.64764 18.7357 4.07299 18.8588 4.5081 18.8588C5.09158 18.8588 5.65116 18.6376 6.06374 18.2438C6.47632 17.8499 6.7081 17.3158 6.7081 16.7588Z" stroke="#D11243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.6075 16.7588C16.6075 16.3435 16.4785 15.9375 16.2367 15.5922C15.995 15.2468 15.6514 14.9776 15.2494 14.8187C14.8474 14.6598 14.4051 14.6182 13.9783 14.6992C13.5516 14.7802 13.1596 14.9802 12.8519 15.2739C12.5442 15.5676 12.3347 15.9418 12.2497 16.3491C12.1649 16.7565 12.2085 17.1787 12.3749 17.5625C12.5415 17.9462 12.8235 18.2742 13.1853 18.5049C13.5471 18.7357 13.9723 18.8588 14.4075 18.8588C14.9909 18.8588 15.5505 18.6376 15.9631 18.2438C16.3757 17.8499 16.6075 17.3158 16.6075 16.7588Z" stroke="#D11243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.73415 5.20885H16.883L14.408 11.5088H4.20081C3.72734 11.5088 3.30698 11.2197 3.15726 10.7909L1.69059 6.59089C1.45316 5.91098 1.98333 5.20885 2.73415 5.20885Z" fill="#D11243" stroke="#D11243" strokeWidth="1.5" />
                                        <path d="M4.50732 14.6588H13.3073L17.444 3.80001C17.6021 3.38506 18.0152 3.10884 18.4778 3.10884H22.1073" stroke="#D11243" strokeWidth="1.5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_181_2850">
                                            <rect width="22" height="21" fill="white" transform="translate(0.657715 0.483841)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Box>
                            <Box>
                                <Typography className="cart-item">1 item</Typography>
                                <Typography className="total-price">218.08</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </nav>
    )
}

export default Navbar
