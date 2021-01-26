import { useQuery } from 'react-query';
import {
  SimpleGrid,
  Grid,
  GridItem,
  Box,
  Stack,
  Container,
  Heading,
  Text
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

const Blog = props => {
  const { data } = useQuery('posts', getPosts, { initialData: props.posts });

  console.log({ data });

  return (
    <>
      <Head title='Posts' description='Posts' />

      <Container>
        <Stack direction='row' mb={4} align='center' justify='space-between'>
          <Text fontSize='2xl'>Posts</Text>
          <Link href='/posts/add'>Add Post</Link>
        </Stack>

        <SimpleGrid columns={1} spacing={10}>
          {data.map(post => (
            <Box
              key={post.id}
              bg='gray.50'
              boxShadow='base'
              rounded='md'
              p='6'
              overflow='hidden'
            >
              <Heading as='h4' size='md' isTruncated={true} noOfLines={1}>
                {post.title}
              </Heading>

              <Text fontSize='lg' isTruncated={true} noOfLines={2}>
                {post.content}
              </Text>

              <Grid
                templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
                gap={2}
                alignItems='center'
              >
                <GridItem>
                  <Text fontSize='md' isTruncated={true} noOfLines={2} mt='2'>
                    Published on
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontSize='sm' textAlign='right'>
                    <time dateTime={post.createdAt}>
                      {getDate(post.createdAt)}
                    </time>
                  </Text>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Blog;
