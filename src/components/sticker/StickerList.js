import React, { useEffect, useState } from "react"
import { getStickers } from "../../managers/StickerManager.js"
import { useNavigate } from "react-router-dom"
import { deleteSticker } from "../../managers/StickerManager.js"


export const StickerList = (props) => {
    const [ stickers, setStickers ] = useState([])
    const navigate = useNavigate()
    

    const getAllStickers = () => {
        getStickers()
        .then((res) => setStickers(res))}


    useEffect(() => {
        getAllStickers()
    }, [])

    const handleStickerDelete = (sticker) => {
        deleteSticker(sticker.id)
        .then(()=> getAllStickers()) 
    }

    
    return (
        <>
        <article className="stickers text-white">
            {
                stickers.map(sticker => {
                    return <section key={`sticker--${sticker.id}`} className="sticker">
                        <div className="additional--background"></div>
                        <div className="sticker__name">{sticker.name}</div>
                        <img className="sticker__image w-30 h-32" src={sticker.image} alt="sticker preview thumbnail"/>
                        <div className="sticker__finish_type">{sticker.finish_type}</div>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {navigate(`/stickers/update/${sticker.id}`)}}>Update Sticker</button>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => handleStickerDelete(sticker)}>Delete Sticker</button>
                    </section>
                        
                })
            }
        </article>
        </>
    )
}