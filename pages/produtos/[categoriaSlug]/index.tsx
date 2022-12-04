import { GetStaticPaths, GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import { Categoria, Categorias } from '..'
import Link from 'next/link'

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
    <main className='pt-[18rem] pb-[12.5rem] pl-3 pr-3 bg-cover bg-center'>
      <h1 className='text-xl'>{categoria.categoriaTitulo}</h1>
      {categoria.subCategorias.map(subCategoria => (
        <Link key={subCategoria.id} href={`${categoria.categoriaSlug}/${subCategoria.subCategoriaSlug}`}>
          <h2>{subCategoria.subCategoriaTitulo}</h2>
        </Link>
      ))}
    </main>  
  )
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





