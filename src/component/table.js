import { Space, Table, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button,Tooltip } from 'antd';
import FormComponent from './Form'
import { useState,useEffect } from 'react';

import {getDataApi} from "../services/hubblerApi"


const TableComponent = () => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'last_name',
      dataIndex: 'last_name',
      key: 'lastName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  
  
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={handelEdit} diabled = {false}>Edit</a>
          <a diabled={true}>Delete</a>
        </Space>
      ),
    },
  ];

  
  const data = [
    {
      id: '1',
      first_name: 'John',
      last_name: 'Brown',      
      phone: 32,
      email: "jhonbrown@gmail.com",  
      gender: 'male'
    }
  ];
const [rowData,setRowdata]=useState([]);

const [open, setOpen] = useState(false);


  const showDrawer = () => {
    setOpen(true);
  };

const handelEdit = ()=>{
  setOpen(true)
}

useEffect(() =>{
  
   getDataApi().then((res)=>{
    const data = []
    const obj ={}
    obj["id"] =res["_id"]
    console.log("data=>",res)
    const processData =res.map((e)=>{e.configuration.map((e) =>{
    obj[e["_id"]] =res[e["label"]]
    })
          setRowdata((prev)=>[...prev,{
            data
          }])

    })
    })

  
    },[])

  return<>
      <Table  columns={columns} dataSource={data}/>
      <div style={{float:"right",marginRight:"40px"}}>
      <FormComponent open={open} setOpen={setOpen} showDrawer={showDrawer}/>

      </div>
  </>
}

export default TableComponent;