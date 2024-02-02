import { defineArrayMember, defineField, defineType } from 'sanity';
import { IoGrid as icon } from 'react-icons/io5';

export default defineType({
  name: 'iconListBlock',
  title: 'Icon List Block',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({ type: 'iconListItem' })],
    }),
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      return {
        title: 'Icon List Block',
        subtitle: items?.length && `${items?.length} Items`,
        media: icon,
      };
    },
  },
});
