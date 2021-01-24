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

const Signup = () => {
  const [user, setUser] = useState({});

  const updateUser = e => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const handleOnSignup = e => {
    e.preventDefault();
    console.log('signup');
  };
  return (
    <form onSubmit={handleOnSignup}>
      <Container>
        <Stack direction='column' spacing={6} align='center'>
          <Text fontSize='2xl'>Sign Up</Text>
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
          <FormControl id='name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Name' onChange={updateUser} />
          </FormControl>
          <Button type='submit' size='md'>
            Sign Up
          </Button>
        </Stack>
      </Container>
    </form>
  );
};

export default Signup;
