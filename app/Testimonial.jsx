'use client'
import { useState } from 'react';
import { Button, Modal, Form, Input, Slider, message as MSG} from 'antd';
import { saveReview } from '../utils';

const Testimonial = () => {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    let [FirstName, setFirstName] = useState('')
    let [LastName, setLastName] = useState('')
    let [Message, setMessage] = useState('')
    let [Rating, setRating] = useState(5)
    const [messageApi, contextHolder] = MSG.useMessage();

    const success = (msg) => {
    messageApi.open({
        type: 'success',
        content: msg
        });
    };

    const warning = (msg) => {
    messageApi.open({
        type: 'warning',
        content: msg,
        });
    };

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            const Msg = await saveReview({FirstName, LastName, Message, Rating})
            if (Msg == 'thanks for your the review') {
                success(Msg)
                setOpen(false)
            }else {
                warning(Msg)
            } 
        } catch (error) {
            warning('Internal server error')
        }
        finally{
            setConfirmLoading(false)
        }
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const { TextArea } = Input;

    const contentStyle = {
        height: '160px',
        color: '#fff',
        textAlign: 'center',
        background: '#0399EB',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    return (
        <>
            {contextHolder}
            <Modal
                title="Please leave a review of your experience working with us"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    labelCol={{
                    span: 4,
                    }}
                    wrapperCol={{
                    span: 14,
                    }}
                    layout="horizontal"
                    style={{
                    maxWidth: 600,
                    }}
                    onValuesChange={(changedValues, allValues) => {
                        if (changedValues.firstname) {
                        setFirstName(changedValues.firstname)
                        }
                        if (changedValues.lastname) {
                        setLastName(changedValues.lastname);
                        }
                        if (changedValues.message) {
                        setMessage(changedValues.message);
                        }
                        if (changedValues.rating) {
                        setRating(changedValues.rating);
                        }
                    }}
                    preserve={false}
                >
                    <Form.Item 
                    label="firstname"
                    name="firstname"
                    rules={[
                    {required: true,
                    message: 'Please input your firstname!'},
                    ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item 
                    label="Lastname"
                    name="lastname"
                    rules={[
                    {required: true,
                    message: 'Please input your lastname!'},
                    ]}
                    onValuesChange={(e) =>setLastName(e.target.value) }>
                        <Input />
                    </Form.Item>
                    <Form.Item 
                    label="Message"
                    name="message"
                    rules={[
                    {required: true,
                    message: 'Please it is important you leave a message'},
                    ]}>
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item 
                    label="Rating"
                    name="rating"
                    rules={[
                    {required: true,
                    message: 'Rate your exprience over 10'},
                    ]}>
                        <Slider 
                        defaultValue={5}
                        max={5}/>
                    </Form.Item>
                </Form>
            </Modal>
            <div className='w-full flex justify-center my-5'>
                <button 
                className='px-4 py-2 text-[16px] font-medium bg-primary text-white rounded-full'
                    onClick={showModal}>
                        Add Review
                </button>
            </div>
        </>
    );
};

export default Testimonial;