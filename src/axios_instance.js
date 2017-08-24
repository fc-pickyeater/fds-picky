import axios from 'axios';

export default (() => {
  const axiosInstance = axios.create({
    baseURL: 'http://pickycookbook.co.kr/api/',
  });

  function makeFormData(rawData) {
    if (rawData.img_profile === null || rawData.img_profile === '') {
      delete rawData.img_profile;
    }
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

  axiosInstance.userEdit = function userEdit(requestData) {
    console.log('userEdit\'s requestData', requestData);
    return this.patch(`member/update/${requestData.pk}/`, makeFormData(requestData), {
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

  axiosInstance.removeUser = function removeUser(requestData) {
    console.log('removeUser\'s requestData', requestData);
    return this.delete(`member/update/${requestData.pk}/`, {
      headers: {
        Authorization: `Token ${requestData.token}`,
      },
    });
  };

  axiosInstance.myRecipeList = function myRecipeList(requestData) {
    console.log('myRecipeList\'s requestData', requestData);
    return this.get('recipe/myrecipe/', {
      headers: {
        Authorization: `Token ${requestData.token}`,
      },
    });
  };

  return axiosInstance;
})();
