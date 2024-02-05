import { defineField, defineType } from 'sanity';
import { createImageField } from './utils';
import { FaPerson as icon } from 'react-icons/fa6';

export default defineType({
  name: 'teamGridMember',
  title: 'Team Grid Member',
  type: 'object',
  icon: icon,
  fields: [
    createImageField('image', 'Image'),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
  ],
  preview: {
    select: { media: 'image', title: 'name', subtitle: 'title' },
  },
});
