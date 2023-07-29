import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Certificate from '../../img/musicapp.png'
import './Certificates.css'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../../Context'

const Certificates = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="app_certificates">
            <div className="app_name">
                <span style={{ color: darkMode ? 'white' : '' }}>Recent Certificates</span>
                <span>Gallery</span>
            </div>
            <Swiper
                spaceBetween={-30}
                slidesPerView={3}
                grabCursor={true}
                className='certificates-slider'
            >
                <SwiperSlide className='swiper-slide'>
                    <img src={Certificate} alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={Certificate} alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={Certificate} alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={Certificate} alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={Certificate} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Certificates