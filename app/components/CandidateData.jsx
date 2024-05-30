import React from 'react';

const CandidateData = ({ name, profession, phone, email, imageUrl , onEditDetails }) => {
    const handleClick = () => {
        console.log("hello")
        onEditDetails(name, phone, email);
    };
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
                <img src={imageUrl} alt={name} className="mb-2" />
                <h3 className="font-semibold">{name}</h3>
                <p>{profession}</p>
            </div>
            <p className="text-sm mb-2">📞 {phone}</p>
            <p className="text-sm mb-4">📧 {email}</p>
            <button onClick={handleClick} className="text-white py-1 px-3 rounded-full text-sm" style={{ backgroundColor: "#EC9521" }}>Edit Details and Text</button>
        </div>
    );
};

export default CandidateData;
