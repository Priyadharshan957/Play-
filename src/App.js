import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Kard from './Kard/Kard';
import Login from './Login/Login';
import SignUpForm from './Sign/SignUpForm';
import Pricing from './Price/Pricing';
import Contactus from './Contact/Contactus';
import Payment from './Pay/Payment';
import MovieCard from './MovieCard/MovieCard';
import MovieDetail from './MovieCard/MovieDetail';
import Admin from './Admin';
// import MovieCard2 from './MovieCard/MovieCard2'
// import MovieCard3 from './MovieCard/MovieCard3'



import YourComponent from './Last/YourComponent';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/sign' element={<SignUpForm/>}/>
    <Route path='/price' element={<Pricing/>}/>
    <Route path='/kard' element={<Kard logg={localStorage.getItem("huu")}/>}/>
    <Route path='/con' element={<Contactus/>}/>
    <Route path='/pay' element={<Payment/>}/>
    <Route path='/last' element={<YourComponent/>}/>


    <Route path="/movie/:id" element={<MovieDetail />} />
       
    
    
    <Route path="/" element={<MovieCard />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
    <Route path="/admin" element={<Admin />} />
 
    
   
   
   </Routes>
   </BrowserRouter>
 
 
  

    </>
  )
}

export default App;