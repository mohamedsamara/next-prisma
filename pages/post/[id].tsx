import { GetStaticPaths, GetStaticProps } from 'next';

import { server } from '../../constants';

import PostContainer from '../../components/PostItem/PostContainer';

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await getPosts();

  const ids = result.posts.map(post => post.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  const result = await getPost(id);

  return {
    props: {
      post: result.post
    }
  };
};

const getPosts = async () => {
  const res = await fetch(`${server}/api/posts`);
  return await res.json();
};

const getPost = async id => {
  const res = await fetch(`${server}/api/post/${id}`);
  return await res.json();
};

const Post = ({ post }) => {
  return <PostContainer key={post.id} post={post} />;
};

export default Post;
