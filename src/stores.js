import { writable } from "svelte/store";

let data = {'1111':{id: '1111', pin: '1111', balance: 0},
            '2222':{id: '1209702056434', pin: '1234', balance: 0}};

export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable('');
export const account = writable('');
export const items = writable([]);