import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='card'>
                <p>1. Difference between props and state?</p>
                <p><span className='text-green-600'>Answer:</span> Props are immutable whereas state are mutable. We can define states in the component in the component itself, in state we can pass properties from parent components. States are mainly set and updated by the oboject where props determine the view upon creation then they remain static.	Props can be accessed by the child component but state can not. Props make components reusable where state State cannot make components reusable.</p>
            </div>
            <div className='card'>
                <p>2. How does useState work?</p>
                <p><span className='text-green-600'>Answer:</span> The useState() is a Hook, special function that takes the initial value as an argument, this value could be of any data type, such as string, number, object, array, and lots more. It returns an array of two entries and allows you to create, track and update a state in functional components. </p>
            </div>
            <div className='card'>
                <p>3. What are the purpose of useEffect except data Loading?</p>
                <p><span className='text-green-600'>Answer:</span> useEffect() helps to perform side effects in functional components, Validating an input, can do live filtering and trigger animation on new array value running on state change, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. 
</p>
            </div>
            <div className='card'>
                <p>4. How does REACT work?</p>
                <p><span className='text-green-600'>Answer:</span> One of the most widely used JavaScript libraries for creating mobile and online applications is React. React, developed by Facebook, includes a set of components, which are reusable JavaScript code fragments used for UI construction. It offers Speed, Flexibility, Performance, Usability, Reusable Components, It helps to build rich user interfaces, It allows writing custom components.</p>
            </div>
        </div>
    );
};

export default Blog;