// @flow
// libs
import isEqual from "lodash/isEqual";

/**
 * @param {string} key
 * @param {Object} thisProps
 * @param {Object} nextProps
 */
export const hasPropChanged = (
  key: string,
  thisProps: Object,
  nextProps: Object
): boolean => {
  return !isEqual(thisProps[key], nextProps[key]);
};
