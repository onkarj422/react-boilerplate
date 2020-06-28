import request from 'http/request';

export const getMyData = () =>
  request({
    method: 'get',
    url: '/api/data',
  });
