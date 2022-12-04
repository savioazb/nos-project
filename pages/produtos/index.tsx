import { GraphQLClient, gql } from "graphql-request"
import { GetStaticProps } from "next"
import Link from "next/link"

export interface Produto {
    id: string
    produtoTitulo: string,
    produtoSlug: string,
    produtoDescricao: string
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
    produtos: Produto[],
    categoria: Categoria
}

export interface Categoria {
    id: string,
    categoriaTitulo: string,
    categoriaSlug: string,
    subCategorias: SubCategoria[]
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
    }
}
`

export default function Categorias({categorias}: Categorias){
    return(
        <main className='pt-[18rem] pb-[12.5rem] pl-3 pr-3 bg-cover bg-center'>
            {categorias.map(categoria => (
                <Link key={categoria.id} href={`produtos/${categoria.categoriaSlug}`}>
                    <h1>{categoria.categoriaTitulo}</h1>
                </Link>
            ))}
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    
    const {categorias} = await graphcms.request(QUERY)

    return{
        props:{
            categorias,
        }
    }
}
