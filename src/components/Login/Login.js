import {
  FacebookFilled,
  GoogleOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { updateLoginInfo } from "../../store/user";
import "./Login.css"

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    if (values.username === "admin" && values.password === "password") {
      dispatch(updateLoginInfo({ isUserLoggedIn: true }));
      localStorage.setItem("isUserLoggedIn", true);
      navigate("/dashboard");
    } else {
      notification.error({
        message: "Login Failed",
        description: "Incorrect password",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Form
          layout="vertical"
          form={form}
          className="login-form"
          onFinish={handleLogin}
        >
          <div className="login-title">
            <h1>emilus</h1>
            <span>
              Don't have an account yet? <NavLink to="#">Sign Up</NavLink>
            </span>
          </div>
          <Form.Item
            label="Email"
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className="signin-btn"
              htmlType="submit"
              block
            >
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
    </div>
  );
};

export default Login;
