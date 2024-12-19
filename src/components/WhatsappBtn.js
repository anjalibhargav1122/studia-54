import React from 'react'
import whatsapp from "../images/whatsapp.webp"

const WhatsappBtn = () => {
    return (
        <div>  <div className='w-[30%] sm:w-[8%] fixed bottom-[20px] right-[18px] z-50'>
            <img src={whatsapp} alt='whatsapp logo' className='w-full h-full' /></div>
        </div>
    )
}

export default WhatsappBtn