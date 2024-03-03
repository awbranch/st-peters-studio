import { defineArrayMember, defineField, defineType, Image } from 'sanity';
import { createPaletteField, createRichTextBlock } from './utils';
import { FaWindowMaximize as icon } from 'react-icons/fa';
import { getExtension } from '@sanity/asset-utils';

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
      validation: (rule: any) =>
        rule
          .required()
          .assetRequired()
          .custom((value: Image) => {
            if (!value || !value.asset) {
              return true;
            }

            const filetype = getExtension(value.asset._ref);
            if (filetype !== 'svg') {
              return 'Image must be an SVG';
            }

            return true;
          }),
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
      title: 'Wide Logo',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
          validation: (rule: any) =>
            rule.required().custom((value: Image) => {
              if (!value || !value.asset) {
                return true;
              }

              const filetype = getExtension(value.asset._ref);
              if (filetype !== 'svg') {
                return 'Image must be an SVG';
              }

              return true;
            }),
        }),
      ],
      group: 'navigation',
      validation: (rule: any) => rule.required().assetRequired(),
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
