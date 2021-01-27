import { SimpleGrid } from '@chakra-ui/react';

import PostContainer from '../PostItem/PostContainer';

const PostList = ({ posts, linkable }) => {
  return (
    <SimpleGrid columns={1} spacing={10}>
      {posts.map(post => (
        <PostContainer key={post.id} post={post} linkable={linkable} />
      ))}
    </SimpleGrid>
  );
};

export default PostList;
