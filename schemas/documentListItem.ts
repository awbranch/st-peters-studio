import { defineField, defineType } from 'sanity';
import { FaFile as icon } from 'react-icons/fa6';

export default defineType({
  name: 'documentListItem',
  title: 'Document',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: 'application/pdf, application/zip',
      },
    }),
  ],
});
