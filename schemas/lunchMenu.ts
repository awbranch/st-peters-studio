import { defineField, defineType } from 'sanity';
import { FaClipboardList as icon } from 'react-icons/fa';

export default defineType({
  name: 'lunchMenu',
  title: 'Lunch Menus',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'text',
      validation: (rule: any) => rule.required(),
    }),
  ],
  preview: {
    select: {
      date: 'date',
    },
    prepare({ date }) {
      const parts = date.split('-');
      return {
        title: `${parts[1]}/${parts[2]}/${parts[0]}`,
      };
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
});
