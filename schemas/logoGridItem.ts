import { defineType } from 'sanity';
import { createImageField } from './utils';
import { FaRegImage } from 'react-icons/fa';

export default defineType({
  name: 'logoGridItem',
  title: 'Logo Grid Item',
  icon: FaRegImage,
  type: 'object',
  fields: [createImageField('image', 'Image', undefined, true)],
  preview: {
    select: { image: 'image' },
    prepare({ image }) {
      return {
        title: image?.alt && image.alt,
        media: image,
      };
    },
  },
});
