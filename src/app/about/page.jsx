import React from 'react';

export default function About(){
    const teamMembers = [
        { firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist', age: 29, gender: 'female' },
        { firstname: 'Michael', lastname: 'Schneider', position: 'HR Manager', age: 45, gender: 'male' },
        { firstname: 'Sandra', lastname: 'Müller', position: 'Talent Acquisition Lead', age: 38, gender: 'female' },
        { firstname: 'Tom', lastname: 'Wagner', position: 'Senior Recruiter', age: 33, gender: 'male' },
        { firstname: 'Anna', lastname: 'Schulz', position: 'Recruitment Coordinator', age: 26, gender: 'female' }
    ]

    return (
        <div>
            <h1>Unser Team</h1>
            <div>
                <hr />
                <h2>Unser Team</h2>
                {teamMembers.map((member, index) => (
                    <div key={index}>
                    {/* <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}> */}
                        <h3>{member.firstname} {member.lastname}</h3>
                        <p>Position: {member.position}</p>
                        <p>Alter: {member.age}</p>
                        <p>Geschlecht: {member.gender}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};
