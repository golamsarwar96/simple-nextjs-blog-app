"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setBlog(data);
    };
    fetchBlog();
  }, [id]);
  console.log(id);
  return (
    <div className="text-center mt-20">
      <div>{blog.title}</div>
      <div>{blog.body}</div>
    </div>
  );
};

export default BlogDetails;
