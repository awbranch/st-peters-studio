import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa6';

export default defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  icon,
  description: 'Displays the contact form.',
  fields: [
    defineField({
      title: 'Tip',
      description:
        'A contact form can have one or more subjects that are contacted when the form is submitted.',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: FaLightbulb,
        tone: 'caution',
      },
    }),
    defineField({
      name: 'catchAllEmail',
      title: 'Catch All Email',
      type: 'string',
      validation: (rule: any) => rule.required(),
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
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'confTemplate',
      title: 'Confirmation Email Template',
      type: 'text',
      description:
        'Template for the email that will be sent out confirming the receipt of the message. Keywords: {{firstName}} {{lastName}}.',
      validation: (rule: any) => rule.required(),
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
