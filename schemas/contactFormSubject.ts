import { defineField, defineType } from 'sanity';
import { FaAddressCard as icon } from 'react-icons/fa6';

export default defineType({
  name: 'contactFormSubject',
  title: 'Icon List Item',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Id of this contact item.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'emailTo',
      title: 'Email To',
      description:
        'List of emails to send messages with this subject to separated by commas.',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: { name: 'name', id: 'id.current', image: 'image' },
    prepare({ name, id, image }) {
      return {
        title: name,
        subtitle: id,
        media: image || icon,
      };
    },
  },
});
