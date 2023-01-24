import { GraphQLClient, gql } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect } from "react"
import { Produto, Produtos } from "../../.."


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
        <main className='pt-[18rem] pb-[12.5rem] pl-3 pr-3 bg-cover bg-center'>
            <h1 className='text-xl'>{produto.produtoTitulo}</h1>
        </main> 
    )
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

    return {
        props:{
            produto
        }
    }
}