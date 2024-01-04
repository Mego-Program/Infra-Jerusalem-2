import { atom, useAtom } from "jotai";

const loading = atom(false);

const useLoading = () => useAtom(loading);

export default useLoading;
