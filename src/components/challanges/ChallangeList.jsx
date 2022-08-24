import React, {useContext} from 'react';
import {ChallangeContext} from '../../contexts/ChallangeContex';
import {ThemeContext} from '../../contexts/ThemeContext';

const ChallangeList = () => {
  const theme = useContext(ThemeContext).getTheme();
  const {challanges} = useContext(ChallangeContext);
  const challangeRows = challanges.map((c) => {
    return (
      <tr key={c.id}>
        <td>{c.id}</td>
        <td>{c.text}</td>
        <td>{c.difficulty}</td>
      </tr>
    );
  });
  return (
    <div className={`card text-center ${theme.card} border`}>
      <div className="card-header">
        <h4>Metinler</h4>
      </div>
      <div className="card-body p-1">
        <table className={`table ${theme.table} table-striped table-hover m-0`}>
          <thead>
            <tr>
              <th>id</th>
              <th>metin</th>
              <th>zorluk</th>
            </tr>
          </thead>
          <tbody>{challangeRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ChallangeList;
