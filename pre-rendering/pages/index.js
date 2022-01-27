// file system module from node. does'nt work on the client side
import fs from "fs/promises";
import Link from "next/link";
import path from "path";

export default function Home({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/product/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("(RE-)Generating...");
  // constructing the path using path module from node
  // cwd - current working directory
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  //using fs to get access into the dummy file
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  // returns a 404 page if data is not found
  if (data.products.length === 0) {
    return { notFound: true };
  }

  // data never reaches the client, only executed when next.js pre-renders the page
  return {
    props: {
      products: data.products,
    },
    // Re-generate data on every request, at most every X seconds
    revalidate: 10,
  };
}

// STATIC GENERATION
// the pre-rendering method that generates the html at build time.
// static generation confirms that the page should be pre-generated with data prepared on the server side
// pages are prepared ahead to time and can be cached by the server/ CDN serving the app
// the pre-rendered HTML id then re-used on each request

// INCREMENTAL STATIC REGENERATION
// Pre-generated page
// Re-generate it on every request, at most every X seconds
// - Serve old page if regeneration is not needed yet
// - Generate, store and serve new page otherwise
