import { GetStaticPaths, GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import { Categoria, Categorias } from '..'
import Link from 'next/link'
import Image from 'next/image'

export interface CategoriaProps {
  categoria: Categoria
}

const graphcms = new GraphQLClient('https://api-sa-east-1.hygraph.com/v2/clas4yzfh7wpt01t7c71vcs7p/master')

const QUERY = gql`
  query ($categoriaSlug: String!){
    categoria(where: {categoriaSlug: $categoriaSlug}){
      id
      categoriaTitulo
      categoriaSlug
      subCategorias{
        id
        subCategoriaSlug
        subCategoriaTitulo
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
    categorias {
        categoriaSlug
    }
}
`


export default function SubCategorias({categoria}:CategoriaProps) {
  return (
    <main className="min-h-screen">
      <div className="bg-black w-100 h-24"></div>
      <article className="bg-cyan flex justify-center p-2">
        <h3 className="text-3xl font-light uppercase text-white">
          {categoria.categoriaTitulo}
        </h3>
      </article>
      <section className="flex flex-col gap-4 items-center max-w-6xl m-auto mt-4">
        {categoria.subCategorias.map((subCategoria) => (
          <Link
            key={subCategoria.id}
            href={`${categoria.categoriaSlug}/${subCategoria.subCategoriaSlug}`}
            className="w-[100%]"
          >
            <div
              style={{
                backgroundImage: "url('/images/subcategorias-fundo.png')",
              }}
              className="h-fit w-100 p-8 bg-cover bg-center flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Image
                  src={subCategoria.imagemFundo.url}
                  alt=""
                  width={150}
                  height={300}
                />
                <h2 className="text-2xl uppercase font-light">
                  {subCategoria.subCategoriaTitulo}
                </h2>
              </div>
              <div>
                <Image
                  src={subCategoria.logo.url}
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

    const {categorias}:Categorias = await graphcms.request(SLUGLIST);
        
    return {
        paths: categorias.map((categoria) => ({params: {categoriaSlug: categoria.categoriaSlug}})),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {
    
    const categoriaSlug = params?.categoriaSlug
    
    const data = await graphcms.request(QUERY, {categoriaSlug})
    const categoria = data.categoria
    
  
    return {
      props: {
        categoria,
      },
    }
}





