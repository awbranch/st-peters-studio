import { defineField, defineType, Image } from 'sanity';
import { FaLightbulb, FaRegImage as icon } from 'react-icons/fa6';
import { getExtension } from '@sanity/asset-utils';

const validTypes = ['jpg', 'jpeg', 'png', 'gif'];

export default defineType({
  name: 'socialCards',
  title: 'Social Media Preview',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: 'Tip',
      description:
        "When links to St. Peter's Kitchen are shared on social media these images will be shared. " +
        'The proper size for these images changes over time. Please check online for the proper dimensions.',
      name: 'myCustomNote',
      type: 'note',
      options: {
        icon: FaLightbulb,
        tone: 'caution',
      },
    }),
    defineField({
      name: 'opengraph',
      title: 'Default Facebook (e.g. OpenGraph) Preview Image',
      type: 'image',
      validation: (rule: any) =>
        rule
          .required()
          .assetRequired()
          .custom((value: Image) => {
            if (!value || !value.asset) {
              return true;
            }

            const fileType = getExtension(value.asset._ref);
            if (!validTypes.includes(fileType)) {
              return 'Image must be one of ' + validTypes.join(', ');
            }
            return true;
          }),
    }),
    defineField({
      name: 'twitter',
      title: 'Default Twitter / X Preview Image',
      type: 'image',
      validation: (rule: any) =>
        rule
          .required()
          .assetRequired()
          .custom((value: Image) => {
            if (!value || !value.asset) {
              return true;
            }

            const fileType = getExtension(value.asset._ref);
            if (!validTypes.includes(fileType)) {
              return 'Image must be one of ' + validTypes.join(', ');
            }
            return true;
          }),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Social Media Cards',
        icon: icon,
      };
    },
  },
});
