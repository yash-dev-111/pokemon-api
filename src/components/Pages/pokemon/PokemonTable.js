import React from "react";
import { Table, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const PokemonTable = ({
  pokemonList,
  loading,
  currentPage,
  itemsPerPage,
  totalResults,
  onTableChange,
  onViewDetails,
}) => {
  const columns = [
    {
      title: "Serial Number",
      dataIndex: "srno",
      key: "srno",
      render: (text, record, index) =>
        (currentPage - 1) * itemsPerPage + index + 1,
    },
    {
      title: "Pokemon Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <Typography>{name}</Typography>,
    },
    {
      title: "Details",
      dataIndex: "url",
      key: "url",
      render: (url, record) => (
        <span onClick={() => onViewDetails(record)}>
          <EyeOutlined />
        </span>
      ),
    },
  ];

  const paginationConfig = {
    current: currentPage,
    pageSize: itemsPerPage,
    total: totalResults,
    onChange: onTableChange,
  };


  return (
    <div className="pokemon-table-container">

    <Table
      size="large"
      columns={columns}
      dataSource={pokemonList.map((pokemon, index) => ({
        ...pokemon,
        key: index.toString(),
      }))}
      pagination={paginationConfig}
      loading={loading}
    />
    </div>
  );
};

export default PokemonTable;
