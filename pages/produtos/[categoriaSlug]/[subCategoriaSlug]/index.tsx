import { GraphQLClient, gql } from 'graphql-request'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { SubCategoria, SubCategorias } from '../..'
import Image from 'next/image'

export interface SubCategoriaProps {
    subCategoria: SubCategoria
}


const graphcms = new GraphQLClient('https://api-sa-east-1.hygraph.com/v2/clas4yzfh7wpt01t7c71vcs7p/master')

const QUERY = gql`
  query ($subCategoriaSlug: String!){
    subCategoria(where: {subCategoriaSlug: $subCategoriaSlug}){
      id
      subCategoriaTitulo
      subCategoriaSlug
      categoria{
        categoriaSlug
      }
      produtos{
        id
        produtoSlug
        produtoTitulo
        produtoDescricao
        imagemFundo {
            url
        }
        logo {
            url
        }
      }
    }
  }
`

const SLUGLIST = gql`
{
    subCategorias {
        subCategoriaSlug
        categoria {
            categoriaSlug
        }
    }
}
`

export default function ProdutosLista({subCategoria}: SubCategoriaProps) {
    return (
      <main className="min-h-screen">
        <div className="bg-black w-100 h-24"></div>
        <article className="bg-cyan flex justify-center p-2">
          <h3 className="text-3xl font-light uppercase text-white">
            {subCategoria.categoria.categoriaSlug}
          </h3>
        </article>
        <section className="flex flex-col gap-4 items-center max-w-6xl m-auto mt-4 mb-4">
          {subCategoria.produtos.map((produto) => (
            <Link
              key={produto.id}
              href={{
                pathname:
                  "/produtos/[categoriaSlug]/[subCategoriaSlug]/[produtoSlug]",
                query: {
                  categoriaSlug: subCategoria.categoria.categoriaSlug,
                  subCategoriaSlug: subCategoria.subCategoriaSlug,
                  produtoSlug: produto.produtoSlug,
                },
              }}
              className="w-[100%]"
            >
              <div
                style={{
                  backgroundImage: "url('/images/subcategorias-fundo.png')",
                }}
                className="h-fit w-100 p-8 bg-cover bg-center flex flex-col md:flex-row justify-between items-center"
              >
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <Image
                    src={produto.imagemFundo.url}
                    alt=""
                    width={100}
                    height={300}
                  />
                  <div>
                    <h2 className="w-40 text-xl uppercase font-light">
                      {produto.produtoTitulo}
                    </h2>
                    <p className='w-40 text-sm'>
                        {produto.produtoDescricao}
                    </p>
                  </div>
                </div>
                <div className='h-[100%] px-32 min-h-[146px] flex flex-col justify-start items-center border-x border-gray'>
                    <h2 className='font-bold uppercase'>Características</h2>
                    <ul>
                        <li>Bom</li>
                        
                    </ul>
                </div>
                <div>
                  <Image
                    src={produto.logo.url}
                    alt=""
                    width={250}
                    height={300}
                  />
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {

    const {subCategorias}:SubCategorias = await graphcms.request(SLUGLIST)
    

    return {
        paths: subCategorias.map((subCategoria) => ({params: {categoriaSlug: subCategoria.categoria.categoriaSlug, subCategoriaSlug: subCategoria.subCategoriaSlug}})),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {
    
    const subCategoriaSlug = params?.subCategoriaSlug

    const data = await graphcms.request(QUERY, {subCategoriaSlug})
    const subCategoria = data.subCategoria
    

    return {
        props: {
            subCategoria
        }
    }
}