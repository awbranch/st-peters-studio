import { defineField, defineType } from 'sanity';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';

export default defineType({
  name: 'volunteerForm',
  title: 'Volunteer Form',
  type: 'object',
  icon,
  description: 'A block that displays the volunteering form.',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description:
        'The email address that is sent the volunteering form message.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'confSubject',
      title: 'Confirmation Email Subject',
      type: 'string',
      description:
        'Subject for the email that will be sent out confirming the receipt of the message.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'confTemplate',
      title: 'Confirmation Email Template',
      type: 'text',
      description:
        'Template for the email that will be sent out confirming the receipt of the message. Keywords: {{firstName}} {{lastName}}.',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { tbd: 'tbd' },
    prepare({ tbd }) {
      return {
        title: 'Volunteer Form',
        subtitle: tbd,
        media: icon,
      };
    },
  },
});
