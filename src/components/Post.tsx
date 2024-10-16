import Image from 'next/image';

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
          <span className="font-medium">Jack McBride</span>
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
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm">
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p2 rounded-xl"></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Post;
