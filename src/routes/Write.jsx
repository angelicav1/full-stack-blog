import { useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";

const Write = () => {

    const {isLoaded, isSignedIn} = useUser()

    if(!isLoaded){
        return <div className="">Loading...</div>;
    }

    if (isLoaded && !isSignedIn) {
        return <div className="">You should login!</div>;
    }

    return (
      <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
        <h1 className='text-cl font-light'>Create a New Post</h1>
        <form className='flex flex-col gap-6 flex-1 mb-6'>
          <button className=' w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>
            Add a cover image
          </button>
          <input
            className='text-4xl font-semibold bg-transparent outline-none'
            type='text'
            placeholder='My Awesome Story'
          />
          <div className='flex items-center gap-4'>
            <label htmlFor='' className='text-sm'>
              Choose a category:
            </label>
            <select name='' id='' className='p-2 rounded-xl bg-white shadow-md'>
              <option value='africa'>Africa</option>
              <option value='antarctica'>Antarctica</option>
              <option value='asia'>Asia</option>
              <option value='europe'>Europe</option>
              <option value='north-america'>North America</option>
              <option value='south-america'>South America</option>
              <option value='oceania'>Oceania</option>
            </select>
          </div>
          <textarea
            className='p-4 rounded-xl bg-white shadow-md'
            name='desc'
            placeholder='A Short Description'
          ></textarea>
          <ReactQuill theme='snow' className='flex-1 rounded-xl bg-white shadow-md' />
          <button className="bg-sprout text-white rounded-xl py-2 w-36 font-bold">Send</button>
        </form>
      </div>
    );
};

export default Write