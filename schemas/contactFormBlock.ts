
import { defineField, defineType } from 'sanity';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';

export default defineType({
  name: 'contactFormBlock',
  title: 'Contact Form Block',
  type: 'object',
  icon,
  description: 'A block that displays the contact form.',
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
