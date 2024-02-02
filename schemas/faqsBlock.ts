import { defineField, defineType } from 'sanity';
import { FaQuestionCircle as icon } from 'react-icons/fa';

export default defineType({
  name: 'faqsBlock',
  title: 'FAQs Block',
  type: 'object',
  icon,
  description: 'List of frequently asked questions',
  fields: [
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faq' }],
    }),
  ],
  preview: {
    select: { faqs: 'faqs' },
    prepare({ faqs }) {
      return {
        title: 'FAQs Block',
        subtitle: faqs?.length && `${faqs.length} Questions`,
        media: icon,
      };
    },
  },
});
