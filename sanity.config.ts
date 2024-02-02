import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
import {noteField} from 'sanity-plugin-note-field'
import {userColorList} from './schemas/globals'
import {schemaTypes} from './schemas'

const singletons: {[key: string]: string} = {
  settings: '43e2d671-9f4d-4c59-9e2f-b9787c07cd88',
  header: 'da00c098-883a-4597-bf69-b06f7443dd3c',
  footer: 'bb015db2-386d-470e-b35f-c1d994640dc3',
}

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const isSingleton = (schemaName: string) => !!singletons[schemaName]

export default defineConfig({
  name: 'default',
  title: "St. Peter's Kitchen",
  projectId: 't6t8tv0q',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items(
            schemaTypes
              .filter((s) => s.type === 'document')
              .map((s) =>
                isSingleton(s.name)
                  ? S.listItem()
                      .title(s.title || s.name)
                      .id(s.name)
                      .icon(s['icon'])
                      .child(S.document().schemaType(s.name).documentId(singletons[s.name]))
                  : S.documentTypeListItem(s.name).title(s.title || s.name),
              ),
          ),
    }),
    visionTool(),
    media(),
    simplerColorInput({
      defaultColorFormat: 'rgba',
      defaultColorList: userColorList,
    }),
    noteField(),
  ],

  schema: {
    types: schemaTypes,

    templates: (templates) => templates.filter(({schemaType}) => !isSingleton(schemaType)),
  },
  document: {
    actions: (input, context) => {
      if (isSingleton(context.schemaType)) {
        return input.filter(({action}) => action && singletonActions.has(action))
      } else {
        return input
      }
    },
  },
})
