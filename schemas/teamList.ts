import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaUsers as icon } from 'react-icons/fa';

export default defineType({
  name: 'teamList',
  title: 'Team List',
  type: 'object',
  icon,
  description: 'A list of team members',
  fields: [
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [defineArrayMember({ type: 'teamListMember' })],
    }),
  ],
  preview: {
    select: { members: 'members' },
    prepare({ members }) {
      return {
        title: 'Team List',
        subtitle: members?.length && `${members.length} Members`,
        media: icon,
      };
    },
  },
});
