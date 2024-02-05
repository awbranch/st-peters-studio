import { defineField, defineType } from 'sanity';
import { FaClipboardList as icon } from 'react-icons/fa';

export default defineType({
  name: 'lunchMenuList',
  title: 'Lunch Menu List',
  type: 'object',
  icon,
  description:
    'Displays a list of upcoming lunch menus, pulled from the global list of Lunches.',
  fields: [
    defineField({
      name: 'tbd',
      title: 'TBD',
      type: 'string',
      description:
        'Message to display when a days menu has not been decided yet.',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Lunch Menu List',
      };
    },
  },
});
