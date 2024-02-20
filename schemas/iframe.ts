import { defineField, defineType } from 'sanity';
import { FaRegSquare as icon } from 'react-icons/fa6';

export default defineType({
  name: 'iframe',
  title: 'Iframe',
  type: 'object',
  description: 'A box that contains an iframe.',
  icon,
  fields: [
    defineField({
      name: 'code',
      title: 'Embed Code',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Iframe',
        media: icon,
      };
    },
  },
});
