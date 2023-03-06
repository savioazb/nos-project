import Image from "next/image";
import step1 from '../../public/images/step-1.png'
import text1 from '../../public/images/text-1.svg'
import step2 from '../../public/images/step-2.png'
import text2 from '../../public/images/text-2.svg'
import step3 from '../../public/images/step-3.png'
import text3 from '../../public/images/text-3.svg'
import step4 from '../../public/images/step-4.png'
import text4 from '../../public/images/text-4.svg'
import step5 from '../../public/images/step-5.png'
import text5 from '../../public/images/text-5.svg'
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

export default function ManutencaoInstrumentais() {

  const [isCardOpened, setIsCardOpened] = useState(false)

  function handleSetIsCardOpened(){
    setIsCardOpened(!isCardOpened)
  }

  return (
    <main>
      <div
        className={`${
          isCardOpened
            ? "bg-cyan-light w-80 h-32 fixed top-[50%] p-4 z-10"
            : "bg-cyan-light w-8 h-32 fixed top-[50%] flex justify-center items-center z-10"
        }`}
      >
        <div className="relative">
          <button onClick={handleSetIsCardOpened} className="text-white">
            {isCardOpened ? <AiOutlineClose /> : <AiOutlineArrowRight />}
          </button>
          {isCardOpened && (
            <div className="text-white">
              <p>Tel.: +55 21 3619-3542</p>
              <p>Atendimento: seg - sex 9h às 18h</p>
              <p>E-mail: contato@nos-brasil.com.br</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-black w-100 h-24"></div>
      <section className="">
        <div
          className="bg-no-repeat bg-contain p-10"
          style={{ backgroundImage: "url(/images/manutencao-main.png)" }}
        >
          <div className="max-w-7xl m-auto">
            <div className="relative h-96">
              <div className="ml-auto mr-0 absolute right-0 top-[60%] sm:top-[50%] translate-y-[-50%]">
                <p className="max-w-lg">
                  A N.O.S possui uma estrutura moderna de Assistência Técnica
                  para equipamentos e instrumentais Misonix e AS Medizintechnik,
                  que vai desde a manutenção preventiva programada, à prestação
                  de serviços para eventuais reparos. Nossa equipe de
                  especialistas técnicos é treinada e capacitada, e utiliza os
                  mais sofisticados instrumentos de medição, que asseguram um
                  serviço de excelência.
                </p>
              </div>
            </div>

            <ul className="flex flex-col justify-center items-center gap-10 md:gap-0">
              <li className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div>
                  <Image src={text1} height={80} alt="" />
                  <p className="max-w-md ml-0 md:ml-4 mt-4">
                    Ações programadas com o objetivo de reduzir desgastes ou
                    impedir falhas no funcionamento, assim como reparos que
                    devolvam o desempenho dos instrumentais e demais
                    equipamentos.
                  </p>
                </div>
                <Image src={step1} height={300} alt="" />
              </li>

              <li className="flex flex-col-reverse md:flex-row justify-center items-center gap-5">
                <Image src={step2} height={300} alt="" />
                <div>
                  <Image src={text2} height={80} alt="" />
                  <p className="max-w-md ml-0 md:ml-4 mt-4">
                    Ações programadas com o objetivo de reduzir desgastes ou
                    impedir falhas no funcionamento, assim como reparos que
                    devolvam o desempenho dos instrumentais e demais
                    equipamentos.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div>
                  <Image src={text3} height={80} alt="" />
                  <p className="max-w-md ml-0 md:ml-4 mt-4">
                    Ações programadas com o objetivo de reduzir desgastes ou
                    impedir falhas no funcionamento, assim como reparos que
                    devolvam o desempenho dos instrumentais e demais
                    equipamentos.
                  </p>
                </div>
                <Image src={step3} height={300} alt="" />
              </li>
              <li className="flex flex-col-reverse md:flex-row justify-center items-center gap-5">
                <Image src={step4} height={300} alt="" />
                <div>
                  <Image src={text4} height={80} alt="" />
                  <p className="max-w-md ml-0 md:ml-4 mt-4">
                    Ações programadas com o objetivo de reduzir desgastes ou
                    impedir falhas no funcionamento, assim como reparos que
                    devolvam o desempenho dos instrumentais e demais
                    equipamentos.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div>
                  <Image src={text5} height={80} alt="" />
                  <p className="max-w-md ml-0 md:ml-4 mt-4">
                    Ações programadas com o objetivo de reduzir desgastes ou
                    impedir falhas no funcionamento, assim como reparos que
                    devolvam o desempenho dos instrumentais e demais
                    equipamentos.
                  </p>
                </div>
                <Image src={step5} height={300} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}