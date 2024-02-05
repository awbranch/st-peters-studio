import { defineField, defineType } from 'sanity';
import {
  createImageField,
  createRichTextBlock,
  getFirstBlockText,
} from './utils';
import { FaRegFileAlt as icon } from 'react-icons/fa';

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'object',
  icon,
  description: 'Display long form text with embedded images.',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        createRichTextBlock(),
        createImageField('image', 'Image'),
        { type: 'buttonRow' },
        { type: 'bookmark' },
      ],
    }),
  ],
  preview: {
    select: { text: 'text' },
    prepare({ text }) {
      return {
        title: 'Article',
        subtitle: getFirstBlockText(text),
      };
    },
  },
});
