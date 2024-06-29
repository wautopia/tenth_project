import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Visual01 from '../Media/m_visual01.jpg';
import Visual02 from '../Media/m_visual02.jpg';

function VisualSlider() {
    return (
        <div className="VisualSlider" style={{ width: "1506px" }}>
            <Swiper
                speed={1300}
                spaceBetween={30}
                effect='fade'
                fadeEffect={{crossFade: true}}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                modules={[EffectFade, Autoplay]}
                className="Swiper"
            >
                <SwiperSlide>
                    <div className="test" style={{ transition: "opacity .5s ease"}}>
                        <img src={Visual01} className="VisualImg" alt="" width="1506px" height="2103px" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test" style={{ transition: "opacity .5s ease" }}>
                        <img src={Visual02} className="VisualImg" alt="" width="1506px" height="2103px" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default VisualSlider;




