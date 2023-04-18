import globalAxios from "../../axios/index";

// Register User
const registerUser = async (userData) => {
  const response = await globalAxios().post("customers/web", userData);
  return response.data;
};

// Send Login Code
const sendLoginCode = async (email) => {
  const response = await globalAxios().post(`sendLoginCode/${email}`);

  return response.data.message;
};

const forgotPasswordRequest = async (payload) => {
  try {
    const response = await globalAxios().post("password/reset-token", payload);
    return response.data;
  } catch (error) {
    return { error };
  }
};

const passwordResetConfirm = async (payload) => {
  //console.log(payload)
  try {
    const response = await globalAxios().post("/password/reset/", payload);
    return { data: response.data };
  } catch (error) {
    return Promise.reject(error);
  }
};

const activateEmail = async (payload) => {
  // //console.log(payload);
  try {
    const response = await globalAxios().post("/auth/confirm-email/", payload);

    return { data: response.data };
  } catch (error) {
    return Promise.reject(error);
  }
};

const authService = {
  registerUser,
  forgotPasswordRequest,
  passwordResetConfirm,
  activateEmail,
  sendLoginCode,
};

export default authService;
