import { defineField, defineType, defineArrayMember } from 'sanity';
import { PiDotsThreeOutline as icon } from 'react-icons/pi';
import { FaLightbulb } from 'react-icons/fa6';

export default defineType({
  name: 'buttonRow',
  title: 'Button Row',
  type: 'object',
  icon,
  description: 'A row of buttons',
  fields: [
    defineField({
      title: 'Tip',
      description:
        'Add one or more buttons in a row where each button has a link to another page. ' +
        'This is useful when you want to direct a user to navigate to some other ' +
        'page in the site or on some other site.',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: FaLightbulb,
        tone: 'caution',
      },
    }),
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
      validation: (rule: any) => rule.required(),
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
