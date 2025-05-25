import PropTypes from 'prop-types';
import { FaBookmark} from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { cover, title, reading_time, author_img, author, posted_dates, hashtags } = blog;
    return (
        <div className='mb-10'>
            <img className='w-full h-[350px] object-cover mb-5' src={cover} alt="" />
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-3'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p>{posted_dates}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-red-800'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-3'>{title}</h2>
            <p>
                {hashtags.map((hash, idx) => <span key={idx}>{hash}</span>)}
            </p>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;