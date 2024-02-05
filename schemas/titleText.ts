import { defineField, defineType } from 'sanity';
import { createRichTextBlock, getFirstBlockText } from './utils';
import { FaAlignJustify as icon } from 'react-icons/fa6';

export default defineType({
  name: 'titleText',
  title: 'Title Text',
  type: 'object',
  icon,
  description: 'Display short form text such as titles.',
  fields: [
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
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
      of: [
        createRichTextBlock([
          'h1',
          'subtitle',
          'small',
          'decorators',
          'links',
          'textColor',
        ]),
      ],
    }),
  ],
  preview: {
    select: { text: 'text' },
    prepare({ text }) {
      return {
        title: 'Text',
        subtitle: getFirstBlockText(text),
      };
    },
  },
});
