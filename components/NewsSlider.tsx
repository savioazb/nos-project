import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";

import { PostsData } from '../pages';
import Link from 'next/link';

export function NewsSlider({posts}: PostsData) {

    return(
        <Swiper
            modules={[Pagination]}
            slidesPerView={5}
            spaceBetween={10}
        >
        {
            posts.map((post)=>(
                <SwiperSlide
                    key={post.id}
                >
                    <Link href={`/noticias/${post.slug}`}>
                        <div className='border-2 p-2'>
                            <img className='object-cover' src={post.imagemFundo.url} alt="" />
                            <h2>{post.titulo}</h2>
                        </div>
                    </Link>
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    )
}