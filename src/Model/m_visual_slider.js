import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Visual01 from '../Media/m_visual01.jpg';
import Visual02 from '../Media/m_visual02.jpg';
import { useState, useRef, useEffect } from 'react';


    const MySwiper = () => {
        const swiperRef = useRef(null);
        const [opacity, setOpacity] = useState(1);

        useEffect(() => {
            const swiper = new Swiper(swiperRef.current, {
                speed: 1300,
                spaceBetween: 30,

                effect: 'fade',
                fadeEffect: { crossFade: true },
                centeredSlides: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                allowTouchMove: false,
                modules: [EffectFade, Autoplay],
                on: {
                    slideChangeTransitionStart: () => {
                        setOpacity(0); // スライドが切り替わったら透明度を0にする
                    },
                    slideChangeTransitionEnd: () => {
                        setOpacity(1); // スライドの切り替えが完了したら透明度を1に戻す
                    },
                },
            });
        }, []);

        return (
            <div className="VisualSlider" ref={swiperRef}>
                <Swiper

                    className="Swiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src={Visual01} className="visual-img" style={{ transition: 'opacity .5s', opacity: opacity  }} alt="" width="1506px" height="2103px" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={Visual02} className="visual-img" style={{ transition: 'opacity .5s', opacity: opacity  }} alt="" width="1506px" height="2103px" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }



export default MySwiper;






