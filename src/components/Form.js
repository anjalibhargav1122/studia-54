import { Container, Grid, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
    return (
        <div>
            <Container maxWidth={false} className='mt-36 sm:mt-44'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h1 className='text-3xl uppercase ff w-full sm:w-10/12 mb-20'>We are always open to new connections and extraordinary projects. Contact us to discuss your ideas or proposals</h1>
                        <TextField
                            id="standard-basic"
                            label="Your name"
                            variant="standard"
                            sx={{
                                width: "82%",
                                input: { color: '#fff' },
                                label: { color: '#fff' },
                                '& .Mui-focused': {
                                    color: '#fff',
                                },
                                '& .MuiInput-underline:before': { borderBottomColor: '#6f6f6f' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                            }}
                        /> <br />  <br /><TextField
                            id="standard-basic"
                            label="Phone number"
                            variant="standard"
                            sx={{
                                width: "82%",
                                input: { color: '#fff' },
                                label: { color: '#fff' },
                                '& .Mui-focused': {
                                    color: '#fff',
                                },
                                '& .MuiInput-underline:before': { borderBottomColor: '#6f6f6f' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                            }}
                        />  <br /> <br /> <TextField
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            sx={{
                                width: "82%",
                                input: { color: '#fff' },
                                label: { color: '#fff' },
                                '& .Mui-focused': {
                                    color: '#fff',
                                },
                                '& .MuiInput-underline:before': { borderBottomColor: '#6f6f6f' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#fff' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                            }}
                        /> <br /><div className='mt-14 flex gap-7 flex-col sm:flex-row'>
                            <a href='#' className='underline decoration-[#6f6f6f] self-start sm:self-end ff'>SEND</a> <div><p className='text-[#9d9d9d]'>By clicking on the “send” button, I agree to the terms of the </p><a href='#' className='ff'>privacy policy</a> </div></div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1 className='text-3xl uppercase ff mt-[145px] mb-16'>Contacts</h1>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={6} >
                                <p className='ff'>DUBAI</p>
                                <p className='text-[#9d9d9d] mt-4 '>+97145604954</p>
                                <p className='text-[#9d9d9d] mt-3 ff'>welcome@studia-54.com</p>
                                <p className='text-[#9d9d9d] mt-4 ff'>DMCC, Dubai, UAE</p>
                                <p className='text-[#9d9d9d] ff'>(international representation)</p>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <p className='ff'>ST. PETERSBURG</p>
                                <p className='text-[#9d9d9d] mt-4 '>+79312705454</p>
                                <p className='text-[#9d9d9d] mt-3 ff'>welcome@studia-54.com</p>
                                <p className='text-[#9d9d9d] mt-4 ff'>191014, St. Petersburg,</p>
                                <p className='text-[#9d9d9d] ff'>Novgorodskaya 23A, office 340</p>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <p className='ff'>FOR COOPERATION</p>
                                <p className='text-[#9d9d9d] mt-4 ff'>partners@studia-54.com</p>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Form