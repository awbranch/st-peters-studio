import {defineField, defineType} from 'sanity'
import {FaFile as icon} from 'react-icons/fa'

const pageWidths = [
  {title: 'Large', value: 'lg'},
  {title: 'Medium', value: 'md'},
  {title: 'Small', value: 'sm'},
  {title: 'Extra Small', value: 'xs'},
]

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'path',
      title: 'Path',
      type: 'string',
      description: 'The relative path to this page, it should be unique and start with a slash.',
      validation: (Rule: any) =>
        Rule.required().custom((path: string, context: any) => {
          if (!/^\/[a-z-]*(?:\/[a-z-]+)*$/.test(path)) {
            return 'Paths must start with a forward slash and contain one or more path segments containing lower case letters or dashes, separated by forward slashes.'
          }

          const {document, getClient} = context
          const client = getClient({apiVersion: '2023-12-27'})

          const id = document._id.replace(/^drafts\./, '')
          const params = {
            draft: `drafts.${id}`,
            published: id,
            path,
          }
          const query = `*[_type == "page" && !(_id in [$draft, $published]) && path == $path]`
          return client.fetch(query, params).then((result: []) => {
            return result.length === 0 ? true : 'Paths must be unique'
          })
        }),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The page title to be shown in the browser tab and used for SEO.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'A concise summary of the pages content for search engine results and user previews.',
    }),
    defineField({
      title: 'Max Width',
      name: 'maxWidth',
      type: 'string',
      initialValue: 'md',
      options: {
        list: pageWidths,
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'section'}],
    }),
  ],
  preview: {
    select: {path: 'path', title: 'title'},
    prepare({path, title}) {
      return {
        title: path,
        subtitle: title,
        media: icon,
      }
    },
  },
  orderings: [
    {
      title: 'Path',
      name: 'path',
      by: [{field: 'path', direction: 'asc'}],
    },
  ],
})
