import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaBoltLightning as icon, FaLightbulb } from 'react-icons/fa6';
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
  fields: [
    defineField({
      title: 'Tip',
      description:
        'A Call To Action is a large component with an image, text and button that "calls" the user to ' +
        'perform some action such as Learn, Support, or Donate',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: FaLightbulb,
        tone: 'caution',
      },
    }),
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
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        defineArrayMember(createRichTextBlock(['h1', 'decorators', 'links'])),
      ],
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
