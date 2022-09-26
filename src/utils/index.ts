export const getNameInitials = (fullName: string): string => {
  let initials = '';

  initials = fullName
    .trim()
    .split(' ')
    .reduce((prev, curr) => `${prev}${curr.charAt(0)}`, initials)
    .slice(0, 2)
    .toUpperCase();

  return initials;
};
