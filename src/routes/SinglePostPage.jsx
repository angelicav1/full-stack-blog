import { Link } from "react-router-dom";
import Image from "../components/Image"

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className="text-nandor">Angelica Victoria</Link>
            <span>on</span>
            <Link className="text-nandor">North America</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-tomthumb font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, illum adipisci praesentium nostrum earum totam voluptas veniam. Maxime earum labore aut quia dignissimos ea inventore at culpa, commodi facere ipsam.</p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src='blog_pic_1.jpg' w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className=''></div>
    </div>
  );
};

export default SinglePostPage;
