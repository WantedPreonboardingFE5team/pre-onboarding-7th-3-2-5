import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { accountState, selectedFilter } from '@/recoil/accountState';
import { userState } from '@/recoil/userState';

import { accountActive, getAccountStatus, getBrokerName } from '@/utils/valueConversion';
import { dateFormat, comma, accountMasking } from '@/utils/formatting';
import { getAccountFilter, getAccountList, getUserList } from '@/apis/login';

import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  user_id: string;
  broker_id: string | undefined;
  number: string;
  status: string | undefined;
  name: string;
  assets: string;
  payments: string;
  is_active: string;
  created_at: string;
}

export default function AccountList() {
  const [users, setUserList] = useRecoilState(userState);
  const [accountList, setAccountList] = useRecoilState(accountState);
  const params = useRecoilValue(selectedFilter);

  const columns: ColumnsType<DataType> = [
    {
      title: '고객명',
      dataIndex: 'user_id',
      key: 'user_id',
    },
    {
      title: '브로커명',
      dataIndex: 'broker_id',
      key: 'broker_id',
    },
    {
      title: '계좌번호',
      dataIndex: 'number',
      key: 'number',
      render: (text) => <a>{accountMasking(text)}</a>,
    },
    {
      title: '계좌상태',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '계좌명',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '평가금액',
      dataIndex: 'assets',
      key: 'assets',
      render: (price, recode) => {
        let color = '#111111';
        if (price > recode.payments) {
          color = '#cf1322';
        }
        if (price < recode.payments) {
          color = '#096dd9';
        }

        return <div style={{ color: color }}>{price}</div>;
      },
    },
    {
      title: '입금금액',
      dataIndex: 'payments',
      key: 'payments',
    },
    {
      title: '계좌 활성화',
      dataIndex: 'is_active',
      key: 'is_active',
    },
    {
      title: '계좌 개설일',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: '계좌관리',
      key: 'action',
      render: (_, record) => {
        return (
          <Space size="middle">
            <button
              style={{ border: 'none', backgroundColor: 'white', color: '#1890ff' }}
              onClick={() => {
                deleteHandler(record.number);
              }}
            >
              삭제
            </button>
          </Space>
        );
      },
    },
  ];

  const userNameMatch = (userId: number) => {
    const userData = users?.filter((user) => user.id === userId)[0];
    return userData?.name;
  };

  const deleteHandler = (number: string) => {
    const newAccountList = accountList?.filter((item) => item.number !== number);
    setAccountList(newAccountList);
  };

  useEffect(() => {
    getAccountList().then((res) => setAccountList(res));
    getUserList().then((res) => setUserList(res));
  }, []);

  useEffect(() => {
    getAccountFilter(params).then((res) => setAccountList(res));
  }, [params]);

  const data = accountList?.map((account, idx) => {
    return {
      key: idx,
      user_id: userNameMatch(account.user_id),
      broker_id: getBrokerName(account.broker_id),
      number: account.number,
      status: getAccountStatus(account.status),
      name: account.name,
      assets: comma(account.assets),
      payments: comma(account.payments),
      is_active: accountActive(account.is_active),
      created_at: dateFormat(account.created_at),
    };
  });

  return <Table columns={columns} dataSource={data} />;
}
