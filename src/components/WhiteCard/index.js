import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './index.css' 


function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0, 
            
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };
  

const WhiteCard = () => {
   
        
           const [progress, setProgress] = React.useState(10);

        React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
        }, []);

        return ( 
          <div className="flexbox">
          <div className='white-card'>
            <div className='white-card-bg'>
              <CircularProgressWithLabel value={73} /> 
              <p className='card-para'>of graduates get promoted or land a better job.*</p>
            </div> 

            <div className='white-card-bg2'>
              <CircularProgressWithLabel value={50} /> 
              <p className='card-para'> of graduates that wanted to advance their careers recieved a raise with a median increase of +33%.*</p>
            </div>

            
          </div>
          </div>
            
        ) 
                    

        
    
}

export default WhiteCard