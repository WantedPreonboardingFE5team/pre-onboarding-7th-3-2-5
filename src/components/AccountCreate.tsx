import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Modal, Form, Select, InputNumber } from 'antd';
import { brokers } from '@/utils/valueConversion';
import { createAccount, getAccountList } from '@/apis/account';

const AccountCreate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { Option } = Select;
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (...values: any) => {
    createAccount(...values);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        계좌 생성
      </Button>
      <Modal title="계좌 생성하기" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form onFinish={onFinish}>
          <Form.Item name="broker_id" label="브로커명">
            <Select id="status_selector" placeholder="브로커를 선택해주세요">
              {Object.keys(brokers).map((item, idx) => {
                return (
                  <Option key={`item_${idx}`} value={item}>
                    {brokers[item]}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item name="number" label="계좌번호">
            <Input placeholder="(-) 빼고 입력해 주세요" style={{ width: 300 }} required />
          </Form.Item>

          <Form.Item name="status" label="계좌상태">
            <Select id="status_selector" placeholder="계좌 상태 선택">
              <Option value={1}>입금대기</Option>
              <Option value={2}>운용중</Option>
              <Option value={3}>투자중지</Option>
              <Option value={4}>해지</Option>
            </Select>
          </Form.Item>

          <Form.Item name="payment" label="평가금액">
            <Input style={{ width: 300 }} required />
          </Form.Item>

          <Form.Item name="assets" label="입금금액">
            <Input style={{ width: 300 }} required />
          </Form.Item>

          <Form.Item name="is_active" label="계정활성화">
            <Select id="active_selector" placeholder="계정 활성화 선택">
              <Option value={true}>활성화</Option>
              <Option value={false}>비활성화</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button style={{ right: 0 }} type="primary" htmlType="submit" className="login-form-button">
              생성 하기
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AccountCreate;
