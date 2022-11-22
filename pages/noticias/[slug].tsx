import { GetStaticPropsContext, InferGetStaticPropsType, GetStaticPaths } from 'next'
import { GraphQLClient, gql } from 'graphql-request'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

interface Post {
    slug: string
}

interface SlugData{
    posts: Post[]
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
export async function getStaticPaths() {
    const data = await graphcms.request(SLUGLIST)
    const posts = data.noticias
    console.log(posts[0]);
    

    return {
        paths: posts.map((post:Post) => ({params: {slug: post.slug}})),
        fallback: false
    }    
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const slug = params!.slug
    console.log(slug);
    
    const data = await graphcms.request(QUERY, {slug})
    console.log(data);
    
    const post = data.noticia
    console.log(post);
    
  
    return {
      props: {
        post,
      },
    }
}

export default function Noticia({post}:PageProps) {

  return (
    <h1>{post.titulo}</h1>  
  )
}




