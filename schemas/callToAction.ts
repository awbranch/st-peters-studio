import { defineField, defineType } from 'sanity';
import { FaBoltLightning as icon } from 'react-icons/fa6';
import {
  createImageField,
  createRichTextBlock,
  getFirstBlockText,
} from './utils';

export default defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  icon,
  description: 'A large call to action that is displayed landscape.',
  fields: [
    defineField({
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['h1', 'decorators', 'links'])],
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
  preview: {
    select: { text: 'text', image: 'image' },
    prepare({ text, image }) {
      return {
        title: 'Call to Action Block',
        subtitle: getFirstBlockText(text),
        media: image,
      };
    },
  },
});
