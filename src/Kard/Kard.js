import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import  { useState,useEffect } from 'react'
import im from '../Images/logo4.png'
import im1 from '../Images/logo.png'
import Alert from '@mui/material/Alert';

import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import '../Component/Nav.css'

import  { useRef } from 'react';
import '../Kard/Kard.css';




import w2 from '../Images/mp1.jpg';
import w1 from '../Images/mp2.jpeg';
import w3 from '../Images/mp3.jpeg';
import w4 from '../Images/mp4.jpg';
import w5 from '../Images/mp5.jpg'

import w6 from '../Images/rec1.jpg'
import w7 from '../Images/rec2.jpg'
import w8 from '../Images/rec3.jpg'
import w9 from '../Images/rec4.jpg'
import w10 from '../Images/rec5.jpg'

import ww6 from '../Images/sc4.jpg'
import ww7 from '../Images/sc2.jpg'
import ww8 from '../Images/sc.jpg'
import ww9 from '../Images/sc3.jpg'
import ww10 from '../Images/sc1.jpg'

import xy1 from '../Images/mp5.jpg'
import xy2 from '../Images/act2.jpg'
import xy3 from '../Images/mp1.jpg'
import xy4 from '../Images/a4.jpg'
import xy5 from '../Images/mp3.jpeg'

import x1 from '../Images/d1.jpg'
import x2 from '../Images/d2.jpeg'
import x3 from '../Images/d3.jpeg'
import x4 from '../Images/d4.jpeg'
import x5 from '../Images/d5.jpeg'

import xx1 from '../Images/act1.jpg'
import xx2 from '../Images/act2.jpg'
import xx3 from '../Images/act3.jpg'
import xx4 from '../Images/act4.jpg'
import xx5 from '../Images/act5.jpg'

import a1 from '../Images/a1.jpg'
import a2 from '../Images/a2.jpg'
import a3 from '../Images/a3.jpg'
import a4 from '../Images/a4.jpg'
import a5 from '../Images/a5.jpg'

import b1 from '../Images/vr1.jpg'
import b2 from '../Images/vr2.jpg'
import b3 from '../Images/vr3.jpg'
import b4 from '../Images/vr4.jpg'
import b5 from '../Images/vr5.jpg'

import bg from '../Images/bg.jpg';
import Nav from '../Component/Nav';
import Swiper from '../Swiper/Swiperr';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router';

export default function Kard() {

  const nav=useNavigate()
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    // Scroll to the target div
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick2 = () => {
    // Scroll to the target div
    targetRef2.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick3 = () => {
    // Scroll to the target div
    targetRef3.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick4 = () => {
    // Scroll to the target div
    targetRef4.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handle=()=>{
    nav("/price")
  }

  const handlelogin=()=>
  {
    nav('/')
  }

  const [fu,setFu]=useState();
 useEffect(() => {
  setFu(localStorage.getItem("logg"))
  console.log("--------->>>>>>>",fu)
  
 },[]);



  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const featuredWeddings = [
    { id: 1,img:w2,h:"/movie/1"},
    { id: 2,img:w1,h:"/movie/2"},
    { id: 3,img:w3,h:"/movie/3" },
    { id: 4,img:w4,h:'/movie/4'},
    {id: 5 ,img:w5,h:"/movie/5"}
  ];

  const dd=[
    {id: 1,img:w6, h:'/movie/34'},
    {id:  2,img:w7,h:"/movie/ 4"},
    {id:  3,img:w8,h:"/movie/5"},
    {id:  4,img:w9,h:"/movie/7"},
    {id:  5,img:w10,h:"/movie/15"},
    
  ];

  const dd2=[
    {id: 1,img:xy1,h:"/movie/6"},
    {id:  2,img:xy2,h:"/movie/7"},
    {id:  3,img:xy3,h:"/movie/8"},
    {id:  4,img:xy4,h:"/movie/9"},
    {id:  5,img:xy5,h:"/movie/10"}

  ];
  const dd3=[
    {id: 1,img:xx5,h:"/movie/11"},
    {id:  2,img:xx4,h:"/movie/12"},
    {id:  3,img:xx2,h:"/movie/13"},
    {id:  4,img:xx3,h:"/movie/14"},
    {id:  5,img:xx1,h:"/movie/15"}

  ];
  const dd4=[
    {id: 1,img:ww6,h:"/movie/16"},
    {id:  2,img:ww7,h:"/movie/17"},
    {id:  3,img:ww8,h:"/movie/18"},
    {id:  4,img:ww9,h:"/movie/19"},
    {id:  5,img:ww10,h:"/movie/20"}

  ];
  const dd5=[
    {id: 1,img:x1,h:"/movie/21"},
    {id:  2,img:x2,h:"/movie/22"},
    {id:  3,img:x3,h:"/movie/23"},
    {id:  4,img:x4,h:"/movie/24"},
    {id:  5,img:x5,h:"/movie/25"}

  ];
  const dd6=[
    {id: 1,img:a1,h:"/movie/26"},
    {id:  2,img:a2,h:"/movie/27"},
    {id:  3,img:a3,h:"/movie/28"},
    {id:  4,img:a4,h:"/movie/29"},
    {id:  5,img:a5,h:"/movie/30"}

  ];
  const dd7=[
    {id: 1,img:b1,h:"/movie/31"},
    {id:  2,img:b2,h:"/movie/32"},
    {id:  3,img:b3,h:"/movie/33"},
    {id:  4,img:b4,h:"/movie/34"},
    {id:  5,img:b5,h:"/movie/35"}

  ];
 


  return (
    <>
    <body className='bg'>


      
    <nav>

        <div class='log'>
    <img src={im} ></img> 
    
      </div>
    <ul>
      <li>
      <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
    </div>
      </li>
      <li>
        
        <a ><b>HOME</b></a>
        <br></br>
      </li>

      <li>
     
      <div className="select-dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="selected-option"><b>

        CATEGORIES
      </b>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <div className="option" onClick={handleClick2}>ACTION</div>
          <div className="option" onClick={handleClick3}>SCI-FI</div>
          <div className="option" onClick={handleClick4}>HORROR</div>
          <div className="option" onClick={handleClick4}>POPULAR ANIMATIONS</div>
          <div className="option" onClick={handleClick4}>VIRTUAL REALITY (VR)</div>
        </div>
      )}
    </div>

      </li>
      
    
        <li>
          <a onClick={handle} ><b>SUBSCRIPTION</b></a>
        </li>
        <li>

        <a onClick={handleClick}><b>ABOUT US</b></a>
        </li>
        
        <li>


      
       
        <b onClick={handleClickOpen} style={{color:'white'}}>
       <b>
         LOG OUT
        </b>
      </b>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you  want to exit from this Account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           If you're Logged Out from this Account you Need to 
           Login again 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >CANCEL</Button>
          <Button onClick={handlelogin} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    
        </li>
    </ul>

    </nav>
      






     <br/>
     <Swiper/>
 
    <h1 className='h'>Most Popular </h1>
        <br/>
      <div class='box1'>
    {featuredWeddings.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>
    <br/>
    <br/>

    
    {/* stck2 */}

    


    <div style={{backgroundColor:"rgb(192,192,192,0.1"}}>
      <br/>
    <h1 className='h'>Recently Added </h1>
<marquee scrollAmount="15px">
      <div class='box1'>

    {dd.map(wedding => (
      
      <div className='lol'>


        <div className='hov'>
<a href={wedding.h}>

      <Card className='cc' sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

      <a href={wedding.h} key={wedding.id}></a>
        
        <CardMedia 
          component="img"
          
          height="350"
          
          image={wedding.img}
          
          
          />
          
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div> ))}
    
</div>
         </marquee>
<br/>
<br/>
    
{/* stck3 */}
<br/>
    <br/>
      <div class='box1'>
      
    {dd2.map(wedding => (
<>

      <div className='lol'>

        <div className='hov'>
      <Card key={wedding.id} sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>
      


        <a href={wedding.h} key={`h-${wedding.id}`}>
        <CardMedia 
          component="img"
          
          height="350"
          
          image={wedding.img}  
          
          />
          
          </a>
       
      </CardActionArea>
    </Card>
          </div>
          </div>
      
      </>
      ))}
      </div>
    <h1 className='h'>Top Trending Trailers </h1>
    <br/>
    {/* stck 4 */}
    <div ref={targetRef2} style={{display:"flex", marginLeft:"40px"}}>

    <iframe width="460" height="300" style={{marginLeft:"20px"}} src="https://www.youtube.com/embed/laNA2HgwYXU?si=sKWgyR_7VMaguCML" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   
    <iframe width="460" height="300" style={{marginLeft:"20px"}} src="https://www.youtube.com/embed/qQJJWhh-XRo?si=zfX8PlNOM2Vr9qnz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   
    <iframe width="460" height="300" style={{marginLeft:"20px"}} src="https://www.youtube.com/embed/nJDclWEjGPA?si=GTxtNFZncDHiC1Ey" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
   </div>
    
    
    <br/>
    <br/>
    <br/>
    <h1 className='h'>Action </h1>
    <div class='box1'>
    {dd3.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>
<br/>

<h1 className='h'>Sci-fi </h1>
<div ref={targetRef3} class='box1'>
    {dd4.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>

<h1 className='h'>Horror </h1>
<div ref={targetRef4} class='box1'>
    {dd5.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>

<h1 className='h'>Popular Animations </h1>
<div ref={targetRef4} class='box1'>
    {dd6.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
          
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>


<h1 className='h'>VIRTUAL REALITY (VR)</h1>
<div ref={targetRef4} class='box1'>
    {dd7.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>



<br/>
<br/>

    <div ref={targetRef}>

    <Footer/>
    </div>
    </div>
    </body>
    </>
    );
  }
  