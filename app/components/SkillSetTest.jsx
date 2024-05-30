import Nav from '@/app/components/Nav';
import CandidateData from './CandidateData'
import React , {useState} from 'react';
import GenerateTest from './GenerateTest'


const SkillSetTest = () => {

    const [showTest , setShowTest] = useState(false)
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phoneNo , setPhoneNo] = useState("")

    const candidates = [
        {
            name: 'John King',
            profession: 'Electrical Engineer',
            phone: '202-555-0193',
            email: 'jk@example.com',
            imageUrl: '/Business_agent.png'
        },
        {
            name: 'Doe King',
            profession: 'Civil Engineer',
            phone: '202-555-0193',
            email: 'jk@example.com',
            imageUrl: '/Business_agent.png'
        },
        {
            name: 'Daniel Jackson',
            profession: 'Accountant',
            phone: '718-555-0143',
            email: 'dj@example.com',
            imageUrl: '/Business_agent.png'
        },
        {
            name: 'Brian Harris',
            profession: 'Developer',
            phone: '202-555-0193',
            email: 'bh@example.com',
            imageUrl: '/Business_agent.png'
        },
        {
            name: 'Daniel Jackson',
            profession: 'Accountant',
            phone: '718-555-0143',
            email: 'dj@example.com',
            imageUrl: '/Business_agent.png'
        },
        {
            name: 'Brian Harris',
            profession: 'Developer',
            phone: '202-555-0193',
            email: 'bh@example.com',
            imageUrl: '/Business_agent.png'
        },
        {
            name: 'Doe King',
            profession: 'Civil Engineer',
            phone: '202-555-0193',
            email: 'jk@example.com',
            imageUrl: '/Business_agent.png'
        },,
        {
            name: 'Doe King',
            profession: 'Civil Engineer',
            phone: '202-555-0193',
            email: 'jk@example.com',
            imageUrl: '/Business_agent.png'
        },
    ];
    
    function ShowGenrateTest(){
        setShowTest(true)
    }
    const handleEditDetails = (name, phone, email) => {
        // Do something with the edited details, such as saving to state
        setName(name)
        setEmail(email)
        setPhoneNo(phone)
        setShowTest(true)

    };

    return (
        <div>
            {showTest?(
                <GenerateTest post = "Skill Set" name = {name} email ={email}  phoneNo ={phoneNo}/>
            ):(
                <div className="bg-zinc-100 p-8">
                <div className="flex justify-between items-center mb-6">
                    <input type="text" placeholder="Search" className="p-2 w-1/4 border rounded-md" style={{backgroundColor:"white"}}/>
                    <button onClick={ShowGenrateTest} className="text-white py-2 px-4 rounded-lg" style={{backgroundColor: "#EC9521"}}>Send Text or Email</button>
                </div>
                <div className="grid grid-cols-4 gap-6 my-4">
            {candidates.map((candidate, index) => (
                <CandidateData
                    key={index}
                    name={candidate.name}
                    profession={candidate.profession}
                    phone={candidate.phone}
                    email={candidate.email}
                    imageUrl={candidate.imageUrl}
                    onEditDetails={handleEditDetails} 
                />
            ))}
        </div>


                <div className="flex justify-center items-center mt-6">
                    <button className="bg-zinc-300 text-zinc-600 py-1 px-3 rounded-full mx-1">❮</button>
                    <button className="bg-zinc-300 text-zinc-600 py-1 px-3 rounded-full mx-1">1</button>
                    <button className="bg-zinc-300 text-zinc-600 py-1 px-3 rounded-full mx-1">2</button>
                    <button className="bg-zinc-300 text-zinc-600 py-1 px-3 rounded-full mx-1">3</button>
                    <button className="bg-zinc-300 text-zinc-600 py-1 px-3 rounded-full mx-1">❯</button>
                </div>
            </div>
            )}
            
        </div>
    );
};

export default SkillSetTest;
