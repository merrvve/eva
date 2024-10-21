import { defineCollection, z } from "astro:content";

export const collections = {
  

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

  

  homeCategories: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        link: z.string(),
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
          end: z.string().optional(),
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

  
  now: defineCollection({
    type: "content",
    schema: () =>
      z.object({
        startDate: z.date(),
        endDate: z.date().optional(),
        status: z.string().optional()
      }),
  }),
};
