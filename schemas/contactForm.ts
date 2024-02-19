import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';

export default defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  icon,
  description: 'Displays the contact form.',
  fields: [
    defineField({
      name: 'catchAllEmail',
      title: 'Catch All Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [defineArrayMember({ type: 'contactFormSubject' })],
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
    select: { subjects: 'subjects' },
    prepare({ subjects }) {
      return {
        title: 'Contact Form',
        subtitle: subjects ? `${subjects.length} Subjects` : '',
        media: icon,
      };
    },
  },
});
