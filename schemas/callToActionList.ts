import { defineArrayMember, defineField, defineType } from 'sanity';
import { MdOutlineChecklistRtl as icon } from 'react-icons/md';
import { FaLightbulb } from 'react-icons/fa6';

export default defineType({
  name: 'callToActionList',
  title: 'Call to Action List',
  type: 'object',
  icon,
  description: 'A list of call to actions.',
  fields: [
    defineField({
      title: 'Tip',
      description:
        'A Call To Action list is a list of items containing an image, text and button where the button is calling ' +
        'the user to perform some action, such as Learn, Support, or Donate.',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: FaLightbulb,
        tone: 'caution',
      },
    }),
    defineField({
      name: 'items',
      title: 'Call to Actions',
      type: 'array',
      of: [defineArrayMember({ type: 'callToActionListItem' })],
    }),
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      return {
        title: 'Call to Action List',
        subtitle: items?.length && `${items.length} CTAs`,
        media: icon,
      };
    },
  },
});
