import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/* image */}
            <div className="md:hidden xl:block">
                <Image src="blog_pic_5.jpg" className="rounded-2xl object-cover"/>
            </div>
            {/* details */}
            <div className="">
                <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis excepturi enim consectetur distinctio illum, eum aliquid, provident minima quia, facere eveniet nihil debitis saepe.</Link>
            <div className="flex items-center gap-2 text-nandor text-sm">
                <span>Written by</span>
                <Link>Angelica Victoria</Link>
                <span>on</span>
                <Link>Africa</Link>
                <span>2 days ago</span>
            </div>
            </div>
        </div>
    )
}

export default PostListItem