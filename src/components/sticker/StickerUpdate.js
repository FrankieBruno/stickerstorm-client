import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  getFinishTypes,
  getStickerSizes,
  getSingleSticker,
} from "../../managers/StickerManager.js";
import { updateSticker } from "../../managers/StickerManager.js";

export const StickerUpdate = () => {
  const navigate = useNavigate();
  const { stickerId } = useParams();
  const [finishTypes, setFinishTypes] = useState([]);
  const [stickerSizes, setStickerSizes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentSticker, setCurrentSticker] = useState({
    name: "",
    image: "",
    finish_type: 0,
    sticker_size: 0,
    price: 0,
  });

  useEffect(() => {
    //in this section I am grabbing my sticker types from my StickerManager.js...//
    //importing them into my file then setting my state for the game types//
    // TODO: Get the finish types, then set the state
    getFinishTypes().then((res) => setFinishTypes(res));
  }, []);

  useEffect(() => {
    //in this section I am grabbing my sticker types from my StickerManager.js...//
    //importing them into my file then setting my state for the game types//
    // TODO: Get the finish types, then set the state
    getStickerSizes().then((res) => setStickerSizes(res));
  }, []);

  useEffect(() => {
    getSingleSticker(parseInt(stickerId)).then((res) => setCurrentSticker(res));
  }, []);

  const changeStickerState = (evt) => {
    const { name, value } = evt.target;
    setCurrentSticker((prevState) => ({ ...prevState, [name]: value }));
  };

  /* I need to make input fields for maker(done), number_of_players, skill_level, game_type, gamer*/
  return (
    <form className="px-1 stickerForm bg-primary">
      <h2 className="pt-4 pb-6 text-3xl text-center text-white stickerForm__title text-secondary">
        Update Sticker
      </h2>
      <fieldset>
        <div className="flex items-center justify-center w-1/2 mx-auto text-white form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            value={currentSticker.name}
            onChange={changeStickerState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="flex items-center justify-center w-1/2 mx-auto text-white form-group">
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            name="image"
            required
            className="form-control"
            value={currentSticker.image}
            onChange={changeStickerState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="flex items-center justify-center">
          <div className="inline-block px-4 py-2 mx-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            <label htmlFor="finish_type">FinishType: </label>
            <select
              name="finish_type"
              id="finish"
              value={currentSticker.finish_type}
              onChange={changeStickerState}
            >
              <option value=""></option>
              {finishTypes.map((finishType) => (
                <option key={finishType.id} value={finishType.id}>
                  {finishType.finish_type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div className="flex items-center justify-center">
          <div className="inline-block px-4 py-2 mx-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            <label htmlFor="sticker_size">Size: </label>
            <select
              name="sticker_size"
              id="size"
              value={currentSticker.sticker_size}
              onChange={changeStickerState}
            >
              <option value=""></option>
              {stickerSizes.map((stickerSize) => (
                <option key={stickerSize.id} value={stickerSize.id}>
                  {stickerSize.sticker_size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div className="flex items-center justify-center w-1/2 mx-auto text-white form-group">
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            required
            className="form-control"
            value={currentSticker.price}
            onChange={changeStickerState}
          />
        </div>
      </fieldset>

      <div className="flex justify-center">
        <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault();

            updateSticker(currentSticker, stickerId).then(() =>
              navigate("/stickers")
            );
          }}
          className="btn btn-primary"
        >
          Update
        </button>
      </div>
    </form>
  );
};
