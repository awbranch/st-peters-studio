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
