import React, { useState } from "react";
import { commentInstance } from "./api/AxiosInstance";

const CreateComment = ({ postId }) => {

    const [content, setContent] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        await commentInstance.post(`/posts/${postId}/comments`, {
          content,
        })
        setContent('')
    }

  return (
    <div className="w-full h-[32px] bg-transparent rounded-lg absolute bottom-[2.2px] form-control px-1">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between h-[30px]">
          <input
            type="text"
            className="input-primary bg-[#1b4b60] px-2 outline-none border-none w-full"
            placeholder="comment here.."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" className="btn btn-info !h-[30px] px-2 !min-h-0">post</button>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
