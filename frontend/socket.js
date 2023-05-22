import { io } from "socket.io-client";

const url = `http://172.19.0.3:8000`;

export const socket = io(url);