import { defineField, defineType } from 'sanity';
import { createRichTextBlock } from './utils';
import { FaWindowMaximize as icon } from 'react-icons/fa';

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  icon,
  groups: [
    {
      name: 'notification',
      title: 'Notification Bar',
    },
    {
      name: 'navigation',
      title: 'Navigation Bar',
    },
  ],
  fields: [
    defineField({
      name: 'showNotification',
      title: 'Show Notification',
      type: 'boolean',
      group: 'notification',
    }),
    defineField({
      name: 'notificationMessage',
      title: 'Notification Message',
      type: 'array',
      of: [createRichTextBlock(['decorators'])],
      hidden: ({ document }) => !document?.showNotification,
      group: 'notification',
    }),
    defineField({
      name: 'notificationBackground',
      title: 'Notification Background',
      type: 'simplerColor',
      description:
        'The background color for the bar, if not set it defaults to black.',
      group: 'notification',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        }),
      ],
      group: 'navigation',
    }),
    defineField({
      name: 'wideLogo',
      title: 'wideLogo',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        }),
      ],
      group: 'navigation',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'menuItem' }],
      group: 'navigation',
    }),
    defineField({
      name: 'actionButtons',
      title: 'Action Buttons',
      type: 'array',
      of: [{ type: 'button' }],
      group: 'navigation',
      validation: (Rule: any) => Rule.max(1),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      };
    },
  },
});
