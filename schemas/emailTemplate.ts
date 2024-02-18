import { defineField, defineType } from 'sanity';
import { AiOutlineForm as icon } from 'react-icons/ai';

export default defineType({
  name: 'emailTemplate',
  title: 'Email Template',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Id of this email template',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'template',
      title: 'Template',
      type: 'text',
      description:
        'Create a template for the email. Keywords: {{firstName}} {{lastName}}.',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { id: 'id.current' },
    prepare({ id }) {
      return {
        title: id,
        media: icon,
      };
    },
  },
});
