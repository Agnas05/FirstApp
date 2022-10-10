import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Button, Form, Input } from 'antd';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { Select } from 'antd';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../login/Login';
import { Link, useNavigate } from "react-router-dom";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirms, setConfirms] = useState("");
    const [phone, setPhone] = useState("");
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    const onFinish = (values) => {

        var home = JSON.parse(localStorage.getItem('home') || "[]")//converts string to object
        var register = {
            email: values.email,
            password: values.password,
            confirms: values.confirms,
            phone: values.phone
        }
        home.push(register)
        localStorage.setItem('home', JSON.stringify(home));//converts object to string
        // alert("Registered Successfully");
        navigate("./login");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 100,
                    marginTop:-10

                }}
            >
                <Option style={{marginTop:10}} value="91">+91</Option>
            </Select>
        </Form.Item>
    );


    return (
        <>
          <Navbar bg="dark" variant="dark">
        <Container>
          <nav className="me-auto">
            <Link style={{marginRight:20}} to="/">Home</Link>
            <Link style={{marginRight:20}} to="/register">Register</Link>
            <Link style={{marginRight:20}} to="/works">Works</Link>
          </nav>
        </Container>

      </Navbar>
            <img style={{ position: 'absolute', width: 1260 }} src={require("../images/register.jpg")} />
            <Nav className="me-auto">
                <Link to="/register/login">Login</Link>

            </Nav>

            <div className='text-center'>Sign up</div>
            <Form

                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                style={{
                    width: 800,
                    paddingLeft: 200
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    style={{ fontWeight: 700 }}
                    name="email"
                    label="E-mail"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}

                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 700 }}
                    label="Password"
                    name="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password style={{ paddingTop: 10, paddingBottom: 10,marginLeft:5 }} />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 700 }}
                    name="confirms"
                    value={confirms}
                    label="Confirm Password"
                    dependencies={['password']}
                    onChange={(e) => { setConfirms(e.target.value) }}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password style={{ paddingTop: 10, paddingBottom: 10,marginLeft:5 }} />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 700 }}
                    name="phone"
                    value={phone}
                    label="Phone Number"
                    onChange={(e) => { setPhone(e.target.value) }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        // addonBefore={prefixSelector}
                        style={{
                            // width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 700 }}
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit"  style={{width: 76}}                  
                    >
                        Submit

                    </Button>

                </Form.Item>
            </Form>

        </>
    );
};

export default Register;