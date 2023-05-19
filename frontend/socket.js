import { io } from "socket.io-client";

const url = `https://0.0.0.0/api`;

export const socket = io(url);