import { signIn, signOut, useSession } from 'next-auth/client';

import Head from '../components/Head';

const Index = () => {
  const [session, loading] = useSession();
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log({ session });

  if (session) {
    return (
      <div>
        Hello, {session.user.email ?? session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <>
      <Head title='Home Page' description='Home page' />
      <div>Home</div>
    </>
  );
};

export default Index;
