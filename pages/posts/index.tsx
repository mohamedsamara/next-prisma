import { useQuery } from 'react-query';
import {
  SimpleGrid,
  Box,
  Stack,
  Heading,
  Text,
  Avatar
} from '@chakra-ui/react';

import { server } from '../../constants';
import { getDate } from '../../helpers';
import Head from '../../components/Head';
import Link from '../../components/Link';

export async function getStaticProps() {
  const posts = await getPosts();
  return { props: { posts } };
}

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

      <SimpleGrid columns={1} spacing={10}>
        {data.posts.map(post => (
          <Box
            key={post.id}
            bg='gray.50'
            boxShadow='base'
            rounded='md'
            p={['3', '6']}
            overflow='hidden'
          >
            <Heading as='h4' size='md' isTruncated={true} noOfLines={1}>
              {post.title}
            </Heading>

            <Text fontSize='lg' isTruncated={true} noOfLines={2}>
              {post.content}
            </Text>

            <Stack direction='row' align='center' mt='3'>
              <Avatar
                name={post.author?.name}
                size='sm'
                src={post.author?.image}
              />
              <Text
                fontSize='sm'
                textAlign='right'
                isTruncated={true}
                noOfLines={1}
              >
                {post.author?.name}
              </Text>
              <Text
                fontSize='sm'
                textAlign='right'
                isTruncated={true}
                noOfLines={1}
              >
                <time dateTime={post.createdAt}>{getDate(post.createdAt)}</time>
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Posts;
