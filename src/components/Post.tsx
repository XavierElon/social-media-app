import Image from 'next/image';
import Comments from './Comments';

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg"
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full"
          />
          <span className="font-medium">Elon Musk</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg"
            fill
            alt=""
          />
        </div>
        <p>
          Laboris nisi sunt velit anim. Mollit voluptate duis laboris mollit.
          Consequat nostrud duis Lorem culpa sit occaecat esse officia velit
          duis proident. Ipsum qui est ipsum enim duis culpa nostrud id anim
          mollit est aute eu. Lorem veniam in culpa cupidatat.
        </p>
      </div>
      {/* INTERACTIONS */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex -1 items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
          <div className="">
            <div className="flex items-center gap-4 bg-slate-50 p2 rounded-xl px-6 py-2 w-full">
              <Image
                src="/share.png"
                width={16}
                height={16}
                alt=""
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                123 <span className="hidden md:inline"> Shares</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
