import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaFile as icon } from 'react-icons/fa6';

export default defineType({
  name: 'documentList',
  title: 'Document List',
  type: 'object',
  icon,
  description: 'List documents',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({ type: 'documentListItem' })],
    }),
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      return {
        title: 'Document List',
        subtitle: items?.length && `${items.length} Documents`,
        media: icon,
      };
    },
  },
});
