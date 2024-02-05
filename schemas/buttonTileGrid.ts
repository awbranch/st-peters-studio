import { defineField, defineType } from 'sanity';
import { FaTableCells as icon } from 'react-icons/fa6';

export default defineType({
  name: 'buttonTileGrid',
  title: 'Button Tile Grid',
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
        title: 'Button Tile Grid',
        subtitle: buttons?.length && `${buttons.length} Buttons`,
        media: icon,
      };
    },
  },
});
