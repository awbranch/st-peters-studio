import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaQuestionCircle as icon } from 'react-icons/fa';

export default defineType({
  name: 'faqList',
  title: 'FAQ List',
  type: 'object',
  icon,
  description: 'List of frequently asked questions',
  fields: [
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [defineArrayMember({ type: 'faq' })],
    }),
  ],
  preview: {
    select: { faqs: 'faqs' },
    prepare({ faqs }) {
      return {
        title: 'FAQs List',
        subtitle: faqs?.length && `${faqs.length} Questions`,
        media: icon,
      };
    },
  },
});
