import { Table, Typography, Modal, Spin, Space, Row, Col, Layout } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import "./Pokemon.css";
// import PokemonTable from "./PokemonTable";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const itemsPerPage = 40;

  const fetchPokemonData = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${
          (page - 1) * itemsPerPage
        }`
      );
      setPokemonList(response.data.results);
      setTotalResults(response.data.count);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchPokemonDetails = async (url) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setPokemonDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (modalData.url) {
      fetchPokemonDetails(modalData.url);
    }
  }, [modalData]);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "srno",
      key: "srno",
      render: (text, record, index) =>
        (currentPage - 1) * itemsPerPage + index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <Typography>{name}</Typography>,
    },
    {
      title: "Details",
      dataIndex: "url",
      key: "url",
      render: (url, record) => (
        <span
          onClick={() => {
            setModalData(record);
            setModalVisible(true);
          }}>
          <EyeOutlined />
        </span>
      ),
    },
  ];

  const paginationConfig = {
    current: currentPage,
    pageSize: itemsPerPage,
    total: totalResults,
    onChange: (page) => setCurrentPage(page),
  };

  return (
    <Layout className="pokemon-layout">
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
          // scroll={{y:580}}
        />
      </div>
      <Modal
        title={modalData.name}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}>
        {loading ? (
          <Space size="middle" className="spinner">
            <Spin size="large" />
          </Space>
        ) : (
          <>
            {pokemonDetails && (
              <>
                <Row>
                  <Col>
                    <Typography>
                      <strong>Species:</strong> {pokemonDetails.species.name}
                    </Typography>
                    <Typography>
                      <strong>Abilities:</strong>{" "}
                      {pokemonDetails.abilities
                        .map((ability) => ability.ability.name)
                        .join(", ")}
                    </Typography>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img
                      src={pokemonDetails.sprites.front_default}
                      alt={pokemonDetails.name}
                    />
                  </Col>
                </Row>
              </>
            )}
          </>
        )}
      </Modal>
    </Layout>
  );
};

export default Pokemon;
