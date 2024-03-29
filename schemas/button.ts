import { defineField, defineType } from 'sanity';
import { FaRegHandPointer as icon } from 'react-icons/fa';

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      description:
        'Primary buttons will have a more prominent color. If there are multiple buttons, ' +
        'generally there is only one primary and the rest are secondary.',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Optionally you can add an arrow icon to the button.',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Left Arrow', value: 'left' },
          { title: 'Right Arrow', value: 'right' },
          { title: 'Down Arrow', value: 'down' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),

    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
      link: 'link',
      style: 'style',
    },
    prepare({ label, link, style }) {
      return {
        title: `${label || ''} - (${style || ''})`,
        subtitle: link,
        icon: icon,
      };
    },
  },
});
