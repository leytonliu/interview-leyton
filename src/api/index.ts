import request from '@/utils/request';

export const fetchWechatLoginToken = (code: string) => {
  return request({
    url: '/o2ui/v1/csg-wechat-login/login',
    method: 'GET',
    data: {
      code,
      type: 'MINI_PROGRAM',
      clientId: 'csg-mobile-front-uat',
    },
  });
};
