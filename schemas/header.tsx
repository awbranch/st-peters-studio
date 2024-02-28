import { defineArrayMember, defineField, defineType } from 'sanity';
import { createPaletteField, createRichTextBlock } from './utils';
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
      of: [defineArrayMember(createRichTextBlock(['decorators']))],
      hidden: ({ document }) => !document?.showNotification,
      group: 'notification',
    }),
    createPaletteField('notificationPalette', 'Notification Palette'),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (rule: any) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
          validation: (rule: any) => rule.required(),
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
          validation: (rule: any) => rule.required(),
        }),
      ],
      group: 'navigation',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [defineArrayMember({ type: 'menuItem' })],
      group: 'navigation',
    }),
    defineField({
      name: 'actionButtons',
      title: 'Action Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'button' })],
      group: 'navigation',
      validation: (rule: any) => rule.max(1),
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
