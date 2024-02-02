import { defineField, defineType } from 'sanity';
import { PiDotsThreeOutline as icon } from 'react-icons/pi';

export default defineType({
  name: 'buttonRow',
  title: 'Button Row',
  type: 'object',
  icon,
  description: 'A row of buttons',
  fields: [
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
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
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Button Row',
        media: icon,
      };
    },
  },
});
