import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaFile as icon } from 'react-icons/fa6';

export default defineType({
  name: 'docsBlock',
  title: 'Documents Block',
  type: 'object',
  icon,
  description: 'List documents',
  fields: [
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [defineArrayMember({ type: 'doc' })],
    }),
  ],
  preview: {
    select: { documents: 'documents' },
    prepare({ documents }) {
      return {
        title: 'Documents Block',
        subtitle: documents?.length && `${documents.length} Documents`,
        media: icon,
      };
    },
  },
});
