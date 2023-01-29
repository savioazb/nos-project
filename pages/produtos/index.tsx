import { GraphQLClient, gql } from "graphql-request"
import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"

export interface Produto {
    id: string
    produtoTitulo: string,
    produtoSlug: string,
    produtoDescricao: string
    imagemFundo: {
      url: string
    },
    logo: {
      url: string
    }
    categoria: Categoria
    subCategoria: SubCategoria

}

export interface Produtos {
    produtos: Produto[]
}

export interface SubCategoria {
    id: string
    subCategoriaSlug: string,
    subCategoriaTitulo: string
    imagemFundo: {
      url: string
    },
    logo: {
      url: string
    }
    produtos: Produto[],
    categoria: Categoria
}

export interface Categoria {
    id: string,
    categoriaTitulo: string,
    categoriaSlug: string,
    subCategorias: SubCategoria[],
    imagemFundo: {
        url: string
    }
}

export interface Categorias {
    categorias: Categoria[]
}

export interface SubCategorias {
    subCategorias: SubCategoria[]
}

const graphcms = new GraphQLClient('https://api-sa-east-1.hygraph.com/v2/clas4yzfh7wpt01t7c71vcs7p/master')

const QUERY = gql`
{
    categorias {
        id
        categoriaSlug
        categoriaTitulo
        subCategorias{
            subCategoriaSlug
            subCategoriaTitulo
        }
        imagemFundo {
            url
        }
    }
}
`

export default function Categorias({categorias}: Categorias){
    return (
      <main className="min-h-screen">
        <div className="bg-black w-100 h-24"></div>
        <section className="flex flex-wrap items-center max-w-6xl m-auto">
          {categorias.map((categoria) => (
            <Link href={`produtos/${categoria.categoriaSlug}`} key={categoria.id}>
              <div className="m-4 w-fit rounded-xl overflow-hidden slide-border">
                <div className="">
                  <Image
                    className="object-cover"
                    src={categoria.imagemFundo.url}
                    alt=""
                    width={200}
                    height={400}
                  />
                </div>
                <div className="px-3 py-4 bg-cyan text-end">
                  <h2 className="text-lg font-extralight text-white">{categoria.categoriaTitulo}</h2>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    
    const {categorias} = await graphcms.request(QUERY)
    console.log(categorias);
    

    return{
        props:{
            categorias,
        }
    }
}
