import { defineArrayMember, defineField, defineType } from 'sanity';
import { IoGrid as icon } from 'react-icons/io5';

export default defineType({
  name: 'iconList',
  title: 'Icon List',
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
        title: 'Icon List',
        subtitle: items?.length && `${items?.length} Items`,
        media: icon,
      };
    },
  },
});
