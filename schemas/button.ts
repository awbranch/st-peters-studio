import {defineField, defineType} from 'sanity'
import {FaRegHandPointer as icon} from 'react-icons/fa'
import {userColorList} from './globals'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'color',
      title: 'Color',
      type: 'simplerColor',
      validation: (Rule: any) => Rule.required(),
      initialValue: 'pink',
      options: {
        colorList: userColorList,
      },
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Solid', value: 'solid'},
          {title: 'Outline', value: 'outline'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: any) => Rule.required(),
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Left Arrow', value: 'left'},
          {title: 'Right Arrow', value: 'right'},
          {title: 'Down Arrow', value: 'down'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),

    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
      link: 'link',
    },
    prepare({label, link}) {
      return {
        title: label,
        subtitle: link,
        icon: icon,
      }
    },
  },
})
