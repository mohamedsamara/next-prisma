import React from 'react';

import NextHead from 'next/head';

const Head = props => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{props.title || ''}</title>
    <meta name='description' content={props.description} />
    <meta charSet='utf-8' />
    <meta
      name='viewport'
      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
    />
    <link rel='icon' type='image/ico' href='/favicon.ico' />
  </NextHead>
);

export default Head;
