
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useState ,useEffect} from 'react';
import {putDataApi} from 'react';

const { Option } = Select;
const FormComponent = ({id,open, setOpen,showDrawer }) => {
  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[gender,setGender]=useState("")
  // const [open, setOpen] = useState(false);


  // const showDrawer = () => {
  //   setOpen(true);
  // };
  const onClose = () => {
    setOpen(false);

  };

  const handelSubmit = () =>{
    const objbody = {
      "_id":id,
      "first_name":firstName,
      "last_name":lastName,
      "email": email,
      "phone": phone,
      "gender":gender,
    } 
    putDataApi(objbody)
  }

  useEffect(()=>{
    console.log("formgender",gender)
  },[gender])
  return (
    <>
      <Button type="primary" shape="circle" onClick={showDrawer} icon={<PlusOutlined />}>
        
      </Button>

      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handelSubmit}     type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="FirstName"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user firstName',
                  },
                ]}
              >
                <Input placeholder="Please enter user first name" onChange={ (e)=>{setFirstName(e.target.value)}} />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="lastName"
                label="LastName"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user last name',
                  },
                ]}
              >
                <Input placeholder="Please enter user last name" onChange={ (e)=>{setLastName(e.target.value)}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phoneNo"
                label="PhoneNo"
                rules={[
                  {
                    required: true,
                    message: 'Please select an Number',
                  },
                ]}
              >
                <Input placeholder="Please enter user Number" onChange={ (e)=>{setEmail(e.target.value)}} />
                
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user email',
                  },
                ]}
              >
                <Input placeholder="Please enter user email" onChange={ (e)=>{setPhone(e.target.value)}} />
                
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Gender',
                  },
                ]}
              >
                <Select placeholder="Please choose the Gender" onChange={ (e)=>{setGender(e.target.value)}}  >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="others">Others</Option>
                </Select>
              </Form.Item>
            </Col>
          
          </Row>
         
        </Form>
      </Drawer>
    </>
  );
};
export default FormComponent;