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
                        setOpacity(0); // �X���C�h���؂�ւ�����瓧���x��0�ɂ���
                    },
                    slideChangeTransitionEnd: () => {
                        setOpacity(1); // �X���C�h�̐؂�ւ������������瓧���x��1�ɖ߂�
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






