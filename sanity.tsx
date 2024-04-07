import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "y39pa4uo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});
const builder = imageBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};

export default client;
