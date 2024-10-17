import Image from 'next/image';

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment"
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex items-center gap-4">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Elon Musk</span>
            <p>
              Velit dolor velit culpa ipsum ullamco. Tempor duis commodo nulla
              duis ex proident amet. Nostrud dolor proident do magna magna
              excepteur. Excepteur aliqua nisi officia cillum magna officia.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={16}
                  height={16}
                  className="cursor-pointer w-4 h-4"
                />{' '}
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">
                  123 <span className="hidden md:inline"> Likes</span>
                </span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* MORE ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
