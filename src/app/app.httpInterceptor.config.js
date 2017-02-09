export default authInterceptor;

/** @ngInject */
function authInterceptor($httpProvider) {
  $httpProvider.interceptors.push(($q) => {
    return {
      responseError(response) {
        const {status} = response;
        if (status === 401 || status === 403) {
          console.error(response);
        }

        return $q.reject(response);
      }
    };
  });
}
