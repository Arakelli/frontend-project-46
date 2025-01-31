import _ from 'lodash';

const compareData = (obj1, obj2) => {
    const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

    const diff = keys.map((key) => {
        if (!Object.hasOwn(obj2, key)) {
            return ` - ${key}: ${obj1[key]}`;
        }
        if (!Object.hasOwn(obj1, key)) {
            return ` + ${key}: ${obj2[key]}`;
        }
        if (obj1[key] !== obj2[key]) {
            return ` - ${key}: ${obj1[key]}\n + ${key}: ${obj2[key]}`;
        }
        return `   ${key}: ${obj1[key]}`;
    });

    return `{\n${diff.join('\n')}\n}`;
}

export default compareData;