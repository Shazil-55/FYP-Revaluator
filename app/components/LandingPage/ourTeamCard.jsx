import React from 'react'

const OurTeamCard = ({ picture, name, position, socialMedia = []}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3' style={{width:'252px',height:'325px',borderRadius:'15.8px',background:'#FFFFFF'}}>
        
        {/*picture*/}
        <div>
            <img src={picture} alt="not found" style={{width:'122px', height:'122px'}}/>
        </div>

        <div className='flex flex-col items-center justify-center'>
          {/*name*/}
          <div>
              <p style={{fontFamily:'Lexend',fontWeight:'bold', fontSize:'22px',color:'#171A1F',lineHeight:'30px'}}>{name}</p>
          </div>

          {/*position*/}
          <div>
              <p style={{fontSize:'22px',fontWeight:'bold',fontFamily:'Lexend', lineHeight:'30px',color:'#EC9521'}}>{position}</p>
          </div>

          {/*social media icons*/}
          <div className="flex flex-row items-center justify-evenly" style={{ width: '167px',height:'40px' ,margin: '2px auto' }}> 
            {socialMedia.slice(0, 3).map((icon, index) => ( <a key={index} href={icon} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center"> 
              <img src={icon} alt={`Social Media ${index}`} className="h-6 w-6" /> </a> ))} 
          </div> 
        </div>

    </div>
  )
}

export default OurTeamCard