import React from 'react';
export async function generateStaticParams() {
  // const posts = await getPosts();

  // return posts.map((post) => ({
  //   slug: post.slug,
  // }));
  return [{ slug: 'firstblog' }];
}
const SingleBlogPage = () => {
  return (
    <div>
      SingleBlogPage
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vitae tempora
        porro! Adipisci dignissimos repellat harum aspernatur obcaecati nulla consequuntur
        cupiditate perferendis quidem quibusdam sit ipsam vitae, maiores ducimus quos!
      </p>
    </div>
  );
};

export default SingleBlogPage;
