import Post from './Post';

const Feed = () => {
  return (
    <div className="flex p-4 bg-white shadow-md flex-col gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
