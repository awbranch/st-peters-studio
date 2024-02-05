import { defineField, defineType } from 'sanity';
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
      of: [{ type: 'contactFormSubject' }],
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
