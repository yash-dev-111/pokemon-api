import React from "react";
import { Button, Form, Input } from "antd";
import {
  MailOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import "./LoginPage.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [form] = Form.useForm();

  return (
    <div className="login-container">
      <Form
        layout="vertical"
        form={form}
        className="login-form"
        onFinish={(values) => {
          console.log("Form submitted:", values);
        }}>
        <div className="login-title">
          <h1>emilus</h1>
          <span>
            Dont have an account yet? <NavLink to="#">Signup</NavLink>
          </span>
        </div>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}>
          <Input prefix={<MailOutlined className="site-form-item-icon" />} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="signin-btn" htmlType="submit" block>
            Sign in
          </Button>
        </Form.Item>
        <div className="login-footer">
          <span>or connect with</span>
          <div className="login-footer-btn">
            <Form.Item>
              <Button>
                <span className="google">
                  <GoogleOutlined />
                </span>
                Google
              </Button>
            </Form.Item>
            <Form.Item>
              <Button>
                <span className="facebook">
                  <FacebookFilled />
                </span>
                Facebook
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
