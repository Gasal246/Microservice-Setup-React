
const CommentList = ({ comments }) => {

  return (
    <div className="bg-[#3e3e3e] w-full h-[130px] overflow-y-scroll p-2 absolute bottom-9">
      <ul>
        {comments?.map((comment) => {
          let content;
          switch(comment.status){
            case 'approved': content = comment.content; break;
            case 'pending': content = 'Still moderating..'; break;
            case 'rejected': content = 'Content is rejected..'; break;
            default: break;
          }
          return(
          <li key={comment.id} className="bg-[#112f3c] rounded-lg p-1 mb-1">
            {content}
          </li>
          )
          })}
      </ul>
    </div>
  );
};

export default CommentList;
