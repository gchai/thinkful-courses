import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardForm({submitHandler, setFormData, formData}){
    const navigate = useNavigate();

    const backHandler = () => {
        navigate(-1);
      };

    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
        };

    return(
        <form onSubmit={submitHandler} name="create">
        <div className="mb-1">
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            id="cardFront"
            name="front"
            required={true}
            onChange={changeHandler}
            className="form-control"
            value={formData.front}
          ></textarea>
        </div>
        <div className="mb-1">
          <label htmlFor="back" className="form-label">
            Back
          </label>
          <textarea
            id="cardBack"
            name="back"
            required={true}
            onChange={changeHandler}
            className="form-control"
            value={formData.back}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn btn-secondary" onClick={backHandler}>
          Cancel
        </button>
      </form>
    )
}

export default CardForm