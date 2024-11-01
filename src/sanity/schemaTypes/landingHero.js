// schemas/objects/landingHero.ts
export const landingHero = {
  name: 'landingHero',
  title: 'Landing Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string'
        },
        {
          name: 'link',
          title: 'Link',
          type: 'url'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Landing Hero'
      }
    }
  }
}
