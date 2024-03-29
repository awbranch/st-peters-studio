import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaBars } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa';

const actionList = [
  { title: 'Go to Link', value: 'link' },
  { title: 'Display Menu', value: 'menu' },
];

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'action',
      title: 'Action',
      type: 'string',
      initialValue: 'link',
      options: {
        list: actionList,
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link',
      type: 'string',
      hidden: ({ parent }) => !(parent?.action === 'link'),
      validation: (rule: any) =>
        rule.custom((url: any, { parent }: any) => {
          if (!url && parent.action === 'link') {
            return 'Required when Action is "Go to Link"';
          }
          return true;
        }),
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [defineArrayMember({ type: 'link' })],
      hidden: ({ parent }) => !(parent?.action === 'menu'),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      url: 'url',
      action: 'action',
    },
    prepare({ name, url, action }) {
      return {
        title: name,
        subtitle: action === 'link' ? url : 'display menu',
        media: action === 'link' ? FaLink : FaBars,
      };
    },
  },
});
