export const setID = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
  );
};
