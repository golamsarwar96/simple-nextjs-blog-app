import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold mt-5 text-center">
        Read Our Latest Blogs
      </h1>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data.slice(0, 9).map((blog) => (
          <Link
            href={`blog/${blog.id}`}
            key="blog?.id"
            className="p-7 w-1/2 mx-auto bg-gray-500 text-white rounded-xl"
          >
            <h1>{blog.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
