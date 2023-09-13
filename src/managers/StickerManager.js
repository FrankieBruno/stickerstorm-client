export const createSticker = (sticker) => {
    return fetch("https://stickerstorm-server-58fee60f8fc2.herokuapp.com/stickers", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        },
        body: JSON.stringify(sticker)
    })
        .then(response => response.json())
}

export const getStickers = () => {
    return fetch(`https://stickerstorm-server-58fee60f8fc2.herokuapp.com/stickers`, { 
        headers:{
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
    .then(response => response.json())
}

export const getSingleSticker = (id) => {
    return fetch(`https://stickerstorm-server-58fee60f8fc2.herokuapp.com/stickers/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
        .then(response => response.json())
}

export const getFinishTypes = () => {
    return fetch("https://stickerstorm-server-58fee60f8fc2.herokuapp.com/finishes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
        .then(response => response.json())
}

export const getStickerSizes = () => {
    return fetch("https://stickerstorm-server-58fee60f8fc2.herokuapp.com/sizes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
        .then(response => response.json())
}


export const updateSticker = (sticker,id) => {
    return fetch(`https://stickerstorm-server-58fee60f8fc2.herokuapp.com/stickers/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        },
        body: JSON.stringify(sticker)
    })
}

export const deleteSticker = (id) => {
    return fetch(`https://stickerstorm-server-58fee60f8fc2.herokuapp.com/stickers/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
}