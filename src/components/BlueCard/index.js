import * as React from 'react';
import Card from '@mui/material/Card';


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './index.css'




const BlueCard = () => {
    return ( 
        <div>
            <Card sx={{ maxWidth: 280,  backgroundColor:"#142580", padding:"20px", borderTopRightRadius:"75px" }}> 
            <div className='top-bg'>
                <Stack direction="row" spacing={2} >
                    <Avatar alt="Remy Sharp" src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3Un0AmRsdBUoRjJFGDEDay/a8ef93926a9530e1e9097e90bd4dcd7a/student-guillermo.png?fm=jpg" sx={{ width: 87, height: 87 }}/>
                    
                </Stack>  
                <div className='paaa'>
                    <h3 className='blue-head'>Guillermo Orellana Ruiz</h3> 
                    <p className='blue-para'>Android Developer</p>
                    
                </div>
                

            </div>

            {/*<hr/>*/} 

            <ul className='blue-unorder'>
                <li className='blue-li'>Studied to become a sound engineer</li> 
                <li className='blue-li'>Wanted to build apps since he first saw Android in 2009</li> 
                <li className='blue-li'>Now head Android Developer at Badoo</li>
            </ul>
        
          
          
        </Card> 

        <Card sx={{ maxWidth: 280,  backgroundColor:"#142580", padding:"20px", borderBottomRightRadius:"75px" }}> 
            <div className='top-bg'>
                <Stack direction="row" spacing={2} >
                    <Avatar alt="Remy Sharp" src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3I2bUo4Uj0dIR4jSTLyfio/5d985dbbf2dbaa49d0307c9c148e2e4f/student-lara.png?fm=jpg"   sx={{ width: 87, height: 87 }}/>
                    
                </Stack>  
                <div className='paaa'>
                    <h3 className='blue-head'>Lara Martin</h3> 
                    <p className='blue-para'>Mobile Developer</p>
                    
                </div>
                

            </div>

            {/*<hr/>*/} 

            <ul className='blue-unorder'>
                <li className='blue-li'>Member of women Techmakers in Berlin</li> 
                <li className='blue-li'>First app she ever created won "Best App</li> 
                <li className='blue-li'>Seeks to become a full-time ANdroid Developer</li>
            </ul>
        
          
          
        </Card>

        <Card sx={{ maxWidth: 280,  backgroundColor:"#142580", padding:"20px", borderTopLeftRadius:"75px" }}> 
            <div className='top-bg'>
                <Stack direction="row" spacing={2} >
                    <Avatar alt="Remy Sharp" src= "//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/57fzg2HS0H4PCRChkpjVI3/912e82619379f548c22f4cdb2f2478b5/student-jose.png?fm=jpg"  sx={{ width: 87, height: 87 }}/>
                    
                </Stack>  
                <div className='paaa'>
                    <h3 className='blue-head'>Jose Nieto</h3> 
                    <p className='blue-para'>Android Devloper</p>
                    
                </div>
                

            </div>

            {/*<hr/>*/} 

            <ul className='blue-unorder'>
                <li className='blue-li'>Recieved phD in Organic Chemistry</li> 
                <li className='blue-li'>Started out by building basic apps for fun</li> 
                <li className='blue-li'>Now full-time ANdroid Devloper</li>
            </ul>
        
          
          
        </Card>

        <Card sx={{ maxWidth: 280,  backgroundColor:"#142580", padding:"20px", borderBottomLeftRadius:"75px" }}> 
            <div className='top-bg'>
                <Stack direction="row" spacing={2} >
                    <Avatar alt="Remy Sharp" src= "//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/72pLAhXtVo1OaUUJxEPWK3/9ca8d96a344f48a1f14c42655fc3b037/student-joe.png?fm=jpg"  sx={{ width: 87, height: 87 }}/>
                    
                </Stack>  
                <div className='paaa'>
                    <h3 className='blue-head'>Joe Goodall</h3> 
                    <p className='blue-para'>Mobile Devloper</p>
                    
                </div>
                

            </div>

            {/*<hr/>*/} 

            <ul className='blue-unorder'>
                <li className='blue-li'>Formerly a personal trainer</li> 
                <li className='blue-li'>Self- taught basic programmer</li> 
                <li className='blue-li'>Now builds Android apps in sports and health</li>
            </ul>
        
          
          
        </Card>
        </div>
        
      );
}


export default  BlueCard