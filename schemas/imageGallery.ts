import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaImages as icon } from 'react-icons/fa6';

export default defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({ type: 'imageGalleryItem' })],
    }),

    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      description: 'The number of columns to display in the gallary (2 to 4).',
      validation: (rule: any) => rule.required().min(2).max(4),
      initialValue: 2,
    }),
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      return {
        title: 'Image Gallery',
        subtitle: items?.length && `${items?.length} Images`,
        media: icon,
      };
    },
  },
});
