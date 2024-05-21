import { defineField, defineType } from 'sanity';
import { FaJs as icon } from 'react-icons/fa6';

export default defineType({
  name: 'script',
  title: 'Script',
  type: 'object',
  description: 'A block of embedded javascript in a <script> tag.',
  icon,
  fields: [
    defineField({
      name: 'code',
      title: 'Embed Code',
      type: 'text',
      validation: (rule: any) => rule.required(),
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Script',
        media: icon,
      };
    },
  },
});
