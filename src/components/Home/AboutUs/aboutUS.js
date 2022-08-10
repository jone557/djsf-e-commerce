import React,{useState} from 'react'
import { Grid, Typography, Card, CardActionArea, CardContent, CardMedia, IconButton } from '@material-ui/core';
// import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Navbar from '../Nav/Navbar'
import "./style.css";
import jo from "./yohannes.JPG"


const  About= ({id,name,image,email,semister, department,skills})=> {
    return (
        <div>
            
           
           <div>
              <div className='images'>
                  <img   src={image} alt="img" /> 
               </div>
               <br />
               <br />
                   <div>
                   <Typography className='name' variant='body1'>{name}</Typography>
                   </div>
                   
                   <div>
                   <Typography className='email' variant='body2'>{email}</Typography>
                   </div>
                   <hr />
                 < CardContent>
                 
                 <br />
                 <div>
                   {/* <Typography className='details' variant='h5'>Details</Typography>
                   <br /> */}
                   <p><Typography className='details' variant='subtitle1'>Student at Marwadi University</Typography></p>
                  
                   <p ><Typography className='details' variant='subtitle1'>{semister}</Typography></p>
                   <p ><Typography className='details' variant='subtitle1'>{department}</Typography></p>
                   <div>
                    <br />
                   <Typography className='details' variant='h5'>Skills</Typography>
                   
                   <p><Typography className='details' variant='subtitle1'>{skills}</Typography></p>
                   </div>
                  </div>
                 </ CardContent>
                  
            
               
           
          
           </div>
          
        </div>
        
    )
}



export const AboutUS = ()=> {
   
    // const classes = useStyles()

        const datas= [
            {  id: "1",
             name:'Yohannes Mumecha', 
             email: 'gameofyohannes@gmail.com',
             skills:'full stack developer ',
             semister:'6th semister ' ,
             department: 'Computer Engineering',
             image: jo    },
            {  id: "2",
             name:'Frahiwot',
              email:  'frecode@gmail.com' ,
              skills:'full stack developer ',
              semister:'4th semister ' ,
              department: 'Computer Engineering',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
             },
           {  id: "3",
            name:'Signi Guta',
             email: 'segni1992@gmail.com',
             skills:'full stack developer, java c/c++ ',
             semister:'6th semister ' ,
             department: 'Computer Engineering',
             image: 'data:image/jpeg;base64,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'  
            },

        ]
    return (
        <>
        <Navbar/>
        <div className='container'>
             <div className='titles'>
                    <h1>About Us</h1>
              
                {/* <Typography>all about the hub</Typography> */}
            
             </div>
             <Typography className='members'>Developers</Typography>
             <hr />
             <hr />
            <Grid container justify='center' spacing={1} className='toolbar'>
               
                {
                    
                        datas.map((data) => (



                            <Grid item key={data.id} xs={12} sm={6} md={4} lg={3}>
                                <About key={data.id} name={data.name} email={data.email}
                                    image={data.image} skills={data.skills}
                                    id={data.id} department={data.department} semister={data.semister}
                                />
                            </Grid>



                        ))
                        
                }
               
             </Grid>
          
        </div>
    </>
    );
}
 