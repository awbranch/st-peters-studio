import { defineField, defineType } from 'sanity';
import { FaShareSquare as icon } from 'react-icons/fa';

export default defineType({
  name: 'referenceBlock',
  title: 'Reference Block',
  type: 'object',
  icon,
  description: 'A block that references a shareable block set.',
  fields: [
    defineField({
      name: 'blockSet',
      title: 'Sharable Block Set',
      type: 'reference',
      to: [{ type: 'shareableBlockSet' }],
      validation: (Rule: any) => Rule.required(),
      options: {
        disableNew: true,
      },
    }),
  ],
  preview: {
    select: { name: 'blockSet.name' },
    prepare({ name }) {
      return {
        title: `Reference Block`,
        subtitle: name,
        media: icon,
      };
    },
  },
});
