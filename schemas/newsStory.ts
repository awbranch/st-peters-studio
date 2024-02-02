import {defineField, defineType} from 'sanity'
import {FaNewspaper as icon} from 'react-icons/fa6'
import {createImageField, createRichTextBlock} from './utils'

export default defineType({
  name: 'newsStory',
  title: 'News Story',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'newsCategory'}],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: (doc: any): any => {
          if (
            doc.title &&
            typeof doc.title === 'string' &&
            doc.date &&
            typeof doc.date === 'string'
          ) {
            return doc.date + '-' + doc.title.toLowerCase().replace(/\s+/g, '-')
          }
        },
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'A short summary that appears with the preview image on the news summary page.',
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('previewImage', 'Preview Image'),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(), createImageField('image', 'Image'), {type: 'buttonRow'}],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Additional Sections',
      type: 'array',
      of: [{type: 'section'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({title, date}) {
      const parts = date.split('-')
      const subtitle = `${parts[1]}/${parts[2]}/${parts[0]}`
      return {
        title,
        subtitle,
        media: icon,
      }
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
})
