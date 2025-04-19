import React from 'react';
import PageContainer from '@/components/common/PageContainer';
import LoginForm from '@/components/domain/(unauthenticated)/login/LoginForm';

const LoginPage = () => {
  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
};

export default LoginPage;
