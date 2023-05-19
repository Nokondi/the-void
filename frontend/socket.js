import { io } from "socket.io-client";

const url = `https://into-the-void.app/api`;

export const socket = io(url);