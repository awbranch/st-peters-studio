import { defineArrayMember, defineField, defineType } from 'sanity';
import { userColorList } from './globals';
import BlockPreview from './BlockPreview';
import components from './components';

export default defineType({
  name: 'pageBlock',
  title: 'Block',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Id of this block in the page.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'simplerColor',
      options: {
        colorList: userColorList,
      },
    }),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      of: components.map((c) => defineArrayMember({ type: c.name })),
    }),
  ],
  preview: {
    select: { id: 'id', background: 'background', components: 'components' },
    prepare({ id, background, components }) {
      return {
        title: `#${id?.current}`,
        subtitle: `${components?.length || '0'} components`,
        media: <BlockPreview color={background?.value} />,
      };
    },
  },
});
