import { defineField, defineType } from 'sanity';
import { FaArrowUpRightFromSquare as icon } from 'react-icons/fa6';

export default defineType({
  name: 'supportCategory',
  title: 'Support Category',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
