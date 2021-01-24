import React from 'react';

import Link from '../Link';

const MenuItem = ({ children, to = '/', ...rest }) => {
  return <Link href={to}>{children}</Link>;
};

export default MenuItem;
