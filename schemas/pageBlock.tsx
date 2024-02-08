import { defineArrayMember, defineField, defineType } from 'sanity';
import BlockPreview from './BlockPreview';
import components from './components';
import { createPaletteField } from './utils';
import { colorPalettes } from './globals';

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
    createPaletteField('palette', 'Palette'),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      of: components.map((c) => defineArrayMember({ type: c.name })),
    }),
  ],
  preview: {
    select: { id: 'id', palette: 'palette', components: 'components' },
    prepare({ id, palette, components }) {
      return {
        title: `#${id?.current}`,
        subtitle: `${components?.length || '0'} components`,
        media: (
          <BlockPreview
            color={
              palette &&
              colorPalettes.find((p) => p.value === palette)?.background
            }
          />
        ),
      };
    },
  },
});
