export default function useToken() {
  const userToken = JSON.parse(localStorage.getItem("user") as string)?.token;

  return userToken as string;
}
