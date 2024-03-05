import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaFile as icon } from 'react-icons/fa';
import { validateRasterImageTypes } from './utils';

const pageWidths = [
  { title: 'Large', value: 'lg' },
  { title: 'Medium', value: 'md' },
  { title: 'Small', value: 'sm' },
  { title: 'Extra Small', value: 'xs' },
];

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
      description:
        'The relative path to this page, it should be unique and start with a slash.',
      validation: (rule: any) =>
        rule.required().custom((path: string, context: any) => {
          if (!/^\/[a-z-]*(?:\/[a-z-]+)*$/.test(path)) {
            return 'Paths must start with a forward slash and contain one or more path segments containing lower case letters or dashes, separated by forward slashes.';
          }

          const { document, getClient } = context;
          const client = getClient({ apiVersion: '2023-12-27' });

          const id = document._id.replace(/^drafts\./, '');
          const params = {
            draft: `drafts.${id}`,
            published: id,
            path,
          };
          const query = `*[_type == "page" && !(_id in [$draft, $published]) && path == $path]`;
          return client.fetch(query, params).then((result: []) => {
            return result.length === 0 ? true : 'Paths must be unique';
          });
        }),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The page title to be shown in the browser tab and used for SEO.',
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
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [defineArrayMember({ type: 'pageBlock' })],
    }),
    defineField({
      name: 'description',
      title: 'Search Engine Description',
      type: 'text',
      description:
        'This description is not displayed to the user. Instead this is a concise summary of the pages for search engines to help index the page.',
    }),
    defineField({
      name: 'socialImage',
      title: 'Social Media Preview Image',
      type: 'image',
      description:
        'Optional: When links to this page are shared on social media this preview image will be displayed. If not set, the default social media image set in Header will be displayed for this page.',
      validation: (rule: any) => rule.custom(validateRasterImageTypes),
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: { path: 'path', title: 'title' },
    prepare({ path, title }) {
      return {
        title: path,
        subtitle: title,
        media: icon,
      };
    },
  },
  orderings: [
    {
      title: 'Path',
      name: 'path',
      by: [{ field: 'path', direction: 'asc' }],
    },
  ],
});
