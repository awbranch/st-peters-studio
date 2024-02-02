import {defineArrayMember, defineField, defineType} from 'sanity'
import {userColorList} from './globals'
import SectionPreview from './SectionPreview'
import blocks from './blocks'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Id of this section in the page.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'simplerColor',
      options: {
        colorList: userColorList,
      },
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: blocks.map((b) => defineArrayMember({type: b.name})),
    }),
  ],
  preview: {
    select: {id: 'id', background: 'background', blocks: 'blocks'},
    prepare({id, background, blocks}) {
      return {
        title: `#${id?.current}`,
        subtitle: `${blocks?.length || '0'} blocks`,
        media: <SectionPreview color={background?.value} />,
      }
    },
  },
})
