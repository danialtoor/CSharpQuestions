import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProblems } from '../services/mockapi';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Fetch problems using React Query
  const { data: problems, isLoading, error } = useQuery({
    queryKey: ['problems'],
    queryFn: fetchProblems,
  });

  if (isLoading) return <p>Loading problems...</p>;
  if (error) return <p>Error fetching problems: {error.message}</p>;

  return (
    <div>
      <h1>Home Page - Solve C# Problems</h1>
      <p>Chapter 1, will add content later for users to read and practice</p>
      <ul>
        {problems?.map((problem) => (
          <li key={problem.id} style={{ marginBottom: '1rem' }}>
            <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
            <span> - {problem.difficulty}</span>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{problem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
