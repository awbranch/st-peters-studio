import { defineField, defineType } from 'sanity';
import { FaBolt as icon } from 'react-icons/fa6';

export default defineType({
  name: 'action',
  title: 'Action',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      link: 'link',
    },
    prepare({ name, link }) {
      return {
        title: name,
        subtitle: link,
        icon: icon,
      };
    },
  },
});
