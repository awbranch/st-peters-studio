import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaGear as icon } from 'react-icons/fa6';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Search Engine Description',
      type: 'text',
      description:
        'This description is not displayed to the user. This is the default summary of any page in the website if one is not set at the page level. It is used for search engines to help index the page.',
    }),

    defineField({
      name: 'redirects',
      title: 'Redirects',
      type: 'array',
      of: [defineArrayMember({ type: 'redirect' })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      };
    },
  },
});
