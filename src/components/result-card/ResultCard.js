import React from 'react';

const formatCurrency = (value) => {
  const format = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return format.format(+value);
};

export default function ResultCard({ juros }) {
  const { mes, valorTotal, valorJuros, percentual } = juros;
  return (
    <div className="card" style={styles.card}>
      <div style={styles.flexRow}>
        <div>{mes}</div>
        <div style={styles.flexColumn}>
          <span style={+valorJuros > 0 ? styles.positive : styles.negative}>
            {formatCurrency(valorTotal)}
          </span>
          <span style={+valorJuros > 0 ? styles.positive : styles.negative}>
            {formatCurrency(valorJuros)}
          </span>
          <span
            style={+valorJuros > 0 ? styles.percentageColor : styles.negative}
          >
            {percentual}%
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: '10px',
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
  percentageColor: {
    color: 'blue',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

/**
 * // <div className="row">
    //   <div className="col">{mes}</div>
    //   <div className="col">
    //     <div className="row">
    //       <div className="row">{valorTotal}</div>
    //       <div className="row">{valorJuros}</div>
    //       <div className="row">{percentual}</div>
    //     </div>
    //   </div>
    // </div>
 */
