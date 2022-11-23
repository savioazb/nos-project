import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";

import Link from 'next/link';

import { Noticias } from '../pages';

export function NewsSlider({noticias}: Noticias) {

    return(
        <Swiper
            modules={[Pagination]}
            slidesPerView={5}
            spaceBetween={10}
        >
        {
            noticias.map((noticia)=>(
                <SwiperSlide
                    key={noticia.id}
                >
                    <Link href={`/noticias/${noticia.slug}`}>
                        <div className='border-2 p-2'>
                            <img className='object-cover' src={noticia.imagemFundo.url} alt="" />
                            <h2>{noticia.titulo}</h2>
                        </div>
                    </Link>
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    )
}