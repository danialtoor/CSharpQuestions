import React from 'react';
import { Link } from 'react-router-dom';

//data will be replaced by api later
const mockProblems = [
  { id: '1', title: 'Chapter 1, 1', difficulty: 'Easy' },
  { id: '2', title: 'Chapter 1, 2', difficulty: 'Easy' },
  { id: '3', title: 'Chapter 1, 3', difficulty: 'Medium' },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page - Solve C# Problems for CS1-CS2</h1>
      <ul>
        {mockProblems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
            <span> - {problem.difficulty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
//adding another comment


export default Home;
