import { defineField, defineType } from 'sanity';
import { FaListUl as icon } from 'react-icons/fa';

export default defineType({
  name: 'listSetList',
  title: 'List',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Optional Name for the List',
      type: 'string',
    }),
    defineField({
      name: 'list',
      title: 'List',
      type: 'text',
      validation: (rule: any) => rule.required(),
    }),
  ],
});
