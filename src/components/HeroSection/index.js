import './index.css' 

const HeroSection = () => {
    return(
        <div className='bg-color'>
            <div className='flexbox'>
            <div className='text-aligner'>
                <h1>A breakthrough in your career awaits.</h1>
                <p>We create opportunities for learners worldwide by offering 
                    scholarships and utilizing our proven playbook that builds
                     core competencies in in-demand technologies.
                </p>
            </div>
            <div>
                <img className='img-aligner' src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3GHH1tQ4hMFPxPqm8nEmJk/52e8241b64a259c569c49f0014bf6517/hero-graphic-scholarships_1_.png?fm=webp&q=100"/>
            </div>
            </div>

            <div className='bg-aligner'>
        <div className='gray-card-bg'> 
            <div>
                <h3 className="gray-main-head">AWS AI & ML Scholarship Program</h3>
                <div className='gray-card'>
                    <h4 className='gray-head'>Who can apply?</h4> 
                    <p className='gray-para'>Understand and underrepresented students</p>
                </div>

                <div className='gray-card'>
                    <h4 className='gray-head'>Program options:</h4> 
                    <p className='gray-para'>AI Programming with Python</p>
                </div> 

                <button className='gray-butt'>Get Started</button>

                
            </div>
            
            

        </div>
        </div>

        <div className='bg-aligner1'>
        <div className='gray-card-bg2'> 
            <div>
                <h3 className="gray-main-head">OneTen/Blacks in Technology Scholarship Program</h3>
                <div className='gray-card'>
                    <h4 className='gray-head'>Who can apply?</h4> 
                    <p className='gray-para'>Black job-seekers without 4-year degrees across the United States</p>
                </div>

                <div className='gray-card'>
                    <h4 className='gray-head'>Program options:</h4> 
                    <p className='gray-para'>Busoness Analytics, Digital Marketing, or Front End Web Devlopment Fundamentals</p>
                </div> 

                <button className='gray-butt'>Apply Now</button>

                
            </div>
            
            

        </div>
        </div>
        </div>
    )
}

export default HeroSection;