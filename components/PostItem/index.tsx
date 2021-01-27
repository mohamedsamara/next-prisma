import { Stack, Heading, Text, Avatar } from '@chakra-ui/react';

import { getDate } from '../../helpers';

const PostItem = ({ post }) => {
  return (
    <>
      <Heading as='h4' size='md' isTruncated={true} noOfLines={1}>
        {post.title}
      </Heading>
      <Text fontSize='lg' isTruncated={true} noOfLines={2}>
        {post.content}
      </Text>
      <Stack direction='row' align='center' mt='3'>
        <Avatar name={post.author?.name} size='sm' src={post.author?.image} />
        <Text fontSize='sm' textAlign='right' isTruncated={true} noOfLines={1}>
          {post.author?.name}
        </Text>
        <Text fontSize='sm' textAlign='right' isTruncated={true} noOfLines={1}>
          <time dateTime={post.createdAt}>{getDate(post.createdAt)}</time>
        </Text>
      </Stack>
    </>
  );
};

export default PostItem;
