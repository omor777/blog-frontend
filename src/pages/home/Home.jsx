/* eslint-disable react-hooks/exhaustive-deps */
import { Link, Stack } from "@mui/material";
import BlogCard from "./components/BlogCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetPostsQuery } from "../../feature/posts/postsApiSlice";

import { Link as RouterLink } from "react-router-dom";

// TODO: will implement scroll with data load

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLike, setIsLike] = useState(false);

  const { data, isLoading, refetch } = useGetPostsQuery(page);

  // console.log(page);

  // console.log(isLike);
  //   useEffect(() => {
  //     console.log('hello');
  //     fetchBlogs();
  //   }, [isLike]);

  //   console.log(blogs);

  //   const fetchBlogs = async () => {
  //     try {
  //       const res = await fetch(`http://localhost:8000/api/posts`);
  //       const data = await res.json();

  //       setBlogs((prev) => [...prev, ...data.data]);
  //       setHasMore(data.hasMore);

  //       setPage((prev) => prev + 1);
  //     } catch (error) {
  //       console.error("Error fetching blogs", error);
  //     }
  //   };

  // const handleScroll = () => {
  //   // console.log("Scroll");
  //   console.log(window.innerHeight, "window innerHeight");
  //   console.log(document.documentElement.scrollTop, "scroll top");
  //   console.log(document.documentElement.offsetHeight, "offset height");
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //   ) {
  //     setPage((prev) => prev + 1);
  //     return;
  //   }
  //   console.log('object');
  // };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <InfiniteScroll
      dataLength={data?.data?.length}
      next={refetch}
      hasMore={data?.hasMore}
      loader={<h2>Loading...</h2>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Stack spacing={3}>
        {data?.data?.map((post) => (
          <Link
            key={post._id}
            underline="none"
            component={RouterLink}
            to={`/post/${post._id}`}
          >
            <BlogCard post={post} setIsLike={setIsLike} />
          </Link>
        ))}
      </Stack>
    </InfiniteScroll>
  );
};

export default Home;
