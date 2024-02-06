import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaWindowMinimize as icon } from 'react-icons/fa';

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon,
  groups: [
    {
      name: 'newsletter',
      title: 'Newsletter',
    },
    {
      name: 'logo',
      title: 'Logo',
    },
    {
      name: 'address',
      title: 'Address',
    },
    {
      name: 'social',
      title: 'Social Media',
    },
    {
      name: 'sitemap',
      title: 'SiteMap',
    },
  ],
  fields: [
    defineField({
      name: 'newsletterSignupTitle',
      title: 'Newsletter Signup Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'newsletter',
    }),
    defineField({
      name: 'pastNewslettersMessage',
      title: 'Past Newsletters',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Small', value: 'h6' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
      group: 'newsletter',
    }),
    defineField({
      name: 'newsletterConfig',
      title: 'Newsletter Configuration',
      type: 'text',
      rows: 10,
      validation: (Rule: any) => Rule.required(),
      group: 'newsletter',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      group: 'logo',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: (Rule) => Rule.required(),
      group: 'address',
    }),
    defineField({
      name: 'socialTitle',
      title: 'Social Title',
      type: 'string',
      group: 'social',
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'array',
      of: [{ type: 'social' }],
      group: 'social',
    }),
    defineField({
      name: 'siteMap',
      title: 'Site Map',
      type: 'array',
      of: [{ type: 'link' }],
      group: 'sitemap',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      };
    },
  },
});
