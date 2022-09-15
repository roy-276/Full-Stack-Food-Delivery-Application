import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "vnv3hvl2",
    dataset: 'production',
    apiVersion: "2022-08-24",
    useCdn: true,
    token: "skl4MDDPEkDkk3PbkqmGJBzgBnKq3ztLashsTh8EQSEeMEZPnlYHziJG4hWkwOVSIrrM2Q6lFTiizrORJ0j5fdPJMprUUPqyLAdxHeIaDkH0EHZI9JpMnWUrGQ7BxdPAIBOg5wxugN8FPljqfH3lUnolkKIX5k9evUkRgkuojkklF2emNq8I"
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);