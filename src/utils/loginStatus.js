import { checkLoginStatus } from "../services/database";

export async function getLoginStatus(id) {
  const result = await checkLoginStatus(id);
  console.log("result : ", result);
  return result;
}
