import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FinalData from './FinalData';

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

const Login = () => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const [data, setData] = useState([]);

    const index = JSON.parse(sessionStorage.getItem('setIndex'));
    console.log("jhjhj", index)
    if (index !== null) {
        // navigate('/data');
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onFinish = (values) => {
        navigate("./data");

        const localvalue = JSON.parse(localStorage.getItem('home'));
        //const sessionvalue = JSON.parse(sessionStorage.getItem(a));
        console.log('localvalue', localvalue);

        localvalue.map((d, i) => {
            if (d.email == email && d.password == password) {
                console.log(i)
                sessionStorage.setItem('setData', JSON.stringify(values));
                sessionStorage.setItem('setIndex', JSON.stringify(i));

                // navigate('./register/login/data');

            }
            else {
                console.log("incorrect!");
            }
        }
        );

    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <img style={{ position: 'absolute', zIndex: -1, width: 1263 }} src={require("../images/register.jpg")} />
            {/* <Nav className="me-auto">
        <Nav.Link style={{color:"white",fontWeight:600,marginLeft:1000,marginTop:20,position:"absolute",top: -10}} href="/register/login/data">Data page</Nav.Link>
        
        
        </Nav> */}
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                style={{
                    width: 800,
                    paddingLeft: 200
                }}
                scrollToFirstError
            >
                <Form.Item
                    style={{ fontWeight: 700 }}
                    name="email"
                    label="E-mail"
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
                    onChange={onChangeEmail}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 700 }}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    onChange={onChangePassword}
                >
                    <Input.Password style={{ paddingTop: 10, paddingBottom: 10, marginLeft: 6 }} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" style={{ width: 76 }} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login;