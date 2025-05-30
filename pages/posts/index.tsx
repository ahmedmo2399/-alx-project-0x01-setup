import React from 'react';
import PostCard from '../../components/common/PostCard';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const PostsPage: React.FC = () => {
  // Dummy data for now
  const posts = [
    { id: 1, title: 'First Post', body: 'This is the body of the first post' },
    { id: 2, title: 'Second Post', body: 'This is the body of the second post' },
  ];

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
