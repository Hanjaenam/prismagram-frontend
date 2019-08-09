/**
 * 1. 기본적으로 Client에 없는 state
 * 2. API state처럼 복잡하지 않다.
 * 3. 예를 들어 많은 UI를 가진 app을 갖고 있다고 한다면 (메뉴가 열리고 닫히고 불리고 등등)
 *  이러한 것들을 local state로 구현한다.
 */

export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem('token')) || false,
};
export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem('token', token);
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem('token');
      window.location.reload();
      return null;
    },
  },
};
