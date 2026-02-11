import { io, Socket } from "socket.io-client";

type StatusResponse = {
  status: string;
  serverTime: string;
};

type BroadcastData = {
  value: string;
  at: string;
};

export class SocketClient {
  private socket: Socket;

  constructor() {
    this.socket = io("http://localhost:3000", {
      autoConnect: false,
    });
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  requestStatus() {
    this.socket.emit("request:status");
  }

  sendData(value: string) {
    this.socket.emit("send:data", { value });
  }

  onStatus(cb: (data: StatusResponse) => void) {
    this.socket.on("response:status", cb);
  }

  onBroadcast(cb: (data: BroadcastData) => void) {
    this.socket.on("broadcast:data", cb);
  }

  cleanup() {
    this.socket.removeAllListeners();
  }
}
