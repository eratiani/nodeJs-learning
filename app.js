const _ = require("lodash");
const items = [1, [2, 3, 4, [5, 6, [7, [8, 8]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
