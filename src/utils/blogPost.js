const addUserInfoToEachBlogPost = (allBlogPosts, userDetails) => {
  const posts = allBlogPosts?.map((post) => {
    return {
      ...post,
      userInfo: {
        name: userDetails?.name,
        image: userDetails?.image,
        createdAt: userDetails?.createdAt,
      },
    };
  });

  return posts;
};

export default addUserInfoToEachBlogPost;
