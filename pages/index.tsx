import { useSession } from 'next-auth/client';
import { Text } from '@chakra-ui/react';

import Head from '../components/Head';

const Index = () => {
  const [session] = useSession();

  return (
    <>
      <Head title='Home Page' description='Home page' />
      {session ? (
        <Text fontSize='2xl'>
          Hello, {session?.user.email ?? session?.user.name}
        </Text>
      ) : (
        <Text fontSize='2xl'>Hello, You are not Logged In</Text>
      )}
    </>
  );
};

export default Index;
