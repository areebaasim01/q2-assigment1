import Image from "next/image";
import Link from 'next/link';


const notfound = () => {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <a>Go back to Home</a>
        </Link>
      </div>
    );
  };
  
  export default notfound;
