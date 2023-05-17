import { io } from "socket.io-client";

const host = location.hostname;
const url = `http://${host}:5000`;

export const socket = io(url);