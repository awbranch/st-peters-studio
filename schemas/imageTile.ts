import {defineField, defineType} from 'sanity'
import {createImageField} from './utils'

export default defineType({
  name: 'imageTile',
  title: 'Image Tile',
  type: 'object',
  fields: [
    createImageField('image', 'Image'),
    defineField({
      name: 'label',
      title: 'Label',
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
})
