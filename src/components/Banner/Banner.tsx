import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import './styles.scss'

import prada from '../../assets/carrousel/prada.jpg'
import emily from '../../assets/carrousel/encontrando-emily.jpg'
import sheep from '../../assets/carrousel/ovelha-detetive.gif'
import copoPrada from '../../assets/carrousel/copo-prada.jpg'
import combos from '../../assets/carrousel/combos.jpg'

export function Banner() {
  return(
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="banner"
    >
      <SwiperSlide><img src={prada} alt="Diabo Veste Prada" /></SwiperSlide>
      <SwiperSlide><img src={emily} alt="Diabo Veste Prada" /></SwiperSlide>
      <SwiperSlide><img src={sheep} alt="Diabo Veste Prada" /></SwiperSlide>
      <SwiperSlide><img src={copoPrada} alt="Diabo Veste Prada" /></SwiperSlide>
      <SwiperSlide><img src={combos} alt="Diabo Veste Prada" /></SwiperSlide>
    </Swiper>
  )
}