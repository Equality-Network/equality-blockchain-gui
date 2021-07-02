import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.EQUALITY]: IS_MAINNET ? 'XCH' : 'TXCH',
};
