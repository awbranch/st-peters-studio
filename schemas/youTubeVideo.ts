import { defineField, defineType } from 'sanity';
import { FaYoutube as icon } from 'react-icons/fa6';

export default defineType({
  name: 'youTubeVideo',
  title: 'YouTube Video',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'videoId',
      title: 'Video Id',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { videoId: 'videoId', width: 'width', height: 'height' },
    prepare({ videoId, width, height }) {
      return {
        title: videoId,
        subtitle: `${width} x ${height}`,
        media: icon,
      };
    },
  },
});
