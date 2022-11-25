// login, register, withdrawal api
import { instance } from "src/api";

// register api
function registerUser(payload) {
  return instance.post("signup", payload);
}
// login api
function loginUser(payload) {
  return instance.post("login", payload);
}

export { registerUser, loginUser };
