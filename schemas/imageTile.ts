import { defineField, defineType } from 'sanity';
import { createImageField } from './utils';

export default defineType({
  name: 'imageTile',
  title: 'Image Tile',
  type: 'object',
  fields: [
    createImageField('image', 'Image'),
    defineField({
      name: 'label',
      title: 'Label',
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
