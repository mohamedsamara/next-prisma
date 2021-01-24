import React, { useState } from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Container
} from '@chakra-ui/react';

import Button from '../components/Button';

const Login = () => {
  const [user, setUser] = useState({});

  const updateUser = e => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const handleOnLogin = e => {
    e.preventDefault();
    console.log('login');
  };

  return (
    <form onSubmit={handleOnLogin}>
      <Container>
        <Stack direction='column' spacing={6} align='center'>
          <Text fontSize='2xl'>Sign In</Text>
          <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='Email' onChange={updateUser} />
          </FormControl>
          <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              placeholder='Password'
              onChange={updateUser}
            />
          </FormControl>
          <Button type='submit' size='md'>
            Sign In
          </Button>
        </Stack>
      </Container>
    </form>
  );
};

export default Login;
