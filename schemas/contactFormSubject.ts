import { defineField, defineType, Slug } from 'sanity';
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
      validation: (rule: any) =>
        rule.required().custom((slug: Slug) => {
          if (slug?.current && !/^[a-z-]+$/.test(slug.current)) {
            return 'The ID must only contain lower case letters and dashes.';
          } else {
            return true;
          }
        }),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'emailTo',
      title: 'Email To',
      description:
        'List of emails to send messages with this subject to separated by commas.',
      type: 'string',
      validation: (rule: any) => rule.required(),
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
