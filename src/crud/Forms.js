import React, { useEffect, useState, useContext } from "react";
import 'antd/dist/antd.min.css';
import { Button, Form, Input } from 'antd';
import { Context } from "./contextfile";
// import './App.css';

const Forms = () => {
    const [form] = Form.useForm();

    const { contextData, edit, onEdit } = useContext(Context);
    const [btn, setBtn] = useState(false);


    useEffect(() => {

        form.setFieldsValue({
            name: edit.name,
            age: edit.age,
            address: edit.address
        });

        console.log("edit-key form", edit.key);

    }, [edit]);


    console.log("-=", edit);
    const onFinish = (values) => {
        if (btn) {
            onEdit(values);
        } else {
            contextData(values);
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);


    };

    const onReset = () => {
        form.resetFields();
        setBtn(false);
    };

    return (
        <>


            <Form form={form}
                // style={{
                //     marginRight: "30px",
                // }}
                style={{
                    width: 800,
                    paddingLeft: 200,
                    marginTop: 0
                }}
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"

            >
                <Form.Item
                    style={{ fontWeight: 700 }}
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 700 }}
                    name="age"
                    label="Age"

                    rules={[
                        {
                            required: true,
                            message: 'Please input Age!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ fontWeight: 700 }}
                    name="address"
                    label="Address"

                    rules={[
                        {
                            required: true,
                            message: 'Please input Address!',
                        },
                    ]}

                >
                    <Input />
                </Form.Item>

                <Button
                    type="primary" htmlType="submit"
                >
                    Add
                </Button>
                <Button
                    type="primary" htmlType="submit"
                    style={{
                        marginLeft: "15px",
                    }}

                >
                    Update
                </Button>
                <Button htmlType="button" onClick={onReset}
                    style={{
                        marginLeft: "15px",
                    }}>
                    Reset
                </Button>
            </Form>

        </>
    );
};


export default Forms;