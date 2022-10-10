import { createContext, useState } from "react";
import React from "react";
import { Form } from 'antd';
// import './App.css';

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [form] = Form.useForm();

    const [datas, setDatas] = useState([]);

    const [remove, setDelete] = useState([]);
    const [edit, setEdit] = useState([]);


    const contextData = (item) => {
        setDatas([...datas, item])
    }

    const onDelete = (record, index) => {
        setDelete(index);
        datas.splice(index, 1);
    }
    // const oneditValue=(item)=>{
    //     setEdit(item)
    // }
    const oneditValue = (datas, index) => {
        setEdit(datas, index)
    }
    const onEdit = (item) => {
        let update = [...datas];
        let editKey = edit.key;

        update.splice(editKey - 1, 1, item)
        setDatas(update);
        // setEdit(datas);
        // console.log("--==",datas);
    }
    return (
        //
        <Context.Provider value={{ datas, contextData, onDelete, edit, oneditValue, onEdit }}>
            {children}
        </Context.Provider>)
}   