import Link from 'next/link';

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <Link href={'/blog/firstblog'}>Post 1</Link>
    </div>
  );
};

export default BlogPage;
