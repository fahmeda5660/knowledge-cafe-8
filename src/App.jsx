// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Blog/Blog'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // const showToast = () => 
  // { 
  //   toast("You have already bookmark it") 
  // };
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
      <Blog></Blog>
      {/* <h1>Toastify React App</h1> 
      <button onClick={showToast}>Pop that toast!</button> */}
       <ToastContainer />
    </div>
  )
}

export default App
