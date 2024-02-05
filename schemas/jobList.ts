import { defineArrayMember, defineField, defineType } from 'sanity';
import { createImageField } from './utils';
import { FaPersonDigging as icon } from 'react-icons/fa6';

export default defineType({
  name: 'jobList',
  title: 'Job List',
  type: 'object',
  icon,
  description: 'A lost of job openings.',
  fields: [
    createImageField('image', 'Image'),
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [defineArrayMember({ type: 'job' })],
    }),
    defineField({
      name: 'eooStatement',
      title: 'EEO Statement',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'noOpenings',
      title: 'No Job Openings',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { jobs: 'jobs' },
    prepare({ jobs }) {
      return {
        title: jobs !== undefined ? `${jobs?.length} Jobs` : 'Job List',
        media: icon,
      };
    },
  },
});
