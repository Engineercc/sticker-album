const paginate = (users) => {
  let itemsPerPage = 18;
  let itemFirstPage = 9;
  const page = Math.ceil(users.length / itemsPerPage);
  const newFollowers = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage;
    if (start === 0) {
      return users.slice(start, itemFirstPage);
    } else {
      return users.slice(start, start + itemsPerPage);
    }
  });
  return newFollowers;
};

export default paginate;
