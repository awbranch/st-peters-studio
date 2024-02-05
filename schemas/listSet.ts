import { defineArrayMember, defineField, defineType } from 'sanity';
import { PiTextColumnsBold as icon } from 'react-icons/pi';

export default defineType({
  name: 'listSet',
  title: 'List Set',
  type: 'object',
  icon,
  description: 'A set of one or more named lists, good for wish lists.',
  fields: [
    defineField({
      name: 'lists',
      title: 'Lists',
      type: 'array',
      of: [defineArrayMember({ type: 'listSetList' })],
    }),
  ],
  preview: {
    select: { lists: 'lists' },
    prepare({ lists }) {
      return {
        title: 'List Set',
        subtitle: lists?.length && `${lists.length} Lists`,
        media: icon,
      };
    },
  },
});
