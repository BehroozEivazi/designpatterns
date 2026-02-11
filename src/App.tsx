// import { useEffect, useRef, useState } from "react";
// import { SocketClient } from "./socket/socket.client";
// import Toggle from "@/toggler";
import { useState } from "react";
import Modal from "./Modal";
// const socket = new SocketClient();

function App() {
  const [show, setShow] = useState<boolean>(false);

  //#region
  // const [status, setStatus] = useState("");
  // const [messages, setMessages] = useState<string[]>([]);
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   socket.connect();

  //   socket.onStatus((data) => {
  //     setStatus(`${data.status} | ${data.serverTime}`);
  //   });

  //   socket.onBroadcast((data) => {
  //     setMessages((prev) => [...prev, data.value]);
  //   });

  //   return () => {
  //     socket.cleanup();
  //     socket.disconnect();
  //   };
  // }, []);
  //#endregion
  return (
    <div className="p-8 space-y-6 max-w-md mx-auto">
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        click me
      </button>
      <Modal
        open={show}
        onVisible={(value) => {
          setShow(value);
        }}
      >
        <Modal.Header>MyName is Header</Modal.Header>
        <Modal.Content>MyName is Content</Modal.Content>
        <Modal.Footer>MyName is Footer</Modal.Footer>
      </Modal>
    </div>
  );
  // return (
  //   <div style={{ padding: 20 }}>
  //     <h2>Socket Exchange Demo</h2>

  //     <button onClick={() => socket.requestStatus()}>Request Status</button>

  //     <p>Status: {status}</p>

  //     <input ref={inputRef} placeholder="Send something" />
  //     <button onClick={() => socket.sendData(inputRef.current?.value || "")}>Send</button>

  //     <ul>
  //       {messages.map((m, i) => (
  //         <li key={i}>{m}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
