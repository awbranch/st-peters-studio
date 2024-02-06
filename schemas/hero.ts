import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  createImageField,
  createRichTextBlock,
  getFirstBlockText,
} from './utils';
import { FaCircleExclamation as icon } from 'react-icons/fa6';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon,
  description:
    'Displays a large image and text that typically appears at the top of a webpage.',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['h1', 'decorators', 'links', 'textColor'])],
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'button' })],
    }),
  ],
  preview: {
    select: { text: 'text', image: 'image' },
    prepare({ text, image }) {
      return {
        title: 'Hero',
        subtitle: getFirstBlockText(text),
        media: image,
      };
    },
  },
});
