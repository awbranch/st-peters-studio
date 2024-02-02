import { defineField, defineType } from 'sanity';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';

export default defineType({
  name: 'volunteerFormBlock',
  title: 'Volunteer Form Block',
  type: 'object',
  icon,
  description: 'A block that displays a form.',
  fields: [
    defineField({
      name: 'tbd',
      title: 'TBD',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { tbd: 'tbd' },
    prepare({ tbd }) {
      return {
        title: 'Volunteer Form Block',
        subtitle: tbd,
        media: icon,
      };
    },
  },
});
