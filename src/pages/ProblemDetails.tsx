import React from 'react';
import { useParams } from 'react-router-dom';

const ProblemDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the problem ID from the URL

  return (
    <div>
      <h1>Problem Details</h1>
      <p>You're solving problem with ID: {id}</p>
      {/* In the future, fetch and display the problem details */}
    </div>
  );
};

export default ProblemDetails;