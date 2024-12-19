import { Container } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import logo from "../images/logo2.svg"
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { RiVkFill } from "react-icons/ri";

const Footer = () => {

    const icons = [
        {
            icn: <FaWhatsapp />
        },
        {
            icn: <AiOutlineInstagram />
        },
        {
            icn: <FaPinterest />
        },
        {
            icn: <MdFacebook />
        },
        {
            icn: <RiVkFill />
        },
        {
            icn: <AiFillYoutube />
        }
    ];

    return (
        <div>
            <Container maxWidth={false} className='bg-[#181818] text-[#ffffff] pt-24 sm:pt-44 pb-44'>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3} >
                        <a className='ff ' href='#'>ABOUT US</a><br /><br />
                        <a className='ff uppercase' href='#'>Contacts</a><br /><br />
                        <a className='ff uppercase' href='#'>Services</a><br /><br />
                        <a className='ff uppercase' href='#'>Career</a><br /><br />
                        <a className='ff uppercase' href='#'>Blog</a>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <a className='ff ' href='#'>PORTFOLIO</a><br /><br />
                        <a className='ff uppercase' href='#'>Commercials</a><br /><br />
                        <a className='ff uppercase' href='#'>Architectural design</a><br /><br />
                        <a className='ff uppercase' href='#'>Residential interiors</a><br /><br />
                        <a className='ff uppercase' href='#'>Furniture brand FIFTYFOURMS</a>
                    </Grid> <Grid item xs={12} md={3} >
                        <a className='ff ' href='#'>Privacy Policy</a>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='w-[60%]'>
                            <img src={logo} alt='STUDIA 54' className='w-full h-full' /></div>
                        <p className='mt-9 text-sm ff'>© 2013 — 2024 Studia-54 Interior Design and Engineering</p>

                        <div className='flex gap-4 mt-8 mb-8'> <a className='ff ' href='#'>RU</a>
                            <a className='ff ' href='#'>EN</a></div>

                        <Grid container spacing={2}>
                            {
                                icons.map((v, i) => {
                                    return (
                                        <Grid item xs={2} md={2} key={i}>
                                            <div className='bg-white flex items-center justify-center text-black w-8 h-8 rounded-full'>{i === 0 ? v.icn : <a href='#'>{v.icn}</a>}</div>
                                        </Grid>

                                    )
                                })
                            }

                        </Grid>
                    </Grid>


                </Grid>
            </Container>
        </div>
    )
}

export default Footer