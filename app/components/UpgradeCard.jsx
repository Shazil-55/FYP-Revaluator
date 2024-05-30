import React from 'react'

const UpgradeCard = () => {
  return (
    <div>

    <div className="bg-zinc-100 p-4 rounded-lg mx-20 my-20" style={{ height: '300px' , width:'300px' , display:'flex', flexDirection : 'column', justifyContent: 'center', alignItems: 'center'  }}>
        <img src="/Dance.png" alt="Target your job" className="mb-4" />
        <p className="text-sm">Target your job to <br></br>the right people</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white  py-1 px-2 rounded inline-flex items-center" style={{fontSize : '13px'}}>
            Upgrade to Premium
        </button>
    </div>

    </div>
  )
}

export default UpgradeCard