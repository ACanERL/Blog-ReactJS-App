import blogs from '../data/blog';
import BlogCard from '../components/BlogCard';

function Home() {
  return (
    <div className='blog-card-t'>
        <h2>Blog'a Hoşgeldiniz.</h2>
      <div className='blog-card-col'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      </div>
    </div>
  );
}

export default Home;
