import { defineArrayMember, defineField, defineType } from 'sanity';
import { MdOutlineChecklistRtl as icon } from 'react-icons/md';

export default defineType({
  name: 'callToActionList',
  title: 'Call to Action List',
  type: 'object',
  icon,
  description: 'A list of call to actions.',
  fields: [
    defineField({
      name: 'items',
      title: 'Call to Actions',
      type: 'array',
      of: [defineArrayMember({ type: 'callToActionListItem' })],
    }),
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      return {
        title: 'Call to Action List',
        subtitle: items?.length && `${items.length} CTAs`,
        media: icon,
      };
    },
  },
});
