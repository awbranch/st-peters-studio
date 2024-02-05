import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaFistRaised as icon } from 'react-icons/fa';

export default defineType({
  name: 'impactList',
  title: 'Impact List',
  type: 'object',
  icon,
  description: 'List impactful data',
  fields: [
    defineField({
      name: 'impacts',
      title: 'Impacts',
      type: 'array',
      of: [defineArrayMember({ type: 'impact' })],
    }),
  ],
  preview: {
    select: { impacts: 'impacts' },
    prepare({ impacts }) {
      return {
        title: 'Impact List',
        subtitle: impacts?.length && `${impacts?.length} Impact Statements`,
        media: icon,
      };
    },
  },
});
