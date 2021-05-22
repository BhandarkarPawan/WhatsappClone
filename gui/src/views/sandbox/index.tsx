import React, { useContext, useState } from "react";
import AppContext from "../../app-context";
import { IMessage } from "../../services/entities";

import {
  Row,
  Col,
  Form,
  Alert,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
export interface Props {}

const SandBox: React.FC<Props> = (props) => {
  const context = useContext(AppContext);

  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [allMessages, setAllMessages] = useState<IMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const sendMessage = (message: string) => {
    if (message.length === 0) {
      setError("Please Enter A Valid Message");
      return;
    }
    const newMessage: IMessage = {
      username,
      message,
    };

    setError(null);
    setMessage("");
  };

  const login = () => {
    if (username.length === 0) {
      setError("Please Enter a Valid Username");
      return;
    }
    setError(null);
    setLoggedIn(true);
  };

  console.log("render");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMessage(message);
  };

  return (
    <div className="sandbox">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="New Message"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="primary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SandBox;
