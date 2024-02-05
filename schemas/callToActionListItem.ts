import { defineField, defineType } from 'sanity';
import { FaBoltLightning as icon } from 'react-icons/fa6';
import { createImageField, createRichTextBlock } from './utils';

export default defineType({
  name: 'callToActionListItem',
  title: 'Call to Action List Item',
  type: 'object',
  icon,
  description: 'A call to action list item.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['decorators', 'links'])],
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
});
