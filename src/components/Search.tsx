import { getSearchData } from '@/apis/login';
import { accountState } from '@/recoil/accountState';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styles from '../styles/Search.module.css';

export default function Search() {
  const setAccountList = useSetRecoilState(accountState);
  const [searchKeyword, setKeyword] = useState<string>('');

  const [isShow, setIsShow] = useState<boolean>(false);

  const onChangeHandle = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!searchKeyword) {
      alert('검색어를 입력해주세요!');
      return;
    }
    getSearchData(searchKeyword).then((res) => setAccountList(res));
    setIsShow(true);
    setKeyword('');
  };

  const onClickHandle = (e) => {
    e.preventDefault();
    setKeyword('');
    getSearchData(searchKeyword).then((res) => setAccountList(res));
    setIsShow(false);
  };

  return (
    <form onSubmit={onSubmitHandle} className="search">
      {isShow && <input type="button" className={styles.totalBtn} value="전체 계좌보기" onClick={onClickHandle} />}
      <input
        type="text"
        className={styles.searchbar}
        value={searchKeyword}
        onChange={onChangeHandle}
        placeholder="계좌명을 검색해보세요."
      />
      <input type="submit" className={styles.searchBtn} value="검색" />
    </form>
  );
}
