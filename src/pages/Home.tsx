import React from 'react';
import { Link } from 'react-router-dom';

//data will be replaced by api later
const mockProblems = [
  { id: '1', title: 'Two Sum', difficulty: 'Easy' },
  { id: '2', title: 'Reverse a String', difficulty: 'Easy' },
  { id: '3', title: 'Binary Search', difficulty: 'Medium' },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
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

export default Home;
