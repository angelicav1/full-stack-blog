import { Link } from "react-router-dom";
import Search from "./Search"

const SideMenu = () => {
    return (
      <div className='px-4 h-max sticky top-8'>
        <h1 className='mb-4 text-sm font-medium'>Search</h1>
        <Search />
        <h1 className='mt-8 mb-4 text-sm font-medium'>Filter</h1>
        <div className="flex flex-col gap-2 text-sm"></div>
        <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
        <div className='flex flex-col gap-4 text-sm'>
          <Link className='underline' to='/posts'>
            All
          </Link>
          <Link className='underline' to='/posts?cat=africa'>
            Africa
          </Link>
          <Link className='underline' to='/posts?cat=antarctica'>
            Antarctica
          </Link>
          <Link className='underline' to='/posts?cat=asia'>
            Asia
          </Link>
          <Link className='underline' to='/posts?cat=europe'>
            Europe
          </Link>
          <Link className='underline' to='/posts?cat=north-america'>
            North America
          </Link>
          <Link className='underline' to='/posts?cat=south-america'>
            South America
          </Link>
          <Link className='underline' to='/posts?cat=oceania'>
            Oceania
          </Link>
        </div>
      </div>
    );
}

export default SideMenu