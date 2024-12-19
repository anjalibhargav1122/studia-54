import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/Navbar'
import { Container } from '@mui/material'
import video from "../videos/video.mp4"
import video2 from "../videos/video2.mp4"
import video3 from "../videos/video3.mp4"
import Grid from '@mui/material/Grid';
import "../App.css"
import one from "../images/one.jpg"
import two from "../images/two.jpg"
import four from "../images/four.jpg"
import three from "../images/three.jpg"
import ek from "../images/ek.jpg";
import do2 from "../images/do2.jpg";
import tin from "../images/tin.jpg"
import team from "../images/team.webp"
import chhe from "../images/chhe.jpg"
import char from "../images/char.jpg"
import panch from "../images/panch.jpg"
import a from "../images/1.png"
import b from "../images/2.jpg"
import c from "../images/3.jpg"
import d from "../images/4.jpg"
import e from "../images/5.png"
import f from "../images/6.png"
import Footer from '../components/Footer'
import Form from '../components/Form'
import WhatsappBtn from '../components/WhatsappBtn'



const Home = () => {

    const img = [
        {
            url: one,
            p: "VILLA DESIGN IN GUJARAT, INDIA"
        },
        {
            url: two,
            p: "INTERIOR OF A RESIDENCE IN MOROCCO"
        },
        {
            url: three,
            p: "LUXURY DESIGN OF A VILLA IN MOROCCO"
        },
        {
            url: four,
            p: "VILLA WITH INTERNAL GARDEN IN VLADIVOSTOK"
        }
    ];

    const img2 = [
        {
            url: a,
            p: "ARCHITECTURAL PROJECT OF A RESIDENCE IN THAILAND"
        },
        {
            url: b,
            p: "THE SKYSCRAPER OF THE FUTURE BY THE SEA"
        },
        {
            url: c,
            p: "COUNTRY COTTAGE ARCHITECTURAL PROJECT IN MOSCOW REGION"
        },
        {
            url: d,
            p: "COUNTRY HOUSE PROJECT IN THE COTTAGE VILLAGE 'NOVYE DUBKI'"
        },
        {
            url: e,
            p: "ARCHITECTURAL PROJECT OF A HOUSE AND LANDSCAPE DESIGN OF A PLOT IN MOSCOW"
        },
        {
            url: f,
            p: "ARCHITECTURAL PROJECT OF A VILLA IN ABU-DHABI WITH AN OPEN-AIR MOVIE THEATER"
        }
    ];

    const img3 = [
        {
            url: ek,
            p : "DAZZLING INTERIOR OF A VILLA ON BLUE-WATERS ISLAND IN DUBAI"
        },
        {
            url: do2,
            p : "UNIQUE INTERIOR DESIGN OF A VILLA IN THE PHILIPPINES"
        },
        {
            url: tin,
            p : "INTERIOR OF A LUXURY PENTHOUSE IN THE USA"
        },
        {
            url: char,
            p : "INTERIOR DESIGN PROJECT IN RESIDENtlAL COMPLEX SAVVINSKAYA 27"
        },
        {
            url: panch,
            p : "THE INTERIOR DESIGN OF A PENTHOUSE WITH A MARBLE FIREPLACE"
        },
        {
            url: chhe,
            p : "EXPRESSIVE INTERIOR OF AN APARTMENT IN SAUDI ARABIA"
        }
    ];

    const tx = [
        {
            p: "Aesthetics & Excellence",
            h1: "Our projects embody the refined tastes and unique preferences of our owners. We set new standards in architecture, crafting collectible masterpieces that highlight the status of their residents."
        },
        {
            p: "Eternity & Elegance",
            h1: "Our projects embody the refined tastes and unique preferences of our owners. We set new standards in architecture, crafting collectible masterpieces that highlight the status of their residents."
        },
        {
            p: "Sensuality & Delicacy",
            h1: "Our projects embody the refined tastes and unique preferences of our owners. We set new standards in architecture, crafting collectible masterpieces that highlight the status of their residents."
        },
        {
            p: "Harmony & Natural beauty",
            h1: "Our projects embody the refined tastes and unique preferences of our owners. We set new standards in architecture, crafting collectible masterpieces that highlight the status of their residents."
        },
    ]

    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div><ResponsiveAppBar />

            <div className='w-[100%] h-[60vh] sm:h-[100vh]'><video loop muted autoPlay className='w-full h-full object-cover'>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.

            </video></div>

            <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff] pt-20 pb-20'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h1 className='text-5xl uppercase ff'>Studia 54</h1>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className='ff text-xl'>We, as a brand, turn your dreams into fantastique interiors and architectural designs. Our projects inspire the pursuit of your great aspirations. We create the alchemy of luxury and the enjoyment of our clientèle.</p>
                        <p className='ff text-xl mt-4 mb-4'>Our mission is to create, to sustain and to continue your histoire de succès.</p>
                        <a className='uppercase underline ' href='#'>Request a quote</a>
                    </Grid>

                </Grid>
            </Container>

            <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff] pt-0 sm:pt-20 pb-20'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h1 className='text-3xl uppercase ff'>Signature projects</h1>
                        <p className='ff text-xl mt-4 sm:mt-10'>One of our greatest accomplishments has been innovating new directions that have transformed the design and architectural industry. Our savoir-faire has earned worldwide praise and marks significant milestones in our journey of growth.</p>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>

                </Grid>
            </Container>
            <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff]  pb-20'>
                <Grid container rowSpacing={8} columnSpacing={3}>
                    {
                        img?.map((v, i) => {
                            return (

                                <Grid key={i} item xs={12} md={6}>
                                    <div className='relative'>
                                        <img src={v.url} className='w-full h-full object-cover' alt={v.url} />
                                        <p className="absolute left-[20px] ff" style={{
                                            transition: 'bottom 0.1s ease-out',
                                            bottom: `${scrollY > 0 ? 20 - scrollY * 0.02 : 0}px`
                                        }}>{v.p}</p>
                                    </div>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Container>
            <Container className='pt-0 sm:pt-20 pb-4 sm:pb-14 bg-[#1f1f1f] text-[#ffffff] ff text-2xl uppercase' maxWidth={false}>
                We do not merely build homes; we meticulously create enduring legacies
            </Container>

            <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff]  '>
                <Grid container spacing={2} >
                    {
                        tx.map((v, i) => {
                            return (
                                <Grid item xs={12} md={6} className={i === 1 || i === 2 ? "pb-20 bg-[#181818]" : "pb-20"} key={i}>
                                    <Container maxWidth="lg" className='pt-20'>
                                        <h1 className='text-2xl uppercase ff'>{v.p}</h1>
                                        <p className='ff text-xl mt-10 sm:mt-14'>{v.h1}</p>
                                    </Container>
                                </Grid>
                            )
                        })
                    }


                </Grid>
            </Container>
            <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff] pt-44 pb-20'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h1 className='text-3xl uppercase ff'>Architectural design</h1>
                        <p className='ff text-xl mt-14'>We create exceptional works of architectural art that meet the highest standards for the owners and investors. We strive for excellence in every project, ensuring the result is one-of-a-kind and reflects individual preferences.</p>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>

                </Grid>
            </Container>
            <div className='w-[100%] h-[60vh] sm:h-[100vh] sticky top-0 '><video loop muted autoPlay className='w-full h-full object-cover'>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.

            </video></div>

            <div className='z-10 relative'>
                <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff] pt-14 pb-20 '>
                    <Grid container rowSpacing={8} columnSpacing={3}>
                        {
                            img2?.map((v, i) => {
                                return (

                                    <Grid key={i} item xs={12} md={6}>
                                       <div className='relative'>
                                        <img src={v.url} className='w-full h-full object-cover' alt={v.url} />
                                        <p className="absolute left-[20px] ff" style={{
                                            transition: 'bottom 0.1s ease-out',
                                            bottom: `${scrollY > 0 ? 20 - scrollY * 0.01 : 0}px`
                                        }}>{v.p}</p>
                                    </div>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                    <div className='text-center mt-24'>
                        <a href='#' className='ff underline'>GO TO PROJECTS</a></div>
                </Container>
                <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff] pt-24 pb-20'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <h1 className='text-3xl uppercase ff'>Interior design</h1>
                            <p className='ff text-xl mt-14'>At Studia 54, we do not just design interiors; we shape new realities. Our projects are intended to inspire and leave an unforgettable impression, highlighting the distinctiveness of each owner. Our designs resonate with people, providing a sense of comfort and tranquility.</p>
                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>

                    </Grid>
                </Container>
                <div className='w-[100%] h-[60vh] sm:h-[100vh] sticky top-0'><video loop muted autoPlay className='w-full h-full object-cover'>
                    <source src={video3} type="video/mp4" />
                    Your browser does not support the video tag.

                </video></div>
                <div className='relative z-10'>   <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff] pt-14 pb-20'>
                    <Grid container rowSpacing={8} columnSpacing={3}>
                        {
                            img3?.map((v, i) => {
                                return (

                                    <Grid key={i} item xs={12} md={6}>
                                       <div className='relative'>
                                        <img src={v.url} className='w-full h-full object-cover' alt={v.url} />
                                        <p className="absolute left-[20px] ff" style={{
                                            transition: 'bottom 0.1s ease-out',
                                            bottom: `${scrollY > 0 ? 20 - scrollY * 0.01 : 0}px`
                                        }}>{v.p}</p>
                                    </div>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                    <div className='text-center mt-24'>
                        <a href='#' className='ff underline'>GO TO PROJECTS</a></div>
                </Container>
                    <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff] pt-16 sm:pt-24 pb-16 sm:pb-24'>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <h1 className='text-2xl uppercase ff'>Our projects around the world</h1>

                            </Grid>
                            <Grid item xs={12} md={6}>

                            </Grid>

                        </Grid>
                    </Container>

                    <Container maxWidth={false} className='bg-[#1f1f1f] text-[#ffffff] pt-16 sm:pt-24 pb-20'>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8} className='flex items-end'>
                                <h1 className='text-3xl uppercase ff w-[100%] sm:w-[85%] '>We are architects, designers, creative visionaries, and bold innovators, shaping a bright future</h1>

                            </Grid>
                            <Grid item xs={12} md={4}>

                                <p className='ff text-xl '>Bringing our owners’ dreams to life is the cornerstone of Studia 54's philosophy. We passionately believe that your happiness and satisfaction are the ultimate goals of our work. Our team is dedicated to realizing your ideals, which are woven into every project we undertake.</p>
                            </Grid>

                        </Grid>
                    </Container>
                    <div className='bg-[#1f1f1f] text-[#ffffff] pb-20'>
                        <Container maxWidth="lg">  <img src={team} alt='team' className='w-full h-full' />
                            <div className='text-center mt-14'>
                                <a href='#' className='ff underline'>MORE ABOUT US</a></div>
                        </Container>

                        <Form />
                    </div>



                    <Footer />
                    <WhatsappBtn /></div>

            </div>

        </div>
    )
}

export default Home