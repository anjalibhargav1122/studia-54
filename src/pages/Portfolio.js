import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import '../App.css';
import video9 from "../videos/video9.mp4"
import video10 from "../videos/video10.mp4"
import video11 from "../videos/video11.mp4"
import video12 from "../videos/video12.mp4"
import video13 from "../videos/video13.mp4"
import s from "../images/s_logo.svg"
import { Container, Grid } from '@mui/material';
import Footer2 from '../components/Footer2';
import WhatsappBtn from '../components/WhatsappBtn';

const Portfolio = () => {

    const vidos = [
        {
            v: video9,
            p: "Completed apartment project in OKO Tower, Moscow City",
            tx: "Residential interiors"
        },
        {
            v: video10,
            p: "Premium architectural project of a residence in Repino",
            tx: "Architectural design"
        },
        {
            v: video11,
            p: "Luxury interior design project of a residence in Repino",
            tx: "Residential interiors"
        },
        {
            v: video12,
            p: "Completed residency project in Kenya",
            tx: "Residential interiors"
        },
        {
            v: video13,
            p: "Realised interior of a house in the Lagry Park cottage settlement",
            tx: "Architectural design"
        },
        {
            v: video9,
            p: "Completed apartment project in OKO Tower, Moscow City",
            tx: "Residential interiors"
        }
    ];


    const img = [
        {
            img: 'imgbg1',
        },
        {
            img: 'imgbg2',
        },
        {
            img: 'imgbg3',
        },
    ];

    const [crntIx, setCrntIx] = useState(0);

    useEffect(() => {
        const inter = setInterval(() => {
            setCrntIx((prevIx) => (prevIx === img.length - 1 ? 0 : prevIx + 1));
        }, 2000);
        return () => clearInterval(inter);
    }, [img.length]);



    const videoRefs = useRef([]);



    const handlePlayVideo = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };

    const handlePauseVideo = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
        }
    };



    return (
        <div>
            <Header tx="PORTFOLIO" />
            <div
                className={`${img[crntIx].img} w-full h-[65vh] sm:h-[100vh] flex justify-center`}
                style={{ transition: 'all 0.5s ease-in-out', position: 'relative' }}
            >
                <Container maxWidth="md" className='text-white absolute bottom-[70px] '><p className='ff text-center sm:text-start text-5xl sm:text-6xl '>PORTFOLIO</p>
                    <div className='flex items-center gap-y-2 sm:items-start justify-normal sm:justify-between flex-col sm:flex-row mt-14'>
                        <a className='uppercase ff text-xl underline hover:no-underline' href='#'>Commercial interiors</a><a className='uppercase ff text-xl underline hover:no-underline' href='#'>Commercial interiors</a><a className='uppercase ff text-xl underline hover:no-underline' href='#'>Commercial interiors</a></div>
                </Container>
            </div>
            <div className='bg-[#1f1f1f] text-white pt-10 pb-20'>
                <Container maxWidth="md">
                    <Grid container rowSpacing={2} columnSpacing={5}>
                        {vidos.map((v, i) => {
                            return (
                                <Grid item key={i} xs={12} md={6} >
                                    <div
                                        className="relative w-full h-[44vh] overflow-hidden group"
                                        onMouseEnter={() => handlePlayVideo(i)}
                                        onMouseLeave={() => handlePauseVideo(i)}
                                    >
                                        <video
                                            ref={(el) => (videoRefs.current[i] = el)}
                                            src={v.v}
                                            className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                            loop
                                            muted
                                            playsInline
                                        ></video>
                                        <p className='ff absolute bottom-[8px] left-[30px]'>
                                            {v.tx}</p>
                                    </div>
                                    <div className='relative mt-2'><div className='w-[18%] ms-4'>
                                        <img src={s} alt='s_logo' className='w-full h-full' /></div>
                                        <p className="text-[19px] uppercase ff left-[33px] absolute top-[5px]">{v.p}</p></div>

                                </Grid>
                            );
                        })}
                    </Grid><div className='text-center mt-14'>
                        <a href='#' className='ff underline'>SHOW MORE</a></div>
                </Container>
            </div>
            <div className='bg-[#1f1f1f] text-white pb-4'>
                <Footer2 tx="ORDER A PROJECT" />

            </div>
            <WhatsappBtn />
        </div>
    );
};

export default Portfolio;
