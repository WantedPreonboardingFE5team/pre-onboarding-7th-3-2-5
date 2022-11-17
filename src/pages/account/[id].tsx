import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useRecoilValue } from 'recoil';
import { userState } from '@/recoil/userState';

import { editAccountData, getAccountList } from '@/apis/login';
import { accountActive, getAccountStatus, getBrokerName } from '@/utils/valueConversion';
import { dateFormat, comma, accountMasking } from '@/utils/formatting';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  id: number;
  user_id: number;
  broker_id: string;
  number: string;
  status: number;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
}

export default function AccountId() {
  const [accountDetail, setAccountDetail] = useState<DataType[]>([]);
  const users = useRecoilValue(userState)?.filter((user) => user.id === accountDetail[0]?.user_id);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const router = useRouter();
  const id = router.query.id as string;
  const columns: ColumnsType<DataType> = [
    {
      title: '계좌명',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '고객명',
      dataIndex: 'user_id',
      key: 'user_id',
      render: (user) => userNameMatch(user),
    },
    {
      title: '브로커명',
      dataIndex: 'broker_id',
      key: 'broker_id',
      render: (broker) => getBrokerName(broker),
    },
    {
      title: '계좌번호',
      dataIndex: 'number',
      key: 'number',
      render: (broker) => accountMasking(broker),
    },
    {
      title: '계좌상태',
      dataIndex: 'status',
      key: 'status',
      render: (status) => getAccountStatus(status),
    },
    {
      title: '평가금액',
      dataIndex: 'assets',
      key: 'assets',
      render: (assets) => comma(assets),
    },
    {
      title: '입금금액',
      dataIndex: 'payments',
      key: 'payments',
      render: (payments) => comma(payments),
    },
    {
      title: '계좌 활성화',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (active) => {
        const onchangeHandle = (e) => {
          const { name, value } = e.target;
          setAccountDetail([
            {
              ...accountDetail[0],
              [name]: Boolean(parseInt(value)),
            },
          ]);
        };
        return isEdit ? (
          <select
            name="is_active"
            id="active"
            value={accountDetail[0]?.is_active ? '1' : '0'}
            onChange={onchangeHandle}
          >
            <option value="1">활성화</option>
            <option value="0">비활성화</option>
          </select>
        ) : (
          accountActive(active)
        );
      },
    },
    {
      title: '계좌 개설일',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date) => dateFormat(date),
    },
  ];

  const userNameMatch = (userId: number) => {
    const userData = users.filter((user) => user.id === userId)[0];
    return userData?.name;
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    getAccountList({ number_like: id }).then((res) => setAccountDetail(res?.data));
  }, [id]);

  const editBtnHandle = () => {
    setIsEdit(true);
  };

  const submitBtnHandle = (e) => {
    e.preventDefault();
    const id = accountDetail[0]?.id;
    editAccountData(id, accountDetail[0]).then((res) => setIsEdit(false));
  };

  return (
    <>
      {isEdit ? (
        <>
          <h2>계좌 정보</h2>
          <Table columns={columns} dataSource={accountDetail} pagination={false} />
          <input type="button" value="제출하기" onClick={submitBtnHandle} />
        </>
      ) : (
        <>
          <h2>계좌 정보</h2>
          <Table columns={columns} dataSource={accountDetail} pagination={false} />
          <input type="button" value="수정하기" onClick={editBtnHandle} />
        </>
      )}
    </>
  );
}
