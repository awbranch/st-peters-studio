import {defineField, defineType} from 'sanity'
import {createImageField} from './utils'
import {FaPerson as icon} from 'react-icons/fa6'

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
        'Only add the staff1 member\'s email if you want to show the "contact" button under their bio.',
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
    select: {media: 'image', title: 'name', subtitle: 'title'},
  },
})
