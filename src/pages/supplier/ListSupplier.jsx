import './list.scss'
import React, { useState } from 'react';
import { Button, Table } from 'antd';
const columns = [
  {
    title: 'Tên nhà cung cấp',
    dataIndex: 'name',
  },
  {
    title: 'Số mã hóa',
    dataIndex: 'age',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
  },
  {
    title: 'Chủ cửa hàng',
    dataIndex: 'address',
  }, {
    title: 'Ngày giao hàng',
    dataIndex: 'address',
  },
  {
    title: 'Điện thoại',
    dataIndex: 'address',
  },
  {
    title: 'CMT/CCCD',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const ListSupplier = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
    <div
      style={{
        marginBottom: 16,
      }}
    >
      <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
        Reload
      </Button>
      <span
        style={{
          marginLeft: 8,
        }}
      >
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
      </span>
    </div>
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  </div>
  )
}

export default ListSupplier