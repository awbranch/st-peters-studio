import { defineType } from 'sanity';
import { createImageField } from './utils';
import { FaImage } from 'react-icons/fa';

export default defineType({
  name: 'imageGalleryItem',
  title: 'Image Gallery Item',
  icon: FaImage,
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
