// Posts page
import PostCard from "@/components/common/PostCard";

const Posts: React.FC = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostCard title="First Post" content="This is the content of the first post." />
    </div>
  );
};

export default Posts;
