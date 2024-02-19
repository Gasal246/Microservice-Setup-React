import React, { useEffect, useState } from "react";
import { commentInstance } from "./api/AxiosInstance";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

   const fetchComments = async () => {
    const res = await commentInstance.get(`/posts/${postId}/comments`);
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // eslint-disable-next-line array-callback-return

  return (
    <div className="bg-[#3e3e3e] w-full h-[130px] overflow-y-scroll p-2 absolute bottom-9">
      <ul>
        {comments.map((comment) => (
          <li key={comment?.id} className="bg-[#112f3c] rounded-lg p-1 mb-1">
            {comment?.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
