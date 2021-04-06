/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageHeader, Button, Input, Select } from 'antd';
import debounce from 'debounce';
import { useAppSelector } from '../hooks';
import { IWatchlistReducer } from '../redux/reducers/watchlist.reducer.type';

export interface IHeaderProps {
  title: string;
  onSearch?: (title: string) => void;
  onSelect?: (cate: string) => void;
}

const Header: React.FC<IHeaderProps> = ({ title, onSearch, onSelect }) => {
  const watchlist = useAppSelector<IWatchlistReducer>(state => state.watchlist);
  const history = useHistory();

  const onChange = debounce((movieTitle: string) => {
    if (onSearch) {
      onSearch(movieTitle);
    }
  }, 500);

  const extraComponents = onSearch
    ? [
        <Input
          placeholder='Search by movie title...'
          onChange={(event: React.FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value)}
        />,
        <Button onClick={() => history.push('/watch-list')} type='primary'>
          My Watchlist
        </Button>,
      ]
    : [
        <Select style={{ width: 200 }} defaultValue='all' onChange={v => onSelect && onSelect(v)}>
          <Select.Option value='all'>All</Select.Option>
          {watchlist.watchlist.map(item => (
            <Select.Option key={item.watchlist_key} value={item.watchlist_key}>
              {item.watchlist_name}
            </Select.Option>
          ))}
        </Select>,
      ];

  return (
    <div>
      <PageHeader
        className='page-header__component'
        title={
          <span style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
            {title}
          </span>
        }
        extra={extraComponents}
      />
    </div>
  );
};

export default Header;
