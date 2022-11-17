import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../styles/Input.module.css';
import { Button, Input, Modal, Form, Select, InputNumber } from 'antd';
import { brokers } from '@/utils/valueConversion';
import { createAccount } from '@/apis/account';
import { getAccountList } from '@/apis/login';

const AccountCreate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { Option } = Select;
  console.log(
    getAccountList().then((res) => {
      console.log(res);
    }),
  );
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (...values: any) => {
    createAccount(...values);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        계좌 생성
      </Button>
      <Modal title="계좌 생성하기" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form onFinish={onFinish}>
          <Form.Item name="userName" label="고객명">
            <Input placeholder="고객명" required />
          </Form.Item>
          <Form.Item name="brokerName" label="브로커명">
            <Select
              id="status_selector"
              placeholder="브로커를 선택해주세요"
              defaultValue={{ value: '209', label: '유안타증권' }}
            >
              {Object.keys(brokers).map((item, idx) => {
                return (
                  <Option key={`item_${idx}`} value={item}>
                    {brokers[item]}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item name="accountNumber" label="계좌번호">
            <InputNumber placeholder="(-) 넣어주세요" style={{ width: 300 }} required />
          </Form.Item>

          <Form.Item name="accountStates" label="계좌상태">
            <Select id="status_selector" placeholder="계좌 상태 선택" defaultValue={{ value: '1', label: '입금대기' }}>
              <Option value="1">입금대기</Option>
              <Option value="2">운용중</Option>
              <Option value="3">투자중지</Option>
              <Option value="4">해지</Option>
            </Select>
          </Form.Item>

          <Form.Item name="accountName" label="계좌명">
            <Input placeholder="계좌명" required />
          </Form.Item>

          <Form.Item name="RatingPrice" label="평가금액">
            <InputNumber style={{ width: 300 }} required />
          </Form.Item>

          <Form.Item name="depositPrice" label="입금금액">
            <InputNumber style={{ width: 300 }} required />
          </Form.Item>

          <Form.Item name="accountState" label="계정활성화">
            <Select
              id="active_selector"
              placeholder="계정 활성화 선택"
              defaultValue={{ value: 'true', label: '활성화' }}
            >
              <Option value="true">활성화</Option>
              <Option value="false">비활성화</Option>
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
