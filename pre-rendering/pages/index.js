import path from "path";
// file system module from node. does'nt work on the client side
import fs from "fs/promises";

export default function Home({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - {product.description}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // constructing the path using path module from node
  // cwd - current working directory
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  //using fs to get access into the dummy file
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // data never reaches the client, only executed when next.js pre-renders the page
  return {
    props: {
      products: data.product,
    },
  };
}

// static generation confirms that the page should be pre-generated.
// pages are prepared ahead to time and can be cached by the server/ CDN serving the app
