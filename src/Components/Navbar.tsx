import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Code Solver
          </Link>
        </Typography>
        <Button color="inherit">
          <Link to="/leaderboard" style={{ color: 'inherit', textDecoration: 'none' }}>
            Leaderboard
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
