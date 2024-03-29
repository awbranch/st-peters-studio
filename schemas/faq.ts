import { defineArrayMember, defineField, defineType } from 'sanity';
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
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [
        defineArrayMember(
          createRichTextBlock(['lists', 'decorators', 'links']),
        ),
      ],
      validation: (rule: any) => rule.required(),
    }),
  ],
});
