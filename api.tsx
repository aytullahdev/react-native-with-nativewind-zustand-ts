import sanityClient from "./sanity";
let sanityQuery = (query, params?) => sanityClient.fetch(query, params);

export const getCategory = () => {
  return sanityQuery(`*[_type == "category"]`);
};
