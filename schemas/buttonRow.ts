import { defineField, defineType, defineArrayMember } from 'sanity';
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
      of: [defineArrayMember({ type: 'button' })],
    }),
  ],
  preview: {
    select: { buttons: 'buttons' },
    prepare({ buttons }) {
      return {
        title: 'Button Row',
        subtitle: buttons?.length && `${buttons.length} Buttons`,
        media: icon,
      };
    },
  },
});
