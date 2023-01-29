import Image from 'next/image'
import { GraphQLClient, gql } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect } from "react"
import { Produto, Produtos } from "../../.."
import video from "../../../../../public/images/video.png"


export interface ProdutoProps {
    produto: Produto
}


const graphcms = new GraphQLClient('https://api-sa-east-1.hygraph.com/v2/clas4yzfh7wpt01t7c71vcs7p/master')

const QUERY = gql`
  query ($produtoSlug: String!){
    produto(where: {produtoSlug: $produtoSlug}){
      id
      produtoTitulo
      produtoSlug
      produtoDescricao
      imagemFundo{
        url
      }
      logo {
        url
      }
      subCategoria {
        subCategoriaSlug
    }
    }
  }
`

const SLUGLIST = gql`
{
    produtos {
        produtoSlug
        categoria {
            categoriaSlug
        }
        subCategoria {
            subCategoriaSlug
        }
    }
}
`

export default function ProdutoDetalhes({produto}: ProdutoProps){
    return (
      <main className="min-h-screen">
        <div className="bg-black w-100 h-24"></div>
        <div className="bg-cyan flex justify-center p-2">
          <h3 className="text-3xl font-light uppercase text-white">
            {produto.subCategoria.subCategoriaSlug}
          </h3>
        </div>
        <div className="bg-black p-2 mb-4">
          <div className="max-w-6xl m-auto flex justify-between items-center">
            <div className="">
              <h1 className="text-3xl font-light uppercase text-white">
                {produto.produtoTitulo}
              </h1>
              <h2 className="text-white">{produto.produtoDescricao}</h2>
            </div>
            <Image src={produto.logo.url} alt="" width={200} height={300} />
          </div>
        </div>
        <section className="max-w-6xl m-auto flex justify-between items-center py-16">
          <div className="w-[500px] flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem minus corrupti laudantium nulla, laborum illo veniam
              ratione ut ipsa a exercitationem assumenda aliquam in culpa
              delectus eius reiciendis modi consequuntur.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem minus corrupti laudantium nulla, laborum illo veniam
              ratione ut ipsa a exercitationem assumenda aliquam in culpa
              delectus eius reiciendis modi consequuntur.
            </p>
            <button className="block w-[100%] bg-cyan-light p-4 text-white uppercase text-xl">
              Folheto PDF
            </button>
            <button className="block w-[100%] bg-cyan-light p-4 text-white uppercase text-xl">
              Fazer pedido (OPME)
            </button>
          </div>
          <div>
            <Image
              src={produto.imagemFundo.url}
              alt=""
              width={400}
              height={300}
            />
          </div>
        </section>
        <section className="py-16 bg-gray">
          <div className="max-w-6xl m-auto flex justify-between items-center">
            <div>
              <Image
                src={produto.imagemFundo.url}
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className="w-[500px] flex flex-col gap-4">
              <h2 className="text-white">LOREM IPSUM</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem minus corrupti laudantium nulla, laborum illo veniam
                ratione ut ipsa a exercitationem assumenda aliquam in culpa
                delectus eius reiciendis modi consequuntur.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem minus corrupti laudantium nulla, laborum illo veniam
                ratione ut ipsa a exercitationem assumenda aliquam in culpa
                delectus eius reiciendis modi consequuntur.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl m-auto flex justify-between items-center">
            <div className="w-[500px] flex flex-col gap-4">
              <h2 className="">LOREM IPSUM</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem minus corrupti laudantium nulla, laborum illo veniam
                ratione ut ipsa a exercitationem assumenda aliquam in culpa
                delectus eius reiciendis modi consequuntur.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem minus corrupti laudantium nulla, laborum illo veniam
                ratione ut ipsa a exercitationem assumenda aliquam in culpa
                delectus eius reiciendis modi consequuntur.
              </p>
            </div>
            <div>
              <Image
                src={produto.imagemFundo.url}
                alt=""
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>
        <section className="py-16 bg-black">
          <div className="max-w-6xl m-auto flex justify-between items-center">
            <Image src={video} alt="" />
          </div>
        </section>
        <section></section>
      </main>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    
    const {produtos}: Produtos = await graphcms.request(SLUGLIST)
    

    return {
        paths: produtos.map((produto) => ({params: {produtoSlug: produto.produtoSlug, categoriaSlug: produto.categoria.categoriaSlug, subCategoriaSlug: produto.subCategoria.subCategoriaSlug}})),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const produtoSlug = params?.produtoSlug

    const data = await graphcms.request(QUERY, {produtoSlug})
    const produto = data.produto
    console.log(produto);
    

    return {
        props:{
            produto
        }
    }
}