import { Link } from "react-router-dom"

const MainCategories = () => {
    return (
      <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        {/* links */}
        <div className='flex-1 flex items-center justify-between flex-wrap'>
          <Link
            to='/posts'
            className='bg-nandor text-white rounded-full px-4 py-2'
          >
            All Posts
          </Link>
          <Link
            to='/posts?cat=africa'
            className='hover:bg-sprout rounded-full px-4 py-2'
          >
            Africa
          </Link>
          <Link
            to='/posts?cat=antarctica'
            className='hover:bg-sprout rounded-full px-4 py-2'
          >
            Antarctica
          </Link>
          <Link
            to='/posts?cat=asia'
            className='hover:bg-sprout rounded-full px-4 py-2'
          >
            Asia
          </Link>
          <Link
            to='/posts?cat=europe'
            className='hover:bg-sprout rounded-full px-4 py-2'
          >
            Europe
          </Link>
          <Link
            to='/posts?cat=north-america'
            className='hover:bg-sprout rounded-full px-4 py-2'
          >
            North America
          </Link>
          <Link
            to='/posts?cat=south-america'
            className='hover:bg-sprout rounded-full px-4 py-2'
          >
            South America
          </Link>
          <Link
            to='/posts?cat=oceania'
            className='hover:bg-sprout rounded-full px-4 py-2'
          >
            Oceania
          </Link>
        </div>
        <span className="text-xl font-medium">|</span>
        {/* search */}
        <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="gray"
        >
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input type="text" placeholder="search a post..." className="bg-transparent" />
    </div>
      </div>
    );
}

export default MainCategories