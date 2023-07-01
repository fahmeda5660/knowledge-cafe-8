import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Sidebar from '../Sidebar/Sidebar';
import BookmarkedBlogs from '../BookmarkedBlogs/BookmarkedBlogs';
import './Card.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = () => {
    const [knowledges, setknowledges] = useState([]);
    const [sidebar, setsidebar] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setknowledges(data))
    }, []);
    // console.log(knowledges);

    const [bookMarkTitle, setbookMarkTitle] = useState([]);
    // console.log(bookMarkTitle);

    const handleBookMark = (bookTitle) => {
        const addedbookMarkTitle = bookMarkTitle.find(bookmark => bookmark === bookTitle);

        if (addedbookMarkTitle) {
            toast("You have already Bookmark this Blog");
        } else {
            const newBookMarkTitle = [...bookMarkTitle, bookTitle];
            setbookMarkTitle(newBookMarkTitle);
        }
    };

    const [timeCount, setTimeCount] = useState(0);
    // console.log(timeCount);

    const handleTimeCount = (prevTimeTotal) => {
        const prevTimeTotalString = parseInt(prevTimeTotal);
        const newTimeTotal = prevTimeTotalString + parseInt(timeCount);
        setTimeCount(newTimeTotal);
    }

    return (
        <div className='grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-8'>
            <div className='md:col-span-2 lg:col-span-2'>
                {
                    knowledges.map(info => <Bookmark key={info.id} info={info} handleTimeCount={handleTimeCount} handleBookMark={handleBookMark}></Bookmark>)
                }
            </div>
            <div>
                <Sidebar key={timeCount} timeCount={timeCount}></Sidebar>
                <BookmarkedBlogs key={bookMarkTitle} bookMarkTitle={bookMarkTitle}></BookmarkedBlogs>

            </div>
        </div>
    );
};

export default Card;