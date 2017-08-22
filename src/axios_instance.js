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
    console.log('axiosInstance.join 진입');
    return this.post('member/create/', makeFormData(requestData));
  };

  return axiosInstance;
})();
