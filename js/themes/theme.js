import { Platform } from 'react-native';
import _ from 'lodash';

import variables from './variables';

const h3Theme = {
  color: variables.textColor,
  fontSize: variables.fontSizeH3,
  lineHeight: variables.lineHeightH3,
};

const cssifyTheme = (grandparent, parent, parentKey) => {
  _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
    if (styleName.indexOf('.') === 0 && parentKey && parentKey.indexOf('.') === 0) {
      if (grandparent) {
        if (!grandparent[styleName]) {
          grandparent[styleName] = {};
        } else {
          grandparent[styleName][parentKey] = style;
        }
      }
    }
    if (style && typeof style === 'object') {
      cssifyTheme(parent, style, styleName);
    }
  });
};

cssifyTheme(null, h3Theme, null);

export default h3Theme;
