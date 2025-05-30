import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border rounded-md p-4 shadow-md mb-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
