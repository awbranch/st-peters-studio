import {defineField, defineType} from 'sanity'
import {FaCubes as icon} from 'react-icons/fa6'
import blocks from './blocks'

export default defineType({
  name: 'shareableBlockSet',
  title: 'Shareable Block Set',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: blocks.filter((b) => b.name !== 'referenceBlock').map((b) => ({type: b.name})),
    }),
  ],
  preview: {
    select: {name: 'name', blocks: 'blocks'},
    prepare({name, blocks}) {
      return {
        title: name,
        subtitle: blocks?.length && `${blocks?.length} Blocks`,
        media: icon,
      }
    },
  },
  orderings: [
    {
      title: 'Name',
      name: 'name',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
})
