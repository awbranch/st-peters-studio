import { defineField, defineType } from 'sanity';
import { createImageField } from './utils';
import { FaPerson as icon } from 'react-icons/fa6';

export default defineType({
  name: 'teamListMember',
  title: 'Team List Member',
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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description:
        'A better option may be to add a contact link to keep the employees internal email from being available to bots.',
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
    defineField({
      name: 'contact',
      title: 'Contact Link',
      type: 'string',
      description:
        'Add the link to the contact form to reach them e.g. /contact?subject=maintenance',
    }),
  ],
  preview: {
    select: { media: 'image', title: 'name', subtitle: 'title' },
  },
});
