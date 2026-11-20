import React from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  let posts: PostProps[] = [];
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (res.ok) {
      const data: { id: number; userId: number; title: string; body: string }[] = await res.json();
      posts = data.slice(0, 10).map(({ id, userId, title, body }) => ({ id, userId, title, content: body }));
    }
  } catch (error) {
    console.error('Could not fetch posts:', error);
  }
  return { props: { posts }, revalidate: 3600 };
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      {posts.length === 0 && <p className="text-gray-600">No posts to show right now. Please try again later.</p>}
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} id={post.id} userId={post.userId} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
