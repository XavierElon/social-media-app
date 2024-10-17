import Link from 'next/link';
import Image from 'next/image';

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-sm">
          See All
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg"
            alt=""
            height={16}
            width={16}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Elon Musk</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            height={20}
            width={16}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg"
            alt=""
            height={16}
            width={16}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Elon Musk</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            height={20}
            width={16}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg"
            alt=""
            height={16}
            width={16}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Elon Musk</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            height={20}
            width={16}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
