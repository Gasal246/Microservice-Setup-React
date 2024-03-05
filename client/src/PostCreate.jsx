import React, { useState } from "react";
import { postInstance } from "./api/AxiosInstance";

const PostCreate = () => {

    const [ title, setTitle ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postInstance.post('/posts/create', {
            title,
        });
        setTitle('')
    }

  return (
    <div className="w-[300px]">
      <form action="" onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Enter the post Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button type="submit" className="btn btn-primary w-full mt-3">Post This</button>
      </form>
    </div>
  );
};

export default PostCreate;
