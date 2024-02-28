import { defineField, defineType } from 'sanity';
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
      name: 'contact',
      title: 'Contact',
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
      name: 'newsletterLabel',
      title: 'Newsletter Label',
      type: 'string',
      validation: (rule: any) => rule.required(),
      group: 'newsletter',
    }),
    defineField({
      name: 'newsletterUrl',
      title: 'Newsletter Signup Link',
      type: 'string',
      validation: (rule: any) => rule.required(),
      group: 'newsletter',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (rule: any) => rule.required(),
      group: 'logo',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'streetAddress',
      title: 'Street Address',
      type: 'text',
      group: 'contact',
    }),
    defineField({
      name: 'mailingAddress',
      title: 'Mailing Address',
      type: 'text',
      group: 'contact',
    }),
    defineField({
      name: 'socialTitle',
      title: 'Social Title',
      type: 'string',
      group: 'social',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'array',
      of: [{ type: 'social' }],
      group: 'social',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'siteMap',
      title: 'Site Map',
      type: 'array',
      of: [{ type: 'link' }],
      group: 'sitemap',
      validation: (rule: any) => rule.required(),
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
