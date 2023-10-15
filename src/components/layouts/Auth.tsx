import { FC } from 'react';
import { ChevronLeft } from 'react-bootstrap-icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Flex, Heading, IconButton } from '@chakra-ui/react';
import PageHeader from '@/components/layouts/parts/PageHeader';

const AuthLayout: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <PageHeader>
        <Flex w="100%" position="relative" justifyContent="center" alignItems="center">
          <IconButton
            aria-label="Back"
            position="absolute"
            left={0}
            variant="ghost"
            icon={<ChevronLeft fontSize={24} />}
            onClick={() => navigate(-1)}
          />

          <Heading fontSize="xl" fontWeight={500}>
            {pathname.includes('login') && '로그인'}
            {pathname.includes('join') && '회원가입'}
          </Heading>
        </Flex>
      </PageHeader>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;