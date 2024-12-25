import Image from "./Image"

const Comment = () => {
    return (
      <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className='flex items-center gap-4'>
          <Image
            src='userImg.jpeg'
            className='w-10 h-10 rounded-full object-cover'
            w='40'
          />
          <span className='font-medium'>User Name</span>
          <span className='text-sm text-gray-500'>2 days ago</span>
        </div>
        <div className='mt-4 text-nandor'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            tenetur, vel cupiditate perferendis mollitia voluptate a quam
            recusandae doloremque nihil enim dicta! Dolorem adipisci placeat
            laborum, voluptas nemo ipsum!
          </p>
        </div>
      </div>
    );
}

export default Comment