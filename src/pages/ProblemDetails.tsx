import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../components/MonacoEditor';
import { Button, Typography } from '@mui/material';

const ProblemDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [code, setCode] = useState('// Write your C# solution here');

  const handleSubmit = () => {
    console.log('Submitted Code:', code); // Replace with API call later
  };

  return (
    <div>
      <Typography variant="h4">Problem Details</Typography>
      <Typography>You're solving problem with ID: {id}</Typography>

      {/* Code Editor */}
      <CodeEditor value={code} onChange={setCode} />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
      >
        Submit Code
      </Button>
    </div>
  );
};

export default ProblemDetails;
