import { defineField, defineType } from 'sanity';
import { FaImages as icon } from 'react-icons/fa6';

export default defineType({
  name: 'imageTileGridBlock',
  title: 'Image Tile Grid Block',
  type: 'object',
  icon,
  description: 'A grid of large image tiles',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageTile' }],
    }),
  ],
  preview: {
    select: { images: 'images' },
    prepare({ images }) {
      return {
        title: 'Image Tile Grid Block',
        subtitle: images?.length && `${images?.length} Image Tiles`,
        media: icon,
      };
    },
  },
});
