import React from 'react';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <Button onClick={signOut}>Sair do Dashboard</Button>
    </div>
  );
};

export default Dashboard;
