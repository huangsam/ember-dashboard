import { helper } from '@ember/component/helper'

function currentYear(params) {
  return new Date().getFullYear();
};

export default helper(currentYear);
