import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import { Button, Container, Grid, TextField } from '@mui/material'
import tree from "../images/tree.jpg"
import vn from "../images/vn.jpg"
import om from "../images/om.jpg"
import water from "../images/water.jpg"
import ofa from "../images/of.jpg"
import team from "../images/team.webp"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Footer from '../components/Footer'
import WhatsappBtn from '../components/WhatsappBtn'

const Services = () => {

    const conGrid = [
        {
            tittle: "Interior design",
            des: "We design and implement interior projects from",
            img: vn
        },
        {
            tittle: "Architectural design",
            des: "We build houses from 500 m² that reflect the status and lifestyle of their owner. Our architects seamlessly integrate the house into the landscape to create an atmosphere of complete harmony with nature",
            img: om
        },
        {
            tittle: "Landscape design",
            des: "We develop landscape projects that highlight the natural beauty of the area. Our designs include spaces for relaxation and leisurely strolls, ensuring a sophisticated and aesthetically pleasing environment for countryside living",
            img: water
        },
        {
            tittle: "Premium furniture FiftyFourms",
            des: "Our premium furniture collections are produced on our own manufacturing using natural materials and exquisite rare woods",
            img: ofa
        }
    ];


    return (
        <div>
            <ResponsiveAppBar />
            <div className='bg-[#1f1f1f] text-white pt-44 pb-20'>
                <Container maxWidth="lg"><h1 className='uppercase text-6xl ff mb-20'>Services</h1>
                    <img src={tree} className='w-full h-full' alt='tree' />

                </Container>
                <Container maxWidth="lg" className='mt-20'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <p className='text-3xl  ff leading-[46px]'>Our company specializes in implementation of elite design projects, offering a full cycle of architectural and interior design in our signature style.</p>

                        </Grid>
                        <Grid item xs={12} md={5}>
                            <p className='text-2xl ff text-[#c9c9c9]'>Every solution within the project is the result of an in-depth analysis of your needs and desires, ensuring you receive a professionally designed residence that meets the highest standards of comfort.</p>
                        </Grid>

                    </Grid>
                </Container>
                <Container maxWidth="lg" className='mt-24 sm:mt-44 '>
                    {
                        conGrid.map((v, i) => {
                            return (
                                <Grid container spacing={2} key={i} className='mb-9'>
                                    <Grid item xs={12} md={6} className='bg-[#181818]' >
                                        <p className='text-4xl uppercase ff mt-14'>{v.tittle}</p>
                                        <p className='text-2xl ff text-[#c9c9c9] mt-10 w-10/12'>{v.des}
                                        </p>
                                        {i === 0 ? <p className='text-2xl ff text-[#c9c9c9]  w-10/12'>

                                            200 m², fully considering your individual preferences</p> : null}
                                        <Button sx={{ backgroundColor: "#bf7a2b", borderRadius: "0px", padding: "20px 25px 20px 25px", fontFamily: "'GT America LC', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", marginTop: "200px", marginBottom: "56px" }} variant="contained">Order the project</Button>

                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <img src={v.img} className='w-full h-full' alt='studia' />
                                    </Grid>

                                </Grid>
                            )
                        })
                    }
                </Container>
                <Container maxWidth="lg" className='mt-20'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <p className='text-4xl  ff leading-[46px] uppercase'>Take a step towards creating your home <span className='text-[#a57031]'>with Studia 54</span></p>
                            <p className='text-xl mt-4 ff text-[#c9c9c9] mb-8'>We believe that building your dream residence is an exciting journey that should leave you with the most cherished memories. Our team will ensure that every stage of your project brings you genuine joy and satisfaction</p>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Architectural design"
                                    name="radio-buttons-group"
                                    className="space-y-2"
                                >
                                    <FormControlLabel
                                        value="Architectural design"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-checked': { color: '#d38c37' },
                                                }}
                                            />
                                        }
                                        label="Architectural design"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                                fontSize: '1.25rem',
                                                fontFamily: "'GT America LC', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        value="Interior design"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-checked': { color: '#d38c37' },
                                                }}
                                            />
                                        }
                                        label="Interior design"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                                fontSize: '1.25rem',
                                                fontFamily: "'GT America LC', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        value="Full-scope design"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-checked': { color: '#d38c37' },
                                                }}
                                            />
                                        }
                                        label="Full-scope design"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                                fontSize: '1.25rem',
                                                fontFamily: "'GT America LC', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
                                            },
                                        }}
                                    />

                                </RadioGroup>
                            </FormControl><br /><br />
                            <TextField
                                id="outlined-basic"
                                placeholder="Name surname"
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#2c2c2c",
                                    width: "100%",
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#bf7a2b",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#bf7a2b",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#bf7a2b",
                                        },
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "white",
                                    },


                                    "& .MuiOutlinedInput-root input::placeholder": {
                                        color: "#a8a8a8",
                                        opacity: 1,
                                    },
                                }}
                            />     <br /><br />     <TextField
                                id="outlined-basic"
                                placeholder="Phone number"
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#2c2c2c",
                                    width: "100%",
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#bf7a2b",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#bf7a2b",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#bf7a2b",
                                        },
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "white",
                                    },


                                    "& .MuiOutlinedInput-root input::placeholder": {
                                        color: "#a8a8a8",
                                        opacity: 1,
                                    },
                                }}
                            />
                            <Button sx={{ backgroundColor: "#bf7a2b", borderRadius: "0px", padding: "25px", fontFamily: "'GT America LC', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", width: "100%", fontSize: "20px", marginTop: "20px" }} variant="contained">Send request</Button>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <img src={team} alt='team' className='w-full h-full' />
                        </Grid>

                    </Grid>
                </Container>
            </div>
            <Footer />
            <WhatsappBtn />
        </div>
    )
}

export default Services