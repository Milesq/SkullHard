/* eslint-disable */

import axios from 'axios';

const gql = {};
gql.install = (vm, opt) => {
  if (!opt.url) throw 'You must passed url parameter to gql';

  vm.prototype['$' + (opt.name || 'gql')] = async ([query]) => {
    return (await axios.get(`${opt.url}?query=${query}`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })).data;
  };
};

export default gql;