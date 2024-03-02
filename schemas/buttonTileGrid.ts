import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaLightbulb, FaTableCells as icon } from 'react-icons/fa6';

export default defineType({
  name: 'buttonTileGrid',
  title: 'Button Tile Grid',
  type: 'object',
  icon,
  description: 'A grid of large button tiles',
  fields: [
    defineField({
      title: 'Tip',
      description:
        'A Button Tile Grid contains three squares across of large buttons each containing an icon, title and text. ' +
        'These are useful for a prominent set of buttons to navigate to another page on the site.',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: FaLightbulb,
        tone: 'caution',
      },
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'buttonTile' })],
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
