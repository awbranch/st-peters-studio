import { defineField, defineType } from 'sanity';
import { FaBookmark as icon, FaLightbulb } from 'react-icons/fa6';

export default defineType({
  name: 'bookmark',
  title: 'Bookmark',
  type: 'object',
  icon,
  description: 'Add a bookmark with an id you can link to in the page',
  fields: [
    defineField({
      title: 'Tip',
      description:
        'A bookmark is useful when you want to link to the middle of a long article. ' +
        'The bookmark will add a named hash tag that you can then link to on the URL for example /about#history.',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: FaLightbulb,
        tone: 'caution',
      },
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Id of this block in the page.',
      validation: (rule: any) => rule.required(),
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: id?.current ? '#' + id.current : '',
        media: icon,
      };
    },
  },
});
