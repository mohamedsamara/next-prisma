import { GetStaticProps } from 'next';
import { useQuery } from 'react-query';
import { Stack, Text } from '@chakra-ui/react';

import { server } from '../../constants';
import Head from '../../components/Head';
import Link from '../../components/Link';
import PostList from '../../components/PostList';

export const getStaticProps: GetStaticProps = async context => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  };
};

const getPosts = async () => {
  const res = await fetch(`${server}/api/posts`);
  return await res.json();
};

const Posts = props => {
  const { data } = useQuery('posts', getPosts, { initialData: props.posts });

  return (
    <>
      <Head title='Posts' description='Posts' />
      <Stack direction='row' mb={4} align='center' justify='space-between'>
        <Text fontSize='2xl'>Posts</Text>
        <Link href='/posts/add'>Add Post</Link>
      </Stack>
      <PostList posts={data.posts} linkable />
    </>
  );
};

export default Posts;
