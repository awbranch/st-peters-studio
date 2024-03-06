import { defineField, defineType } from 'sanity';
import { validateVectorImageType } from './utils';

export default defineType({
  name: 'iconListItem',
  title: 'Icon List Item',
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
      validation: (rule: any) =>
        rule.required().assetRequired().custom(validateVectorImageType),
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
      type: 'text',
      validation: (rule: any) => rule.required(),
    }),
  ],
});
