import { defineField, defineType } from 'sanity';
import { FaQuestionCircle as icon } from 'react-icons/fa';
import { createRichTextBlock } from './utils';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [createRichTextBlock(['lists', 'decorators', 'links', 'textColor'])],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
