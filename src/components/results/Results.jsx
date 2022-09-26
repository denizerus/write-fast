import React, {useContext} from 'react';
import {ChallangeContext} from '../../contexts/ChallangeContex';
import { ThemeContext } from '../../contexts/ThemeContext';

export const Results = () => {
  const {results} = useContext(ChallangeContext);
  const theme = useContext(ThemeContext).getTheme();

  const resultRows = results ? (
    results.map((r) => {
      return (
        <tr key={r.id}>
          <td>{r.challangeId}</td>
          <td>{r.scores.accuracy.toFixed(2)}</td>
          <td>{r.scores.duration.toFixed(2)}</td>
          <td>{r.scores.wordsPerMinute.toFixed(2)}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td>Veri Bulunamadı</td>
    </tr>
  );
  return (
    <div className={`card text-center ${theme.card} border`}>
      <div className="card-header">
        <h4 className="card-title">Sonuçlarım</h4>
      </div>
      <div className="card-body p-1">
        <table className={`table table-hover m-0 ${theme.table}`}>
          <thead>
            <tr>
              <th>Metin ID</th>
              <th>Doğruluk</th>
              <th>Süre</th>
              <th>Dakika Başına Kelime</th>
            </tr>
          </thead>
          <tbody>{resultRows}</tbody>
        </table>
      </div>
    </div>
  );
};
