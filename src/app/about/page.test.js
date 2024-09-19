// __tests__/about.test.js
import {render, screen} from '@testing-library/react';
import About from './page'; // Importieren Sie die About-Komponente
import '@testing-library/jest-dom'

describe('About Page', () => {
    const teamMembers = [
        {firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist', age: 29, gender: 'female'},
        {firstname: 'Michael', lastname: 'Schneider', position: 'HR Manager', age: 45, gender: 'male'},
        {firstname: 'Sandra', lastname: 'Müller', position: 'Talent Acquisition Lead', age: 38, gender: 'female'},
        {firstname: 'Tom', lastname: 'Wagner', position: 'Senior Recruiter', age: 33, gender: 'male'},
        {firstname: 'Anna', lastname: 'Schulz', position: 'Recruitment Coordinator', age: 26, gender: 'female'}
    ];

    // test('should render the About page correctly', () => {
    //     render(<About/>); // Rendern der About-Komponente
//
    //     // Überprüfen, ob die Überschrift "Unser Team" angezeigt wird
    //     expect(screen.getByText('Unser Team')).toBeInTheDocument();
    // });

    test('should render all team members with correct information', () => {
        render(<About/>);

        // Überprüfen, ob die Teammitglieder korrekt angezeigt werden
        teamMembers.forEach(member => {
            const fullName = `${member.firstname} ${member.lastname}`;
            expect(screen.getByText(fullName)).toBeInTheDocument();
            expect(screen.getByText(`Position: ${member.position}`)).toBeInTheDocument();
            expect(screen.getByText(`Alter: ${member.age}`)).toBeInTheDocument();
//            expect(screen.getByText(`Geschlecht: ${member.gender}`)).toBeInTheDocument();
        });
    });
});
