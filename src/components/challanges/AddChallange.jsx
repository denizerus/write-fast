import React, {useState , useContext} from 'react';
import { ChallangeContext } from '../../contexts/ChallangeContex'
import { ThemeContext } from '../../contexts/ThemeContext'

const initState = {
  text: '',
  difficulty: '',
};

const AddChallange = () => {
  const [challange, setChallange] = useState(initState);

  const {dispatch} = useContext(ChallangeContext);
  const theme = useContext(ThemeContext).getTheme();

  const changeHandler = (e) => {
    setChallange({...challange, [e.target.name]: e.target.value});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({type:'ADD_CHALLANGE',challange})
//    addChallange(challange);
    setChallange(initState);
  }

  return (
    <div className={`card text-center ${theme.card} border`}>
      <div className="card-header"><h4>Metin Ekle</h4></div>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="text">Metin:</label>
            <input
              type="text"
              name="text"
              className="form-control"
              value={challange.text}
              autoComplete="off"
              placeholder="Metni giriniz"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">Zorluk: </label>
            <select
              name="difficulty"
              onChange={changeHandler}
              id="difficulty"
              className="form-control"
              required
              value={challange.difficulty}
            >
              <option value="">Seçiniz</option>
              <option value="easy">Kolay</option>
              <option value="medium">Orta</option>
              <option value="hard">Zor</option>
            </select>
          </div>
          <button className="btn btn-outline-success btn-block" type="submit">Kaydet</button>
        </form>
      </div>
    </div>
  );
};

export default AddChallange;
