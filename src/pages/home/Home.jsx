/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/material";
import BlogCard from "./components/BlogCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/posts?page=${page}`);
      const data = await res.json();

      setBlogs((prev) => [...prev, ...data.data]);
      setHasMore(data.hasMore);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  return (
    <Stack spacing={3}>
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchBlogs}
        hasMore={hasMore}
        loader={<h2>Loading...</h2>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs?.map((post, index) => (
          <BlogCard key={index} post={post} /> // Use a unique key instead of index
        ))}
      </InfiniteScroll>
    </Stack>
  );
};

export default Home;
