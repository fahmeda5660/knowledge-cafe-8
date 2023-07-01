import React from 'react';
import "./BookmarkedBlogs.css"

const BookmarkedBlogs = (props) => {
    return (
        <div className="card w-full mb-6 bookmarkedBlog-part">
            <div>
                <p className='mb-6'>Bookmarked Blogs : {props.bookMarkTitle.length}</p>
                {
                    props.bookMarkTitle.map(singleTitle =>  <p className='single-title'>{singleTitle}</p>)
                }
            </div>
        </div>
    );
};

export default BookmarkedBlogs;