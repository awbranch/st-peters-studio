import { defineArrayMember, defineField, defineType } from 'sanity';
import BlockPreview from './BlockPreview';
import components from './components';
import { createPaletteField } from './utils';
import { colorPalettes, pageWidths } from './globals';

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
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      description:
        'You can hide a block rather than deleting if if you want to not show it temporarily',
      initialValue: false,
      validation: (rule: any) => rule.required(),
    }),
    createPaletteField('palette', 'Palette'),
    defineField({
      name: 'maxWidth',
      title: 'Max Width',
      description:
        'The maximum width of this block on the page. Narrower widths are ideal for text heavy blocks to avoid long line lengths.',
      type: 'string',
      options: {
        list: pageWidths,
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'md',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      of: components.map((c) => defineArrayMember({ type: c.name })),
    }),
  ],
  preview: {
    select: {
      id: 'id',
      hidden: 'hidden',
      maxWidth: 'maxWidth',
      palette: 'palette',
      components: 'components',
    },
    prepare({ id, hidden, palette, maxWidth, components }) {
      let subtitle = '';
      if (hidden) {
        subtitle = 'Hidden';
      } else if (components) {
        subtitle += `${components.length} Components`;

        if (maxWidth) {
          let w = pageWidths.find((w) => w.value === maxWidth);
          if (w) {
            subtitle += ` - ${w.title}`;
          }
        }
      }

      return {
        title: `#${id?.current}`,
        subtitle: subtitle,
        media: (
          <BlockPreview
            color={
              hidden
                ? 'white'
                : palette &&
                  colorPalettes.find((p) => p.value === palette)?.background
            }
            dashed={hidden}
          />
        ),
      };
    },
  },
});
