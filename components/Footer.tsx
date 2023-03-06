import Link from "next/link";

export function Footer() {
    return(
        <footer className="main-footer p-10 bg-[#993333]">
            <section className="flex flex-col md:flex-row justify-between gap-5">
                <img className="w-40" src="/images/logo-footer.svg" alt="" />
                <div className="flex flex-row gap-3">
                   <a href="https://www.google.com"><img className="w-7 md:w-7 md:h-7" src="/images/instagram.png" alt="instagram" /></a>
                    <img className="w-7 md:w-7 md:h-7" src="/images/linkedin.png" alt="linkedin" />
                    <img className="w-7 md:w-7 md:h-7" src="/images/youtube.png" alt="youtube" />
                </div>
            </section>

            <section className="p-20 flex justify-center flex-col md:flex-row gap-20 md:gap-40">
                <article className="block relative border-l-2 border-white">
                    <h3 className="absolute top-[58px] left-[-10px] origin-[0_100%] rotate-[-90deg] text-white text-xl uppercase font-bold">Empresa</h3>
                    <ul className="ml-3">
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Sobre Nós</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Fornecedores</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Distribuidores</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>NOS Estética</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Contate-nos</h4></Link>
                        </li>
                    </ul>
                </article>

                <article className="block relative border-l-2 border-white">
                    <h3 className="absolute top-[71px] left-[-10px] origin-[0_100%] rotate-[-90deg] text-white text-xl uppercase font-bold">Produtos</h3>
                    <ul className="ml-3">
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="/produtos/neurocirurgia"><h4>Neurocirugia</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Coluna</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Ortopedia</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Trauma</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Biomateriais</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Acessórios</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Equipamentos</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Instrumentais Cirúrgicos</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Cimento Para Coluna</h4></Link>
                        </li>
                    </ul>
                </article>

                <article className="block relative border-l-2 border-white">
                    <h3 className="absolute top-[63px] left-[-10px] origin-[0_100%] rotate-[-90deg] text-white text-xl uppercase font-bold">Serviços</h3>
                    <ul className="ml-3">
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>NOS Instruments</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Manutenção Instrumental</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Gravação a Laser</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Consultoria Análise Instrumental</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Treinamento Teste Função Instrumental</h4></Link>
                        </li>
                        <li className="mb-3 text-white text-xl font-extralight">
                            <Link href="#"><h4>Gerenciamento de Cores</h4></Link>
                        </li>
                    </ul>
                </article>
            </section>

            <section className="text-center">
                <small className="text-white">&copy; 2023 Grupo NOS</small>
            </section>
        </footer>
    )
}