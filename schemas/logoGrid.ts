import { defineArrayMember, defineField, defineType } from 'sanity';
import { BsFillGrid3X3GapFill as icon } from "react-icons/bs";

export default defineType({
  name: 'logoGrid',
  title: 'Logo Grid',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'items',
      title: 'Logos',
      type: 'array',
      of: [defineArrayMember({ type: 'logoGridItem' })],
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      description: 'The number of columns to display in the logos (3 to 6).',
      validation: (rule: any) => rule.required().min(3).max(6),
      initialValue: 3,
    }),
  ],
  preview: {
    select: { items: 'items' },
    prepare({ items }) {
      return {
        title: 'Logo Grid',
        subtitle: items?.length && `${items?.length} Logos`,
        media: icon,
      };
    },
  },
});
