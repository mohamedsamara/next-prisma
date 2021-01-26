import { useState } from 'react';

import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Text,
  useToast,
  Flex
} from '@chakra-ui/react';

import { server } from '../../constants';
import Head from '../../components/Head';
import Button from '../../components/Button';

const AddPost = () => {
  const router = useRouter();
  const toast = useToast();
  const { mutate } = useMutation(() => addPost(), {
    onError: error => {
      toast({
        title: 'Something went wrong. Please Try Again!',
        status: 'error',
        duration: 2000,
        isClosable: true
      });
    },
    onSuccess: result => {
      if (!result.success) {
        let title = 'Something went wrong. Please Try Again!';
        if (!result.logged) {
          title = 'You are not logged in. Please log in and try again.';
        }

        toast({
          title,
          status: 'error',
          duration: 2000,
          isClosable: true
        });

        return;
      }

      toast({
        title: 'Post was added successfully!',
        status: 'success',
        duration: 2000,
        isClosable: true
      });
      setPost({
        title: '',
        content: ''
      });
    }
  });
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  const addPost = async () => {
    const res = await fetch(`${server}/api/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' }
    });

    return await res.json();
  };

  const updatePost = e => {
    setPost({
      ...post,
      [e.target.id]: e.target.value
    });
  };

  const handleOnAddPost = e => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
      <Head title='Add Post' description='Add Post' />
      <form onSubmit={handleOnAddPost}>
        <Stack direction='column' spacing={6} align='center'>
          <Text fontSize='2xl'>Add Post</Text>
          <FormControl id='title' isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder='Title'
              onChange={updatePost}
              value={post.title}
            />
          </FormControl>
          <FormControl id='content' isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea
              placeholder='Content'
              onChange={updatePost}
              value={post.content}
            />
          </FormControl>
          <Flex width='100%'>
            <Button type='submit' size='md'>
              Add Post
            </Button>
            <Button ml='2' size='md' onClick={() => router.push('/posts')}>
              Cancel
            </Button>
          </Flex>
        </Stack>
      </form>
    </>
  );
};

export default AddPost;
