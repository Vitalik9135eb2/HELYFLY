import s from './_location.module.scss';
import './slider.css';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {Pagination,Navigation} from 'swiper/core';

import One from './../../../assets/img/location/1.svg';
import Two from './../../../assets/img/location/2.svg';
import Three from './../../../assets/img/location/3.svg';
import photo from './../../../assets/img/about/mari.png';

SwiperCore.use([Pagination,Navigation]);


function Location() {
    return (

        <div className={s.locationSlider}>

          <div className={s.container}>

            <div className={s.inner}>

              <div className={s.sliderWrap}>

              <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{"clickable": true}}
                navigation={true} className="mySwiper">

                <SwiperSlide>
                  <div className={s.sliderItems}>

                    <img className={s.sliderImg} src={One}/>

                    <div className={s.spanWrap}>
                      <span className={s.sliderText}>Где встречаемся?</span>
                      <span className={s.sliderSpan}>Москва</span>
                    </div>

                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={s.sliderItems}>

                    <img className={s.sliderImg} src={Two}/>

                    <div className={s.spanWrap}>
                      <span className={s.sliderText}>Время съемки</span>
                      <span className={s.sliderSpan}>3 часа</span>
                    </div>

                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={s.sliderItems}>

                    <img className={s.sliderImg} src={Three}/>

                    <div className={s.spanWrap}>
                      <span className={s.sliderText}>Мест осталось:</span>
                      <span className={s.sliderSpan}>2 места</span>
                    </div>

                

                  </div>
                </SwiperSlide>
            
            
              </Swiper>

              </div>

              <div className={s.content}>
                  <img className={s.photo} src={photo}/>

                  <div className={s.infoWrap}>

                    <span className={s.name}>Мария Иванова</span>
                    <span className={s.profession}>Фотограф</span>
                    <a href="#" className={s.info}>Показать больше информации о фотографе</a>

                  </div>
              </div>

            </div>


          </div>
          
        </div>

   
     );
  }

export default Location;