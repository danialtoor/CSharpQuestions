import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProblemDetails } from '../services/mockapi';
import CodeEditor from '../components/MonacoEditor';
import { Button, Typography } from '@mui/material';

const ProblemDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: problem, isLoading, error } = useQuery({
    queryKey: ['problemDetails', id],
    queryFn: () => fetchProblemDetails(id!),
    enabled: !!id, // Prevent query if `id` is undefined
  });

  const [code, setCode] = React.useState(`class Program 
{
    static void Main(string[] args)
    {
        //Write Your Code Here
    }
}`);

  const handleSubmit = () => {
    console.log('Submitted Code:', code);
  };

  if (isLoading) return <p>Loading problem details...</p>;
  if (error) return <p>Error fetching problem details</p>;
  if (!problem) return <p>Problem not found</p>;

  return (
    <div>
      <Typography variant="h4">{problem.title}</Typography>
      <Typography>{problem.difficulty} Problem, Problem Id: {problem.id}</Typography>
      <Typography sx={{ marginTop: 2 }}>{problem.description}</Typography>
      <CodeEditor value={code} onChange={setCode} />
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
