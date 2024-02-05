import { defineField, defineType } from 'sanity';
import { FaCubes as icon } from 'react-icons/fa6';
import components from './components';

export default defineType({
  name: 'componentSet',
  title: 'Component Set',
  description: 'A set of components that is sharable',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      of: components
        .filter((c) => c.name !== 'componentSetReference')
        .map((c) => ({ type: c.name })),
    }),
  ],
  preview: {
    select: { name: 'name', components: 'components' },
    prepare({ name, components }) {
      return {
        title: name,
        subtitle: components?.length && `${components?.length} Components`,
        media: icon,
      };
    },
  },
  orderings: [
    {
      title: 'Name',
      name: 'name',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
});
