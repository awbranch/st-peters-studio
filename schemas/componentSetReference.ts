import { defineField, defineType } from 'sanity';
import { FaShareSquare as icon } from 'react-icons/fa';

export default defineType({
  name: 'componentSetReference',
  title: 'Component Set Reference',
  type: 'object',
  icon,
  description: 'A reference to a shared component set.',
  fields: [
    defineField({
      name: 'componentSet',
      title: 'Sharable Component Set',
      type: 'reference',
      to: [{ type: 'componentSet' }],
      validation: (Rule: any) => Rule.required(),
      options: {
        disableNew: true,
      },
    }),
  ],
  preview: {
    select: { name: 'componentSet.name' },
    prepare({ name }) {
      return {
        title: `Component Set Reference`,
        subtitle: name,
        media: icon,
      };
    },
  },
});
