
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColumnMeta: ComponentMetadata = {
  "componentName": "Column",
  "title": "Column",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@seada/antv-materials",
    "version": "0.1.0",
    "exportName": "Column",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "data",
            "zh-CN": "data"
          }
        },
        "name": "data",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "extraSetter": {
                    "componentName": "MixedSetter",
                    "isRequired": false,
                    "props": {}
                  }
                }
              },
              "isRequired": false,
              "initialValue": {}
            }
          },
          "isRequired": true,
          "initialValue": []
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "Column",
    "screenshot": "",
    "schema": {
      "componentName": "Column",
      "props": {}
    }
  }
];

export default {
  ...ColumnMeta,
  snippets
};
