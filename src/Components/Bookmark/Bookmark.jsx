import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='mb-2 bg-slate-200 rounded p-1'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.PropTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;