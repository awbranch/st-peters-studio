import { defineArrayMember, defineField, defineType } from 'sanity';
import { MdOutlineChecklistRtl as icon } from 'react-icons/md';

export default defineType({
  name: 'ctaListBlock',
  title: 'Call to Action List Block',
  type: 'object',
  icon,
  description: 'A list of call to actions.',
  fields: [
    defineField({
      name: 'ctas',
      title: 'Call to Actions',
      type: 'array',
      of: [defineArrayMember({ type: 'cta' })],
    }),
  ],
  preview: {
    select: { ctas: 'ctas' },
    prepare({ ctas }) {
      return {
        title: 'Call to Action List Block',
        subtitle: ctas?.length && `${ctas.length} CTAs`,
        media: icon,
      };
    },
  },
});
