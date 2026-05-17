import { motion } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './styles.scss'
import { Card } from '../Card'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

interface CarouselProps {
    carousel: string;
}

export function Carousel({ carousel }: CarouselProps) {
  return(
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1240px] w-full m-auto carousel"
        id={carousel.replace(' ', '-').toLowerCase()}>
        <h2 className="text-[40px] mb-[40px]">{carousel}</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          pagination={{
            clickable: true,
          }}
          className="pb-[50px]"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  )
}