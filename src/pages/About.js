import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import video4 from "../videos/video4.mp4"
import video5 from "../videos/video5.mp4"
import video6 from "../videos/video6.mp4"
import video7 from "../videos/video7.mp4"
import video8 from "../videos/video8.mp4"
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'
import team from "../images/team.webp"
import stu from "../images/stu.png"
import sofa from "../images/sofa.png"
import so from "../images/so.png"
import net from "../images/net.png"
import dark from "../images/dark.png"
import Form from '../components/Form'
import Footer from '../components/Footer'
import WhatsappBtn from '../components/WhatsappBtn'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const About = () => {

  const conGrid = [
    {
      video: video5,
      img: stu,
      tittle: "Unique design code",
      des: "We believe that outstanding design is a blend of philosophy, art, and geometry, visible in every detail of a space. It’s built on a profound understanding of the harmony between textures and materials, shapes and colors. In the hands of a skilled artisan, each element gains its own unique significance."
    },
    {
      video: video6,
      img: sofa,
      tittle: "Attention to detail",
      des: "Home truly comes alive with its residents. It’s imbued with an energy that shines through even the smallest decor elements, reflecting the owner's personality. We carefully consider every detail of the space in advance. When owners enter our interiors, they don’t just feel comfortable; they know they are home."
    },
    {
      video: video7,
      img: net,
      tittle: "Our signature style",
      des: "Our architectural style reimagines brutalism, turning monumental homes into true extensions of their owners' personalities. Each project combines strength and elegance, crafting spaces that mirror the distinctive character and sophisticated taste of their residents.",
      des2: "Our homes are more than just structures; they are expressions of power, style, and individuality, seamlessly woven into the fabric of the modern world."
    },
    {
      video: video8,
      img: so,
      tittle: "Person-centered design",
      des: "We believe a truly successful project should reflect the wishes of its future owners. That's why we've created a comprehensive system to provide meticulous support at every stage. With cutting-edge engagement technologies and a dedicated personal manager, you'll have reliable partners ensuring a seamless and memorable experience."
    }
  ];

  const slides = [
    {
      description: "Founded Studia 54 Started with a team of 4 members",
      title: "2016",

    },
    {
      description: "Developed our unique design language",
      title: "2017",

    },
    {
      description: "Completed our first international project in Morocco",
      title: "2018",

    },
    {
      description: "Established our signature architectural style",
      title: "2019",

    },
    {
      description: "Designed a furniture line for an Italian manufacturer",
      title: "2020",

    },
    {
      description: "Launched our own furniture production facility",
      title: "2021",

    },
    {
      description: "Introduced our furniture brand, FiftyFourms",
      title: "2023",

    },
    {
      description: "Achieved over 500 international projects Grew to a team of over 200 professionals",
      title: "2024",

    }
  ];

  return (
    <div>
      <ResponsiveAppBar />
      <div className='w-[100%] h-[60vh] sm:h-[100vh] relative'><video loop muted autoPlay className='w-full h-full object-cover'>
        <source src={video4} type="video/mp4" />
        Your browser does not support the video tag.

      </video>
        <h1 className='text-white text-5xl absolute bottom-[30px] left-[30px] ff'>ABOUT US</h1></div>
      <div className='bg-[#1f1f1f] text-white pt-20 pb-20'>

        <Container maxWidth="lg" className='bg-[#181818] pt-20 pb-20'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <p className='text-4xl uppercase ff leading-[53px]'> <span className='text-[#d38c37]'>Our mission</span> is to ensure you have an outstanding experience, from the initial design to the unmatched satisfaction of living in your new home.</p>
            </Grid>
            <Grid item xs={12} md={5}>
              <p className='ff text-2xl'>We know that creating a home is both a challenging and thrilling adventure. We're dedicated to being your trusted guide throughout this process, assisting you at every step of bringing your dream to life.</p>
            </Grid>

          </Grid>
        </Container>
        <Container maxWidth="lg" className='mb-24 sm:mb-44'>
          <img src={team} alt='team' className='w-full h-full' />
        </Container>

        <Container maxWidth="lg" className='mb-24 sm:mb-44'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <p className='text-4xl uppercase ff leading-[53px]'> Our story began in St. Petersburg in 2016, when a small team of four passionate individuals united with a vision to revolutionize the industry.</p>
            </Grid>
            <Grid item xs={12} md={5}>
              <p className='ff text-2xl'>Today, we’re not just about managing projects — we strive to inspire and reinvent spaces worldwide. With a team of over 200 professionals, we continue to tackle ambitious projects, making a significant impact on the fields of architecture and interior design.</p>
            </Grid>

          </Grid>
        </Container>
        <Container maxWidth="lg">
          <p className='uppercase text-3xl ff mb-10'>Our journey</p>

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >  <Grid container spacing={2}>
              {slides.map((slide, i) => (
                <Grid item key={i} xs={12} md={6} >
                  <SwiperSlide className={i === 1 || i === 3 || i === 5 || i === 7 ? "bg-[#181818] p-10" : "bg-[#1f1f1f] p-10"}>

                    <h3 className="text-4xl mt-60">{slide.title}</h3>
                    <p className="text-2xl ff mt-10 mb-20">{slide.description}</p>

                  </SwiperSlide>
                </Grid>

              ))}
            </Grid>

          </Swiper>

        </Container>
        <Container maxWidth="lg" className='text-7xl uppercase ff pt-44'>We bring emotions to life</Container>
        <Container maxWidth="lg" className='mt-20'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} className='flex items-center justify-center sm:justify-start'>
              <div className="flex flex-col items-center ">

                <div className="w-5 h-5 bg-[#d38c37] rounded-full">

                </div>

                <div className="w-1 h-[10vh] sm:h-[189vh]  bg-[#d38c37]"></div>

                <div className="w-5 h-5 bg-[#d38c37] rounded-full">

                </div>

                <div className="w-1 h-[10vh] sm:h-[189vh]  bg-[#d38c37]"></div>
                <div className="w-5 h-5 bg-[#d38c37] rounded-full">

                </div>

                <div className="w-1 h-[10vh] sm:h-[189vh]  bg-[#d38c37]"></div>

                <div className="w-5 h-5 bg-[#d38c37] rounded-full">

                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={10}>

              {
                conGrid.map((v, i) => {
                  return (
                    <div key={i} className='mb-20'>
                      {i === 3 ? <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <div className='h-[60%] sm:h-[100%]'> <img src={v.img} alt='studia' className='w-full h-full' /></div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <div className='w-[100%] h-[60%] sm:h-[100%]'><video loop muted autoPlay className='w-full h-full object-none sm:object-cover'>
                            <source src={v.video} type="video/mp4" />
                            Your browser does not support the video tag.

                          </video></div>
                        </Grid>


                      </Grid> : <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <div className='w-[100%] h-[60%] sm:h-[100%]'><video loop muted autoPlay className='w-full h-full object-none sm:object-cover'>
                            <source src={v.video} type="video/mp4" />
                            Your browser does not support the video tag.

                          </video></div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <div className='h-[60%] sm:h-[100%]'> <img src={v.img} alt='studia' className='w-full h-full' /></div>
                        </Grid>

                      </Grid>}
                      <p className='uppercase text-3xl ff mt-4 sm:mt-10'>{v.tittle}</p>
                      <p className='text-[22px] ff mt-8'>{v.des}</p>
                      {i === 2 ?
                        <p className='text-[22px] ff mt-2'>{v.des2}</p> : null}
                    </div>
                  )
                })
              }

            </Grid>

          </Grid>
        </Container>
        <Container maxWidth="lg" className='bg-[#181818] pt-40 mt-20'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

            </Grid>
            <Grid item xs={12} md={6}>
              <p className='uppercase text-4xl ff mb-4 sm:mb-14'>Our values</p>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <p className='text-[22px]  ff '> “We believe that the best ideas emerge from synergy with our owners, which is why we make every effort to involve you in our process and elevate our collaboration.</p>
                  <p className='text-[22px]  ff mt-4'> We are always on the lookout for the genius within people, and when we find it, we do everything we can to help it thrive. By putting our heart and soul into every creation, from furniture to architecture, we build a world that reflects our dedication to perfection.</p>
                  <p className='text-[22px]  ff mt-4'>We strive to provide equal opportunities for everyone in our company.</p>
                </Grid>
                <Grid item xs={12} md={6}>
                  <p className='ff text-[22px]'>We hold ourselves and our team to high standards, believing that discipline and self-improvement pave the way for growth.</p>
                  <p className='ff text-[22px] mt-4'>We ensure our office is always welcoming and comfortable for both our visitors and our staff.</p>
                  <p className='ff text-[22px] mt-4'>We cultivate healthy, honest, and respectful relationships not only with our owners but also within our company, because we believe that’s the foundation for creating something truly beautiful.”</p><p className='text-[#d38c37] text-[22px] ff mt-4 uppercase'>Stanislav Klyuev and Olga Ivanova<br />

                    CEOs, Studia 54</p>
                </Grid>


              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className='bg'></div>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg" className='mt-20 sm:mt-40'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <p className='text-3xl  ff uppercase'><span className='text-[#d38c37]'>Your vision</span> and our expertise – the formula for perfection</p>

            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <p className='text-2xl  ff '>At Studia 54, our philosophy is built on merging your vision with our distinctive style. We bring your ideas to life in our interior and architectural projects.</p>

                </Grid>
                <Grid item xs={12} md={6}>
                  <p className='ff text-2xl'>We understand that building a home is a journey filled with new knowledge, experiences, emotions, and creative inspiration. We are thrilled to share this journey with you, ensuring that you enjoy every step of creating your dream home.</p>

                </Grid>

              </Grid>
            </Grid>

          </Grid>
          <img src={dark} className='w-full h-full mt-5' alt='dark' />
        </Container>
        <Container maxWidth="lg" className='mt-20 sm:mt-40 mb-20 sm:mb-40'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <p className='text-4xl  ff uppercase'>The Studia 54 team</p>

            </Grid>
            <Grid item xs={12} md={6}>
              <p className='text-2xl  ff mb-6'>Creative team of experts united by a common dream. We strive to design projects that bring joy. Your emotions are our greatest inspiration.</p>
              <a className='ff underline ' href='#'>DISCOVER MORE ABOUT CAREERS AT STUDIA 54.</a>
            </Grid>

          </Grid>
        </Container>
        <Form />
      </div>

      <Footer />
      <WhatsappBtn />
    </div>
  )
}

export default About