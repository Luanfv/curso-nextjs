import { GetStaticProps } from 'next';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface ITop10Props {
  products: IProduct[];
}

export default function Top10({ products }: ITop10Props) {
  return (
    <div>
      <section>
        <Title>
          Products - TOP 10
        </Title>

        <ul>
          {
            products.map(recommendedProduct => (
              <li key={recommendedProduct.id}>
                { recommendedProduct.title }
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

// STATIC SITE GENERATION
export const getStaticProps: GetStaticProps<ITop10Props> = async (context) => {
  const response = await fetch('http://localhost:3333/products');
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 5, // TEMPO QUE O NEXT VAI LEVAR PARA REFAZER ESSA PAGINA DE NOVO
  };
}
