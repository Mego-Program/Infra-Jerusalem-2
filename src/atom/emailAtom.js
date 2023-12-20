import { atom, useAtom } from "jotai";

const userEmailAtom = atom("");

const useUserEmail = () => useAtom(userEmailAtom);

export default useUserEmail;
