import { defineField, defineType } from 'sanity';
import { FaUsers as icon } from 'react-icons/fa';

export default defineType({
  name: 'teamListBlock',
  title: 'Team List Block',
  type: 'object',
  icon,
  description: 'A list of team members',
  fields: [
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'teamListMember' }],
    }),
  ],
  preview: {
    select: { members: 'members' },
    prepare({ members }) {
      return {
        title: 'Team List Block',
        subtitle: members?.length && `${members.length} Members`,
        media: icon,
      };
    },
  },
});
