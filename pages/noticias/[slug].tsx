import { GetStaticPaths, GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'

//type PageProps = InferGetStaticPropsType<typeof getStaticProps>
import { Noticia, Noticias } from '..'

  export interface NoticiaProps {
    noticia: Noticia
  }

const graphcms = new GraphQLClient('https://api-sa-east-1.hygraph.com/v2/clas4yzfh7wpt01t7c71vcs7p/master')

const QUERY = gql`
  query Noticia($slug: String!){
    noticia(where: {slug: $slug}){
        id
        titulo
        slug
        dataPublicacao
        conteudo{
            html
        }
        imagemFundo{
            url
        }
    }
  }
`

const SLUGLIST = gql`
{
    noticias {
        slug
    }
}
`


export default function Artigo({noticia}:NoticiaProps) {
  return (
    <h1 className='text-xl'>{noticia.titulo}</h1>  
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const {noticias}:Noticias = await graphcms.request(SLUGLIST);    

    return {
        paths: noticias.map((noticia) => ({params: {slug: noticia.slug}})),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {
    
    const slug = params?.slug
    const data = await graphcms.request(QUERY, {slug})
    const noticia = data.noticia
  
    return {
      props: {
        noticia,
      },
    }
}





