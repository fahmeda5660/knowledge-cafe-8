import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="w-full navbar bg-base-100 flex justify-between">
            <div className="">
                <a className="normal-case text-black text-xl">Tech-Information Hub</a>
            </div>
            <div className="">

                <label  className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                </label>

            </div>
            
        </div>
        <hr className='m-3'/>
        </div>
    );
};

export default Header;