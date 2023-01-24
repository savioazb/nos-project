// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export function MainSlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect={"fade"}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className="pt-[18rem] pb-[12.5rem] pl-3 pr-3 h-[100vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/nossa-missao.png')" }}
          >
            <section className="max-w-[680px] ml-1 md:ml-40 flex flex-col">
              <div className="relative">
                <h2
                  className={`${
                    isActive
                      ? "text-white text-[2rem] md:text-[3rem] font-extralight uppercase ml-[2rem] mb-[10px] leading-[1.1]  animation-delay-fadeInLeft"
                      : "text-white text-[2rem] md:text-[3rem] font-extralight uppercase ml-[2rem] mb-[10px] leading-[1.1]"
                  }`}
                >
                  O bem-estar humano <br /> é nossa missão
                </h2>
                <img
                  className={`${
                    isActive
                      ? "absolute top-0 h-[8.5rem] animation-fadeInLeft "
                      : "absolute top-0 h-[8.5rem]"
                  }`}
                  src="/images/slide-content-border.png"
                  alt=""
                />
              </div>

              <p
                className={`${
                  isActive
                    ? "text-white text-[1.2rem] font-normal italic mt-[2rem] animation-delay-fadeInTop"
                    : "text-white text-[1.2rem] font-normal italic mt-[2rem]"
                }`}
              >
                Estamos comprometidos em comercializar produtos não nocivos ao
                meio ambiente e que não ameacem a saúde e a segurança de
                clientes e usuários.
              </p>
            </section>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div
            className="pt-[18rem] pb-[12.5rem] pl-3 pr-3 h-[100vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/nossa-qualidade.png')" }}
          >
            <section className="max-w-[680px] ml-1 md:ml-40 flex flex-col">
              <div className="relative">
                <h2
                  className={`${
                    isActive
                      ? "text-white text-[2rem] md:text-[3rem] font-extralight uppercase ml-[2rem] mb-[10px] leading-[1.1] animation-delay-fadeInLeft"
                      : "text-white text-[2rem] md:text-[3rem] font-extralight uppercase ml-[2rem] mb-[10px] leading-[1.1]"
                  }`}
                >
                  Qualidade & <br /> Inovação
                </h2>
                <img
                  className={`${
                    isActive
                      ? "absolute top-0 h-[8.5rem] animation-fadeInLeft "
                      : "absolute top-0 h-[8.5rem]"
                  }`}
                  src="/images/slide-content-border.png"
                  alt=""
                />
              </div>
              <p
                className={`${
                  isActive
                    ? "text-white text-[1.2rem] font-normal italic mt-[2rem] animation-delay-fadeInTop"
                    : "text-white text-[1.2rem] font-normal italic mt-[2rem]"
                }`}
              >
                Com as necessidades dos nossos clientes como guia, buscamos
                novas tecnologias com qualidade, segurança e eficácia.
              </p>
            </section>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div
            className="pt-[18rem] pb-[12.5rem] pl-3 pr-3 h-[100vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/nosso-respeito.png')" }}
          >
            <section className="max-w-[680px] ml-1 md:ml-40 flex flex-col">
              <div className="relative">
                <h2
                  className={`${
                    isActive
                      ? "text-white text-[2rem] md:text-[3rem] font-extralight uppercase ml-[2rem] mb-[10px] leading-[1.1] animation-delay-fadeInLeft"
                      : "text-white text-[2rem] md:text-[3rem] font-extralight uppercase ml-[2rem] mb-[10px] leading-[1.1]"
                  }`}
                >
                  Respeito <br /> & Confiança
                </h2>
                <img
                  className={`${
                    isActive
                      ? "absolute top-0 h-[8.5rem] animation-fadeInLeft "
                      : "absolute top-0 h-[8.5rem]"
                  }`}
                  src="/images/slide-content-border.png"
                  alt=""
                />
              </div>

              <p
                className={`${
                  isActive
                    ? "text-white text-[1.2rem] font-normal italic mt-[2rem] animation-delay-fadeInTop"
                    : "text-white text-[1.2rem] font-normal italic mt-[2rem]"
                }`}
              >
                Nós acreditamos que a vitalidade e a força fundamentais de nossa
                empresa residem em nosso pessoal.
              </p>
              <p
                className={`${
                  isActive
                    ? "text-white text-[1.2rem] font-normal italic mt-[2rem] animation-delay-fadeInTop"
                    : "text-white text-[1.2rem] font-normal italic mt-[2rem]"
                }`}
              >
                Estamos comprometidos em manter um bom relacionamento entre
                todos os funcionários baseado no espírito de participação.
              </p>
            </section>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}
