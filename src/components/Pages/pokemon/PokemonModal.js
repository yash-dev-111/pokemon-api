import React from "react";
import { Modal, Space, Spin,Typography, Card } from "antd";
import "./PokemonModal.css";

const PokemonModal = ({
  modalVisible,
  modalData,
  loading,
  pokemonDetails,
  onClose,
}) => {
  return (
    <Modal
      title={modalData.name}
      open={modalVisible}
      onCancel={onClose}
      footer={null}
      centered
      maskClosable
      bodyStyle={{ overflowY: "auto" }}>
      {loading ? (
        <Space size="middle" className="spinner">
          <Spin size="large" />
        </Space>
      ) : (
        <>
          {pokemonDetails && (
            <Card
              cover={
                <img
                  src={pokemonDetails.sprites.front_default}
                  alt={pokemonDetails.name}
                  className="pokemon-img"
                />
              }>
              <Card.Meta
                title={`Species: ${pokemonDetails.species.name}`}
                description={
                  <Typography>
                    <strong>Abilities:</strong>{" "}
                    {pokemonDetails.abilities
                      .map((ability) => ability.ability.name)
                      .join(", ")}
                  </Typography>
                }
              />
            </Card>
          )}
        </>
      )}
    </Modal>
  );
};

export default PokemonModal;
