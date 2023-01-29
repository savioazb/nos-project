import { GetStaticPaths, GetStaticProps } from "next";
import { GraphQLClient, gql } from "graphql-request";

//type PageProps = InferGetStaticPropsType<typeof getStaticProps>
import { Noticia, Noticias } from "..";

export interface NoticiaProps {
  noticia: Noticia;
}

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clas4yzfh7wpt01t7c71vcs7p/master"
);

const QUERY = gql`
  query Noticia($slug: String!) {
    noticia(where: { slug: $slug }) {
      id
      titulo
      slug
      dataPublicacao
      conteudo {
        text
      }
      imagemFundo {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    noticias {
      slug
    }
  }
`;

export default function Artigo({ noticia }: NoticiaProps) {
  return (
    <main>
      <div className="bg-black w-100 h-24"></div>
      <article className="bg-cyan flex justify-center p-2">
        <h3 className="text-3xl font-light uppercase text-white">Notícias</h3>
      </article>
      <article className="bg-gray flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-4xl text-white mb-8">{noticia.titulo}</h1>
        <h3 className="text-white">Subtítulo</h3>
      </article>
      <section className="">
        <article className="max-w-6xl m-auto shadow-lg p-4 mt-4 mb-4">
          <div
            className="bg-cover bg-center h-[50vh] mb-10"
            style={{ backgroundImage: `url(${noticia.imagemFundo.url})` }}
          ></div>
          <p className="font-light">{noticia.conteudo.text}</p>
        </article>
      </section>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { noticias }: Noticias = await graphcms.request(SLUGLIST);

  return {
    paths: noticias.map((noticia) => ({ params: { slug: noticia.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const data = await graphcms.request(QUERY, { slug });
  const noticia = data.noticia;

  return {
    props: {
      noticia,
    },
  };
};
