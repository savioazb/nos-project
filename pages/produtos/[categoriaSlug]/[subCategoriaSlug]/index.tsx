import { GraphQLClient, gql } from 'graphql-request'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { SubCategoria, SubCategorias } from '../..'

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
        <main className='pt-[18rem] pb-[12.5rem] pl-3 pr-3 bg-cover bg-center'>
            <h1 className='text-xl'>Produtos</h1>
            {subCategoria.produtos.map(produto => (
                // <Link key={produto.id} href={`${subCategoria.categoria.categoriaSlug}/${subCategoria.subCategoriaSlug}/${produto.produtoSlug}`}>
                <Link key={produto.id} href={{
                    pathname: '/produtos/[categoriaSlug]/[subCategoriaSlug]/[produtoSlug]',
                    query: {categoriaSlug: subCategoria.categoria.categoriaSlug, subCategoriaSlug: subCategoria.subCategoriaSlug, produtoSlug: produto.produtoSlug}
                }}>
                    <h2>{produto.produtoTitulo}</h2>
                </Link>
      ))}
        </main> 
    )
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