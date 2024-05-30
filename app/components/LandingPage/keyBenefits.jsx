import React from 'react'

const KeyBenefits = () => {
  return (
    <div className='flex items-center justify-between' style={{margin:'0 auto', width:'90%'}}>
      {/*Content*/}
      <div style={{marginLeft:'80px'}}>
        <div>
         {/*heading*/}
          <div>
            <p style={{color:'#0A273E', fontFamily:'Lexend', fontWeight:'bold', fontSize:'60px', lineHeight:'86px'}}>Key Benfits</p>
          </div>

          {/*points*/}
          <div>
              <ul style={{ fontFamily: 'Lexend', marginTop: '30px', marginBottom: '50px', fontWeight: 'bold', fontSize: '22px', lineHeight: '56px', color: '#0A273E', listStyleType: 'none' }}>
                <li style={{ marginBottom: '20px' , display:'flex', alignItems:'center'}}>
                  <div style={{ width: '26px', height: '26px', background: '#0F4C7B', borderRadius: '100%', display: 'inline-block', marginRight: '15px' }}></div>
                  <div>Efficient Screening Process</div>
                </li>
                <li style={{ marginBottom: '20px' , display:'flex', alignItems:'center'}}>
                  <div style={{ width: '26px', height: '26px', background: '#0F4C7B', borderRadius: '100%', display: 'inline-block', marginRight: '15px' }}></div>
                  <div>Tailored Testing</div>
                </li>
                <li style={{ marginBottom: '20px', display:'flex', alignItems:'center' }}>
                  <div style={{ width: '26px', height: '26px', background: '#0F4C7B', borderRadius: '100%', display: 'inline-block', marginRight: '15px' }}></div>
                  <div>Convenient Candidate Experience</div>
                </li>
                <li style={{ marginBottom: '20px' , display:'flex', alignItems:'center'}}>
                  <div style={{ width: '26px', height: '26px', background: '#0F4C7B', borderRadius: '100%', display: 'inline-block', marginRight: '15px' }}></div>
                  <div>Automated Grading</div>
                </li>
                <li style={{display:'flex', alignItems:'center'}}>
                  <div style={{ width: '26px', height: '26px', background: '#0F4C7B', borderRadius: '100%', display: 'inline-block', marginRight: '15px' }}></div>
                  <div>Recruitment Decision-Making</div>
                </li>
              </ul>

          </div>

          <button className="text-white px-4 py-2 rounded-full text-xl tracking-wide" style={{backgroundColor:'#EC9521', fontFamily:'Manrope',height:'49px', width:'232px', fontSize:'16px'}}>See Our Explainer Video</button>
        </div>
      </div>
      {/*Image*/}
      <div style={{}}>
        <img src="/keyBenefits.svg" alt=""  style={{width:'650px',height:'420px'}}/>
      </div>
    </div>
  )
}

export default KeyBenefits;