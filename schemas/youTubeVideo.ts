import { defineField, defineType } from 'sanity';
import { FaYoutube as icon, FaLightbulb } from 'react-icons/fa6';

export default defineType({
  name: 'youTubeVideo',
  title: 'YouTube Video',
  type: 'object',
  icon,
  fields: [
    defineField({
      title: 'Tip',
      description:
        'To get the id, width and height, click on the YouTube video\'s share button and select "Embed", ' +
        'You should width="[number]" height="[number]" and src="[url]". Copy the width and height values into the fields below.\n' +
        'Within the url you should see the 11 character video ID between "embed/" and a question mark. For example given the url: ' +
        '"https://www.youtube.com/embed/N8IUXTpfZaQ?si=b_0Aih81BZMVKOc" the video id is "N8IUXTpfZaQ".',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: FaLightbulb,
        tone: 'caution',
      },
    }),
    defineField({
      name: 'videoId',
      title: 'Video Id',
      type: 'string',
      description: '',
      validation: (rule: any) =>
        rule.required().length(11).error('Youtube Ids are 11 characters long'),
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      validation: (rule: any) => rule.required(),
    }),
  ],
  preview: {
    select: { videoId: 'videoId', width: 'width', height: 'height' },
    prepare({ videoId, width, height }) {
      return {
        title: 'YouTube Video ID: ' + videoId,
        subtitle: `Width: ${width}, Height: ${height}`,
        media: icon,
      };
    },
  },
});
