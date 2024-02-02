import { defineField, defineType } from 'sanity';
import { FaTableCells as icon } from 'react-icons/fa6';

export default defineType({
  name: 'buttonTileGridBlock',
  title: 'Button Tile Grid Block',
  type: 'object',
  icon,
  description: 'A grid of large button tiles',
  fields: [
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'buttonTile' }],
    }),
  ],
  preview: {
    select: { buttons: 'buttons' },
    prepare({ buttons }) {
      return {
        title: 'Button Tile Grid Block',
        subtitle: buttons?.length && `${buttons.length} Buttons`,
        media: icon,
      };
    },
  },
});
