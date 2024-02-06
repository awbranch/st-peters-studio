import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaImages as icon } from 'react-icons/fa6';

export default defineType({
  name: 'imageTileGrid',
  title: 'Image Tile Grid',
  type: 'object',
  icon,
  description: 'A grid of large image tiles',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember({ type: 'imageTile' })],
    }),
  ],
  preview: {
    select: { images: 'images' },
    prepare({ images }) {
      return {
        title: 'Image Tile Grid',
        subtitle: images?.length && `${images?.length} Image Tiles`,
        media: icon,
      };
    },
  },
});
