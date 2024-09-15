import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        datePublished: z.date(),
        dateModified: z.date().optional(),
        img: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .optional(),
        ogImage: image().optional(),
        features: z
          .object({
            name: z.string(),
            url: z.string().url(),
          })
          .array()
          .optional(),
      }),
  }),

  pages: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        datePublished: z.date(),
        dateModified: z.date().optional(),
        img: image().array().optional(),
        imgAlt: z.string().optional(),
        ogImage: image().optional(),
      }),
  }),

  work: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        timeline: z.object({
          start: z.string(),
          end: z.string(),
        }),
        img: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .array()
          .optional(),
        video: z
          .object({
            src: z.string(),
            poster: z.string(),
          })
          .array()
          .optional(),
        ogImage: image().optional(),
      }),
  }),

  concerts: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        timeline: z.object({
          start: z.string(),
          end: z.string(),
        }),
        programme: z.string(),
        img: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .array()
          .optional(),
        video: z
          .object({
            src: z.string(),
            poster: z.string(),
          })
          .array()
          .optional(),
        ogImage: image().optional(),
      }),
  }),
 
 
  experiments: defineCollection({
    type: "data",
    schema: () =>
      z.object({
        title: z.string(),
        datePublished: z.date(),
        description: z.string().optional(),
        url: z.string(),
        features: z
          .object({
            name: z.string(),
            url: z.string().url(),
          })
          .array()
          .optional(),
      }),
  }),


  research: defineCollection({
    type: "content",
    schema: ({image}) =>
      z.object({
        title: z.string(),
        datePublished: z.date(),
        ogImage: image().optional(),
        description: z.string(),
        url: z.string(),
        projectLeader: z
          .object({
            name: z.string(),
            url: z.string(),
          })
          .array()
          .optional(),
      }),
  }),

  education: defineCollection({
    type: "content",
    schema: ({image}) =>
      z.object({
        title: z.string(),
        datePublished: z.date(),
        description: z.string(),
        ogImage: image().optional(),
        url: z.string(),
        teacher: z
          .object({
            name: z.string(),
            url: z.string(),
          })
          .array()
          .optional(),
      }),
  }),

  webrings: defineCollection({
    type: "data",
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        prev: z.string().url(),
        next: z.string().url(),
        color: z.string(), // Radix color
      }),
  }),

  badges: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z
        .object({
          img: image(),
          alt: z.string(),
          url: z.string().optional(),
        })
        .array(),
  }),

  now: defineCollection({
    type: "content",
    schema: () =>
      z.object({
        date: z.date(),
      }),
  }),
};
