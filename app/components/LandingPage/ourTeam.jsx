import React from 'react'
import OurTeamCard from '@/app/components/LandingPage/ourTeamCard'

const OurTeam = () => {
  return (
    <>
      {/*left column*/}
      <div className="flex flex-col items-center justify-between" style={{width:'322px', height:'900px'}}>
          <OurTeamCard
          picture="/Alex.svg" 
          name="Richmond" 
          position="developer" 
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]} /> 

          <OurTeamCard
          picture="/conner.svg" 
          name="Connor Quinn" 
          position="designer" 
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]} />  

          <button className="text-white px-4 py-2 rounded-full text-xl tracking-wide" style={{backgroundColor:'#EC9521', height:'55px', width:'188px',fontFamily:'Manrope'}}>Contact Us</button>
      </div>

      {/*center column*/}
      <div className="flex flex-col items-center justify-between mt-24" style={{width:'322px', height:'830px' ,marginLeft:'30px',marginRight:'30px'}}>
        <OurTeamCard
          picture="/brown.svg"
          name="Jeffrey Brown"
          position="creative leader"
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]}       
        />

        <OurTeamCard
          picture="/smith.svg"
          name="Ann Smith"
          position="manager"
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]}

        />
      </div>

      {/*right column*/}
      <div className="flex flex-col justify-between" style={{width:'530px', height:'860px'}}>

        <div style={{width:'100%', height:'198px'}}>
          <p style={{color:'#0A273E', fontFamily:'Lexend', fontWeight:'bold', fontSize:'20px', lineHeight:'33px'}}>
            Paragraph.Loremipsum dolor sit ametconsectetur
            aiisingeliurabiuridsusii exSuspendionus
            leuumelsiuo
            uriciapienQuiquerinia t amedolorcomodo
            eicuqudollm
            molestie ipsum iaculis sit amet.
          </p>
        </div>

        <OurTeamCard
          picture="/Alex.svg" 
          name="Richmond" 
          position="developer" 
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]} /> 

        <div style={{width:'100%', height:'198px'}}>
          <p style={{color:'#0A273E', fontFamily:'Lexend', fontWeight:'bold', fontSize:'20px', lineHeight:'33px'}}>
            Paragraph.Loremipsum dolor sit ametconsectetur
            aiisingeliurabiuridsusii exSuspendionus
            leuumelsiuo
            uriciapienQuiquerinia t amedolorcomodo
            eicuqudollm
            molestie ipsum iaculis sit amet.
          </p>
        </div>

      </div>
    </>
  )
}
export default OurTeam;
