export const getDate = d => {
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  const date = new Date(d);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
