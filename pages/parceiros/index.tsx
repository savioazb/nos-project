import Image from "next/image"
import nosOffice from "../../public/images/nos-office.png"
import timeLine from "../../public/images/time-line.png"
import mapa from "../../public/images/mapa.svg"
import Link from "next/link";

export default function Parceiros() {
  return (
    <main>
      <div className="bg-black w-100 h-24"></div>
      <section className="max-w-7xl m-auto  flex flex-col justify-start gap-[100px]">
        <article className=" flex flex-row justify-between items-center mt-4">
          <Image src={mapa} alt="" width={700} />
          <p className="leading-6 w-[500px]">
            Sediada na cidade de Niterói, no Estado do Rio de Janeiro, a N.O.S.
            Brasil - Neuro Orthopaedics Surgeries está em exercício desde 2005,
            no mercado hospitalar, exercendo seu compromisso como importadora de
            produtos neurocirúrgicos e ortopédicos e, ainda, fornecedora de
            serviços para médicos e profissionais de saúde distribuídos pelo
            território nacional. Tem como objetivo promover o bem estar e
            aumentar a qualidade de vida de seus clientes, tendo como foco
            sempre a <b>inovação</b>, a <b>segurança</b> e o <b>respeito</b>.
          </p>
        </article>
        <article className="flex justify-center mb-40">
          <Image src={timeLine} alt="" width={1000} />
        </article>
      </section>
    </main>
  );
}