import React from 'react';
import {ChallangeContext} from '../../contexts/ChallangeContex';
import {ThemeContext} from '../../contexts/ThemeContext';

const Info = (props) => {
  return (
    <ChallangeContext.Consumer>
      {(challangeContext) => (
        <ThemeContext.Consumer>
          {(themeContext) => {
            const theme = themeContext.getTheme();
            const challange = challangeContext.challanges.find(c => c.id === challangeContext.selected).text
            return (
              <div className={`card text-center ${theme.card}`}>
                <div className="card-header">
                  <h3>Hızlı Yazma Testi</h3>
                </div>
                <div className="card-body">
                  <p>
                    Alttaki metni kutucuğa girmeye başladığınızda süreniz
                    başlayacaktır.
                  </p>
                  <p>
                    Testi bitirmek için 'ctrl + Enter' kombinasyonunu
                    uygulayınız.
                  </p>
                  <p>
                    Ayrıca karakter sınırını aştığınızda test otomatik olarak
                    sonlanacaktır.
                  </p>
                </div>
                <div className="card-footer">{challange}</div>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </ChallangeContext.Consumer>
  );
};

export default Info;
