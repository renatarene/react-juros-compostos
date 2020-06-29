import React from 'react';

import InputData from '../input-data/InputData';

export default function SectionData({
  montanteInicial,
  taxaDeJuros,
  periodo,
  updateMontanteInicial,
  updateTaxaDeJuros,
  updatePeriodo,
  doCalculate,
}) {
  const validationMaiorQueZero = (value) => +value > 0;
  const handleClick = () => {
    doCalculate();
  };

  return (
    <div className="row">
      <div className="row">
        <InputData
          className="col s4"
          id="inputMontanteInicial"
          type="number"
          value={montanteInicial}
          label="Montante Inicial:"
          min={1}
          max={70000}
          prefix="R$"
          isFocused={true}
          handleInput={updateMontanteInicial}
          validation={validationMaiorQueZero}
          errorMessage="O valor do montante precisa estar entre 1 e 70000"
        />

        <InputData
          className="col s4"
          id="inputTaxaDeJuros"
          type="number"
          value={taxaDeJuros}
          label="Taxa de Juros Mensal:"
          min={-12}
          step={0.1}
          max={12}
          handleInput={updateTaxaDeJuros}
          validation={validationMaiorQueZero}
          errorMessage="O valor da taxa precisa estar entre -12 e 12"
        />

        <InputData
          className="col s4"
          id="inputPeriodo"
          type="number"
          value={periodo}
          label="Período (meses):"
          min={1}
          handleInput={updatePeriodo}
          validation={validationMaiorQueZero}
          errorMessage="O valor do montante precisa ser maior que zero"
        />
      </div>
      <div className="row">
        <div className="col s12">
          <button
            className="waves-effect waves-light btn"
            style={styles.button}
            onClick={handleClick}
          >
            Calcular
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  button: {
    width: '100%',
  },
};
