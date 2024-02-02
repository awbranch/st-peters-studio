import { defineField, defineType } from 'sanity';
import { FaRegSquare as icon } from 'react-icons/fa6';

export default defineType({
  name: 'iframeBlock',
  title: 'Iframe Block',
  type: 'object',
  description: 'A block that contains an iframe.',
  icon,
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Iframe Block',
        media: icon,
      };
    },
  },
});
