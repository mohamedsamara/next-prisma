import { Box } from '@chakra-ui/react';

import PostItem from '.';
import Link from '../Link';

const PostContainer = ({ linkable, post }) => {
  if (linkable) {
    return (
      <Box
        bg='gray.50'
        boxShadow='base'
        rounded='md'
        p={['3', '6']}
        overflow='hidden'
      >
        <Link href={`/post/${post.id}`} style={{ display: 'block' }}>
          <PostItem post={post} />
        </Link>
      </Box>
    );
  }

  return (
    <Box
      bg='gray.50'
      boxShadow='base'
      rounded='md'
      p={['3', '6']}
      overflow='hidden'
      display='block'
    >
      <PostItem post={post} />
    </Box>
  );
};

PostContainer.defaultProps = {
  linkable: false
};

export default PostContainer;
