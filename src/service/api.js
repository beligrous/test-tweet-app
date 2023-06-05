import axios from "axios";
import { toast } from "react-toastify";

const notify = (error) => {
  toast.error(`Something goes wrong ${error.message}`, {
    position: toast.POSITION.TOP_CENTER,
  });
};

const instance = axios.create({
  baseURL: "https://64786fc8362560649a2dc3d8.mockapi.io/tweets",
  params: { limit: 3 },
});

export async function getUsers(page = 1) {
  try {
    const { data } = await instance.get("/", { params: { page } });
    return data;
  } catch (error) {
    notify(error);
  }
}

export async function getUserById(id) {
  try {
    const { data } = await instance.get(`/${id}`);
    return data;
  } catch (error) {
    notify(error);
  }
}

export async function getFollow(id, data) {
  try {
    const prev = await getUserById(id);
    await instance.put(`/${id}`, { ...prev, followers: data });
  } catch (error) {
    notify(error);
  }
}
