import '../css/BlogCard.css';

function BlogCard({ blog }) {
  return (
    <div className='blog'>
    <div className='blog-main'>
      <div className="blog-card">
       <h2>{blog.title}</h2>
       <p>{blog.content}</p>
       <small>{blog.date}</small>
     </div>
    </div>
    </div>
    
   
  );
}

export default BlogCard;
