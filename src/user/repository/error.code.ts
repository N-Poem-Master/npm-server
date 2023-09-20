export const USER_CREATE_ERROR = {
  DUPLICATED_ID: { code: 'DUPLICATED_ID', message: '중복된 아이디입니다.' },
  DUPLICATED_EMAIL: {
    code: 'DUPLICATED_EMAIL',
    message: '이미 등록된 이메일입니다.',
  },
} as const;

export const LOGIN_ERROR = {
  NOT_VERIF: {
    code: 'NOT_VERIF',
    message: '아이디 혹은 비밀번호가 잘못 입력되었습니다.',
  },
};

export const USER_ERROR = {
  NOT_FOUND: {
    code: 'NOT_FOUND',
    message: '등록된 사용자가 아닙니다.',
  },
};
