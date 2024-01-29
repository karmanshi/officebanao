import React from 'react'
import { Table } from "antd";
import data from './data.json';

const nested1 = [
  Table.SELECTION_COLUMN,
  {
    title: "Activities",
    dataIndex: "name",
    key: "name",
  },
  Table.EXPAND_COLUMN,
];
const nested2 = [
  Table.SELECTION_COLUMN,
  {
    title: "Work Items",
    dataIndex: "name",
    key: "name",
  },
];

const columns = [
  Table.SELECTION_COLUMN,
  {
    title: "Packages",
    dataIndex: "package",
    key: "package",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  Table.EXPAND_COLUMN,
];


const Overview = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <div>
          <Table
            columns={columns}
            rowSelection={{}}
            pagination={false}
            expandable={{
              expandedRowRender: (record) => (
                <Table
                  columns={nested1}
                  showHeader={false}
                  rowSelection={{}}
                  pagination={false}
                  expandable={{
                    expandedRowRender: (record_nest) => (
                      <Table
                        columns={nested2}
                        showHeader={false}
                        rowSelection={{}}
                        pagination={false}
                        dataSource={record_nest.work_item}
                      />
                    ),
                  }}
                  dataSource={record.activities}
                />
              ),
            }}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  )
}

export default Overview
