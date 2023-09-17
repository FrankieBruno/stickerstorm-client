import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    createSticker,
    getFinishTypes,
    getStickerSizes,
    getStickers,
} from "../../managers/StickerManager.js";

export const StickerForm = () => {
    const navigate = useNavigate();
    const [stickers, setStickers] = useState([]);
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
    price: "",
    });

    useEffect(() => {
    //in this section I am grabbing my sticker types from my StickerManager.js...//
    //importing them into my file then setting my state for the game types//
    // TODO: Get all sticker, then set the state
    getStickers().then((res) => setStickers(res));
    }, []);

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

    const changeStickerState = (domEvent) => {
        //this section is handling my change state, it is making a copy of my currentSticker objects above....//
        //so that I can change them without affecting my original set of objects//
        // TODO: Complete the onChange function
        const copy = { ...currentSticker };
        copy[domEvent.target.name] = domEvent.target.value;
        setCurrentSticker(copy);
    };
    /* I need to make input fields for maker(done), number_of_players, skill_level, game_type, gamer*/
    return (
    <form className="px-1 stickerForm bg-primary">
        <h2 className="pt-4 pb-6 text-3xl text-center text-white stickerForm__title text-secondary">
        Make New Sticker
        </h2>
        <fieldset>
        <div className="text-white form-group">
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
        <div className="text-white form-group">
            <label htmlFor="image">Image: </label>
            <input
                type="text"
                name="image"
                required
                autoFocus
                className="form-control"
                value={currentSticker.image}
                onChange={changeStickerState}
            />
        </div>
        </fieldset>
        <fieldset>
        <div className="text-white form-group">
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
        </fieldset>
        <fieldset>
        <div className="text-white form-group">
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
        </fieldset>
        <fieldset>
        <div className="text-white form-group">
            <label htmlFor="price">Price: </label>
            <input
                type="number"
                name="price"
                required
                autoFocus
                className="form-control"
                value={currentSticker.price}
                onChange={changeStickerState}
            />
        </div>
        </fieldset>

        <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
            evt.preventDefault();

            const sticker = {
            //below I am parseInt'ing the last 3 objects into integers because the type=text in the above fieldset's//
                name: currentSticker.name,
                image: currentSticker.image,
                finish_type: currentSticker.finish_type, //parseInt turns a string into an integer
                sticker_size: currentSticker.sticker_size,
                price: parseInt(currentSticker.price),
            };
            console.log(sticker);
            // Send POST request to your API
            createSticker(sticker).then(() => navigate("/stickers"));
            }}
        className="py-10 text-center text-white"
        >
        Create
        </button>
    </form>
    );
};
