import { register_db } from "../firebase";
import { child, get, ref, set, update } from "firebase/database";

const db = ref(register_db);

export async function doLogin(data) {
  const ret = await verifyLogin(data);
  return ret;
}

async function verifyLogin(client_data) {
  const data = await fetchData(client_data);
  if (data === null) {
    alert("User not found");
    return { status: false, data };
  } else {
    if (
      data.username !== client_data.username ||
      data.password !== client_data.password
    ) {
      alert("Username or Password is not correct");
      return { status: false, data };
    }
    updateData(client_data.username, { loggedIn: true });
    return { status: true, data };
  }
}

async function fetchData(data) {
  const snapshot = await get(child(db, `users/${data.username}`));
  return snapshot.val();
}

export async function doSignup(data) {
  const snapshot = await fetchData(data);

  if (snapshot !== null) {
    alert("User already exist.");
    return;
  }
  const result = await setAllData(data);
  return { status: result, data };
}

async function setAllData(client_data, loggedIn = false) {
  // console.log("client data: ", client_data);
  try {
    await set(ref(register_db, `users/${client_data.username}`), {
      ...client_data,
      loggedIn,
    });
    return true;
  } catch (err) {
    alert("SIGNUP::Something is wrong...");
    return false;
  }
}

export async function updateData(user, updates) {
  console.log("user: ", user, "\nupdates: ", updates);
  try {
    const snapshot = await update(ref(register_db, `users/${user}`), updates);
    return true;
  } catch (err) {
    console.log("Failed to update: ", err);
  }
}

// export function updateLogout(user, setLoginStatus) {
//   updateData(user, { loggedIn: false });
//   setLoginStatus(false);
// }

export async function checkLoginStatus(id) {
  const snapshot = await get(child(db, `users/${id}`));
  // console.log("snapshot: ", snapshot.val());
  return snapshot.val();
}
