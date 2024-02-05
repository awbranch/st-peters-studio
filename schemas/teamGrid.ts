import { defineField, defineType } from 'sanity';
import { FaUsers as icon } from 'react-icons/fa';

export default defineType({
  name: 'teamGrid',
  title: 'Team Grid',
  type: 'object',
  icon,
  description: 'A grid of team members',
  fields: [
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'teamGridMember' }],
    }),
  ],
  preview: {
    select: { members: 'members' },
    prepare({ members }) {
      return {
        title: 'Team Grid',
        subtitle: members?.length && `${members.length} Members`,
        media: icon,
      };
    },
  },
});
