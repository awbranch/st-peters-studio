import { defineField, defineType } from 'sanity';
import { FaAddressCard as icon } from 'react-icons/fa6';

export default defineType({
  name: 'contactFormSubject',
  title: 'Icon List Item',
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
      name: 'emailTo',
      title: 'Email To',
      description:
        'List of emails to send messages with this subject to separated by commas.',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { name: 'name', emailTo: 'emailTo' },
    prepare({ name, emailTo }) {
      return {
        title: name,
        subtitle: emailTo,
        media: icon,
      };
    },
  },
});
