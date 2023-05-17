import { io } from "socket.io-client";

const url = 'http://13.58.157.155:5000';

export const socket = io(url);