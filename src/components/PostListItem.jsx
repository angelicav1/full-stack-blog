import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
    return (
      <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className='md:hidden xl:block xl:w-1/3'>
          <Image src='blog_pic_5.jpg' className='rounded-2xl object-cover' w="735" />
        </div>
        {/* details */}
        <div className='flex flex-col gap-4 xl:w-2/3'>
          <Link to='/test' className='text-4xl font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur
            adipisicing elit.
          </Link>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-nandor'>Angelica Victoria</Link>
            <span>on</span>
            <Link className='text-nandor'>Africa</Link>
            <span>2 days ago</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores nisi suscipit minus maxime quod, maiores neque, est quisquam esse recusandae! Quos ipsum pariatur ad dicta suscipit. Reiciendis, et nostrum.</p>
          <Link to="/test" className="underline text-tomthumb text-sm">Read More</Link>
        </div>
      </div>
    );
}

export default PostListItem