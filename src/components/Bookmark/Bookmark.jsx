import React, { useState } from 'react';
import './Bookmark.css'


const Bookmark = (props) => {
    const { id, coverImgUrl, bookTitle, authorImgUrl, authorTitle, date, time } = props.info;

    
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-6">
                <img className='w-full' src={coverImgUrl} alt="image"/>
                <div className="card-body">
                    <div className="info-content md:flex lg:flex justify-between items-center">
                        <div className='userInfo md:flex lg:flex justify-between items-center'>
                            <img className='' src={authorImgUrl} alt="" />
                            <div>
                                <h3 className='author-title'>{authorTitle}</h3>
                                <p className='date'>{date}</p>
                            </div>
                        </div>
                        <div className='flex items-center md:justify-center lg:justify-center cursor-pointer timeCount'>
                            <div>{time} min read</div>

                            <div onClick={()=>props.handleBookMark(bookTitle)} className='cursor-pointer ms-2'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" className="svg-inline--fa fa-bookmark bookMark w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <h2 className=" book-title text-[32px] md:text-[40px] lg:text-[40px]">{bookTitle}</h2>
                    <p className='tag'>#beginners #programming</p>
                    <a href="#" onClick={()=>props.handleTimeCount(time)}>Make as read</a>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Bookmark;