/**
 * @flow
 */
import {Colors, Assets} from 'react-native-ui-lib';
import colors from './colors';
import fonts from './fonts';
import commonStyles from './common';

Colors.loadColors(colors);

Assets.loadAssetsGroup('images', {});

Assets.loadAssetsGroup('icons', {});
export {colors, fonts, commonStyles};
