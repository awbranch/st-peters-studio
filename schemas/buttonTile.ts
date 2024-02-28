import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'buttonTile',
  title: 'Button Tile',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
          validation: (rule: any) => rule.required(),
        }),
      ],
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
  ],
});
