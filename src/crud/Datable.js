import { Space, Table } from 'antd';
// import './App.css';
import { Button } from 'antd/lib/radio';
import React, { useContext, useState } from "react";
import { Context } from "./contextfile";

const Datable = () => {

  const { datas, contextData, onDelete, edit, oneditValue, onEdit } = useContext(Context);

  const dataSources = datas.map((val, index) => {
    return {
      key: index + 1,
      name: val.name,
      age: val.age,
      address: val.address,
    }
  })


  const columns = [
    {
      title: 'S.No',
      dataIndex: 'key',
      key: 'key',

    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',

    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record, index) => (

        <Space size="middle">
          <Button onClick={() => { oneditValue(record, index) }}>Edit</Button>
          <Button onClick={() => { onDelete(record, index) }}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (

    <Table style={{
      marginTop: 20, width: 700,
      marginLeft: 230
    }} dataSource={dataSources} columns={columns} />

  )
}
export default Datable;