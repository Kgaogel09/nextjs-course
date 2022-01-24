import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          {/* sends a brand new request and gets a new html page */}
          {/* <a href="/portfolio">Portfolio</a> */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
