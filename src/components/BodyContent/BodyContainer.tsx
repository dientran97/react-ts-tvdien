import "./body.module.css";

import { SendOutlined } from "@ant-design/icons";
import { Button, Divider, notification } from "antd";
import { Component, PropsWithChildren, ReactNode } from "react";

interface ContainerProps {
  showLogo?: boolean;
  btnText?: string;
}

const sendMessage = () =>
  notification.info({
    message: "Hello, world!",
    description: "This is a greeting message sent from the moon",
  });

/**
 * Class of Body Container, including all children components in the body
 * Using PropsWithChildren to include the prop "children" inside the props
 */
export default class BodyContainer extends Component<PropsWithChildren<ContainerProps>> {
  render(): ReactNode {
    const { children, btnText } = this.props;
    return (
      <div className="bodyContainer">
        <Divider>Main Content</Divider>
        <Button onClick={sendMessage} icon={<SendOutlined />}>
          {btnText ?? "Send me a message"}
        </Button>
        {/* Show other children components included */}
        {children}
      </div>
    );
  }
}
