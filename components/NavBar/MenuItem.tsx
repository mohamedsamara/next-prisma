import Link from '../Link';

const MenuItem = ({ children, to = '/' }) => {
  return <Link href={to}>{children}</Link>;
};

export default MenuItem;
