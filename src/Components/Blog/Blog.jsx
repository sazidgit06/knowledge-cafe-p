import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {cover, title, reading_time, author_img, author, posted_dates, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p>{posted_dates}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p>{reading_time} min read</p>

                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>
                {hashtags.map((hash, idx)=><span key={idx}>{hash}</span>)}
            </p>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object
}
export default Blog;