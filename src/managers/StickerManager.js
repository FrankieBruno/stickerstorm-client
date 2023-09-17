export const createSticker = (sticker) => {
    return fetch("https://deploy--stickerstorm.netlify.app/stickers", {
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
    return fetch(`https://deploy--stickerstorm.netlify.app/stickers`, { 
        headers:{
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
    .then(response => response.json())
}

export const getSingleSticker = (id) => {
    return fetch(`https://deploy--stickerstorm.netlify.app/stickers/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
        .then(response => response.json())
}

export const getFinishTypes = () => {
    return fetch("https://deploy--stickerstorm.netlify.app/finishes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
        .then(response => response.json())
}

export const getStickerSizes = () => {
    return fetch("https://deploy--stickerstorm.netlify.app/sizes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
        .then(response => response.json())
}


export const updateSticker = (sticker,id) => {
    return fetch(`https://deploy--stickerstorm.netlify.app/stickers/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        },
        body: JSON.stringify(sticker)
    })
}

export const deleteSticker = (id) => {
    return fetch(`https://deploy--stickerstorm.netlify.app/stickers/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("st_token")}`
        }
    })
}