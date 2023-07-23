import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import axios from "axios";
import "./Pokemon.css";
import PokemonTable from "./PokemonTable";
import PokemonModal from "./PokemonModal";

const { Content } = Layout;

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const itemsPerPage = 20;

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

  const handleTableChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (record) => {
    setModalData(record);
    setModalVisible(true);
  };

  return (
    <Layout className="pokemon-layout">
      <Content className="pokemon-content">
        <PokemonTable
          pokemonList={pokemonList}
          loading={loading}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalResults={totalResults}
          onTableChange={handleTableChange}
          onViewDetails={handleViewDetails}
        />
      </Content>
      <PokemonModal
        modalVisible={modalVisible}
        modalData={modalData}
        loading={loading}
        pokemonDetails={pokemonDetails}
        onClose={() => setModalVisible(false)}
      />
    </Layout>
  );
};

export default Pokemon;
