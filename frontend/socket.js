import { io } from "socket.io-client";

const url = `https://0.0.0.0:5001`;

export const socket = io(url);