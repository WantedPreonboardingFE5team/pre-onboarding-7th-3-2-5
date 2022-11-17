import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@/recoil/userState';
import { accountState, currentPageState, totalAccountState } from '@/recoil/accountState';
import Link from 'next/link';

import { accountActive, getAccountStatus, getBrokerName } from '@/utils/valueConversion';
import { dateFormat, comma, accountMasking } from '@/utils/formatting';

import { Space, Table, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { deleteAccount } from '@/apis/account';

interface DataType {
  id: number;
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
  const userList = useRecoilValue(userState);
  const [accountList, setAccountList] = useRecoilState(accountState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const totalAccountItem = useRecoilValue(totalAccountState);

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
      render: (account) => <Link href={`/account/${account}`}>{accountMasking(account)}</Link>,
    },
    {
      title: '계좌상태',
      dataIndex: 'status',
      key: 'status',
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
                deleteAccount(record.id);
                deleteHandler(record.id);
                alert('삭제되었습니다.');
              }}
            >
              삭제
            </button>
            <style jsx>{`
              button {
                cursor: pointer;
              }
            `}</style>
          </Space>
        );
      },
    },
  ];

  const userNameMatch = (userId: number) => {
    const userData = userList?.filter((user) => user.id === userId)[0];
    return userData?.name;
  };

  const deleteHandler = (id: number) => {
    const newAccountList = accountList?.filter((item) => item.id !== id);
    setAccountList(newAccountList);
  };

  const data = accountList?.map((account, idx) => {
    return {
      key: idx,
      id: account.id,
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

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
      <div className="pagination__container">
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={totalAccountItem}
          showSizeChanger={false}
          hideOnSinglePage={true}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
      <style jsx>{`
        .pagination__container {
          display: inline-flex;
          justify-content: center;
          width: 100%;
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
}
