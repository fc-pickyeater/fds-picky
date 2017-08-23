import axios from 'axios';

export default (() => {
  const axiosInstance = axios.create({
    baseURL: 'http://pickycookbook.co.kr/api/',
  });

  function makeFormData(rawData) {
    const formData = new FormData();
    const rawDataKeys = Object.keys(rawData);
    rawDataKeys.forEach((val) => {
      // console.log('append', val, 'with', rawData[val]);
      formData.append(val, rawData[val]);
    });
    return formData;
  }

  axiosInstance.login = function login(requestData) {
    return this.post('member/login/', makeFormData(requestData));
  };

  axiosInstance.join = function join(requestData) {
    return this.post('member/create/', makeFormData(requestData));
  };

  axiosInstance.userDetail = function userDetail(requestData) {
    console.log('userDetail\'s requestData', requestData);
    return this.get(`member/detail/${requestData.pk}/`, {
      headers: {
        Authorization: `Token ${requestData.token}`,
      },
    });
  };

  axiosInstance.logout = function logout(requestData) {
    console.log('logout\'s requestData', requestData);
    return this.post('member/logout/', {}, {
      headers: {
        Authorization: `Token ${requestData.token}`,
      },
    });
  };

  return axiosInstance;
})();
