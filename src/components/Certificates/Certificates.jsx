import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Certificates.css'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { data } from '../../constants'

const Certificates = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="app_certificates" id='Certificates'>
            <div className="app_name">
                <span style={{ color: darkMode ? 'white' : '' }}>Recent Certificates</span>
                <span>Gallery</span>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='certificates-slider'
            >
                {data.certificates.map((certificate, index) => (
                    <SwiperSlide key={index} className='swiper-slide'>
                        <img src={certificate.image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Certificates