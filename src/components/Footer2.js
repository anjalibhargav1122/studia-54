import { Container, Grid } from '@mui/material'
import React from 'react'
import off from "../images/off.png"
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { RiVkFill } from "react-icons/ri";

const Footer2 = ({ tx }) => {
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
            <Container maxWidth={false} className='pt-24 sm:pt-44'>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <a className='ff ' href='#'>ABOUT US</a><br /><br />
                        <a className='ff uppercase' href='#'>Contacts</a><br /><br />
                        <a className='ff uppercase' href='#'>Services</a><br /><br />
                        <a className='ff uppercase' href='#'>Career</a><br /><br />
                        <a className='ff uppercase' href='#'>Blog</a>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <a className='ff ' href='#'>PORTFOLIO</a><br /><br />
                        <a className='ff uppercase' href='#'>Commercials</a><br /><br />
                        <a className='ff uppercase' href='#'>Architectural design</a><br /><br />
                        <a className='ff uppercase' href='#'>Residential interiors</a><br /><br />
                        <a className='ff uppercase' href='#'>Furniture brand FIFTYFOURMS</a>
                    </Grid>  <Grid item xs={12} md={4}><div className='w-[55%]'>
                        <img src={off} alt='officalllogo' className='w-full h-full' /></div>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className='pt-8'>
                    <Grid item xs={12} md={4} >
                        <Grid container spacing={2}>   {
                            icons.map((v, i) => {
                                return (
                                    <Grid item xs={2} md={2} key={i}>
                                        <div className='bg-white flex items-center justify-center text-black w-8 h-8 rounded-full'>{i === 0 ? v.icn : <a href='#'>{v.icn}</a>}</div>
                                    </Grid>

                                )
                            })
                        }</Grid>

                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='flex gap-4'> <a className='ff text-[#848484]' href='#'>RU</a>
                            <a className='ff ' href='#'>EN</a></div>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className='pt-10'>
                    <Grid item xs={12} md={8}>
                        <a className='ff ' href='#'>Privacy policy</a><div className="mt-3">  <a className='ff ' href='#'>{tx}</a></div>

                    </Grid>

                    <Grid item xs={12} md={4}><p className='text-[#bcbcbc] ff'>© 2013 — 2024 Studia-54 Interior Design and Engineering</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer2