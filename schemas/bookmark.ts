import { defineField, defineType } from 'sanity';
import { FaBookmark as icon } from 'react-icons/fa6';

export default defineType({
  name: 'bookmark',
  title: 'Bookmark',
  type: 'object',
  icon,
  description: 'Add a bookmark with an id you can link to in the page',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Id of this block in the page.',
      validation: (Rule: any) => Rule.required(),
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
