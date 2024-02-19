import React, { useEffect, useState } from "react";
import { postInstance } from "./api/AxiosInstance";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await postInstance.get("/posts");
    setPosts(res.data);
  };
  
  useEffect(() => {
    fetchPosts()
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div key={post?.id} className="flex flex-col carousel-item h-full w-full border-2 border-slate-500 rounded-lg mb-2 relative">
      <div className="flex justify-center items-center w-full text-wrap p-5">
        {post?.title}
      </div>
      <CommentList postId={post?.id} />
      <CreateComment postId={post?.id} />
    </div>
  ));

  return (
    <div>
      <div className="h-[360px] w-[350px] carousel carousel-vertical rounded-box p-2">
        {renderedPosts}
      </div>
    </div>
  );
};

export default PostList;
