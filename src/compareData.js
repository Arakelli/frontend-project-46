import _ from 'lodash';

const compareData = (obj1, obj2) => {
    const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

    return keys.map((key) => {
        if (!Object.hasOwn(obj1, key)) {
            return { key, type: 'added', value: obj2[key] };
        }
        if (!Object.hasOwn(obj2, key)) {
            return { key, type: 'removed', value: obj1[key] };
        }
        if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
            return { key, type: 'nested', children: compareData(obj1[key], obj2[key]) };
        }
        if (!_.isEqual(obj1[key], obj2[key])) {
            return { key, type: 'changed', oldValue: obj1[key], newValue: obj2[key] };
        }
        return { key, type: 'unchanged', value: obj1[key] };
    })
}

export default compareData;