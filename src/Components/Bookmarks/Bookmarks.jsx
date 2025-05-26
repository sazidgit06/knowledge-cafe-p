
import PropTypes  from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const bookmarks = ({bookmarks, readingtime}) => {
    return (
        <div className="w-1/3 ml-5 mt-6 bg-gray-300 p-2 rounded">
            <h3 className='border border-[#6047EC] rounded p-2 bg-[#6047ec1a] text-[#6047EC]'>Spent time on read : {readingtime}</h3>
            <h3 className='text-3xl'>bookmarks:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
 
        </div>
    );
};

bookmarks.PropTypes = {
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
}

export default bookmarks;