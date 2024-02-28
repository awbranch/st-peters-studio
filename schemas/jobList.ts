import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaPersonDigging as icon } from 'react-icons/fa6';

export default defineType({
  name: 'jobList',
  title: 'Job List',
  type: 'object',
  icon,
  description: 'A lost of job openings.',
  fields: [
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
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'noOpenings',
      title: 'No Job Openings',
      type: 'text',
      validation: (rule: any) => rule.required(),
    }),
  ],
  preview: {
    select: { jobs: 'jobs' },
    prepare({ jobs }) {
      let visibleJobs = 0;
      let hiddenJobs = 0;
      if (jobs) {
        jobs.forEach((j: { hidden: boolean }) => {
          if (j.hidden) {
            hiddenJobs++;
          } else {
            visibleJobs++;
          }
        });
      }

      return {
        title: `${visibleJobs} Jobs`,
        subtitle: hiddenJobs > 0 ? `${hiddenJobs} Hidden Jobs` : '',
        media: icon,
      };
    },
  },
});
