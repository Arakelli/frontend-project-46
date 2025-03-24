import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

const formatter = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return json(tree);
    default:
      throw new Error(
        `Format ${format} not supported. Choose 'stylish', 'plain' or 'json'`,
      );
  }
};

export default formatter;
