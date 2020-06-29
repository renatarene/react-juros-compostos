import React, { useState, useEffect, useCallback } from 'react';

import M from 'materialize-css';

import ResultCard from './components/result-card/ResultCard';
import SectionData from './components/section-data/SectionData';
import { calculate, calculateJuros } from './helper/calculate';

export default function App() {
  const [montanteInicial, setMontanteInicial] = useState(0);
  // const [valorTotal, setValorTotal] = useState(0);
  const [taxaDeJuros, setTaxaDeJuros] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [sobreJuros, setSobreJuros] = useState([]);

  const doCalculate = () => {
    let result = [];
    for (let mes = 1; mes <= periodo; mes++) {
      const valorTotal = calculate(montanteInicial, taxaDeJuros, mes);
      console.log(`mes: ${mes} - valorTotal: ${valorTotal}`);
      const valorJuros = (valorTotal - montanteInicial).toFixed(2);
      console.log(`mes: ${mes} - valor Juros: ${valorJuros}`);
      const percentual = calculateJuros(montanteInicial, valorTotal);
      console.log(`mes: ${mes} - percentual: ${percentual}`);
      result = [...result, { mes, valorTotal, valorJuros, percentual }];
    }
    setSobreJuros([...result]);
  };

  const updateMontanteInicial = useCallback((value) => {
    setMontanteInicial(value);
  }, []);

  const updateTaxaDeJuros = useCallback((value) => {
    setTaxaDeJuros(value);
  }, []);

  const updatePeriodo = useCallback((value) => {
    setPeriodo(value);
  }, []);

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    doCalculate();
  }, [montanteInicial, taxaDeJuros, periodo]);

  // useEffect(() => {
  //   doCalculate(montanteInicial, taxaDeJuros, periodo);
  // }, [doCalculate, montanteInicial, taxaDeJuros, periodo]);

  // const calculateCallback = useCallback(() => {
  //   doCalculate(montanteInicial, taxaDeJuros, periodo);
  // }, [doCalculate, montanteInicial, taxaDeJuros, periodo]);
  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <SectionData
        montanteInicial={montanteInicial}
        taxaDeJuros={taxaDeJuros}
        periodo={periodo}
        updateMontanteInicial={updateMontanteInicial}
        updateTaxaDeJuros={updateTaxaDeJuros}
        updatePeriodo={updatePeriodo}
        doCalculate={doCalculate}
      />
      <div className="row">
        {sobreJuros.map((juros, index) => {
          return (
            <div key={index} className="col s3">
              <ResultCard juros={juros} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
