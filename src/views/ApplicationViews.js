import { Outlet, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { StickerForm } from "../components/sticker/StickerForm"
import { StickerList } from "../components/sticker/StickerList"
import { StickerUpdate } from "../components/sticker/StickerUpdate"
// import { Login } from "../components/auth/Login"
// import { Register } from "../components/auth/Register"




export const ApplicationViews = () => {
    return (<Routes>
        <Route path="/" element={
            <>
            <Outlet/>
            </>
        }>
            {/* <Route path="/login" element={<Login to="/login" />} />
            <Route path="/register" element={<Register />} /> */}
            <Route element={<Authorized />}>
            <Route path="stickers" element={<StickerList />} />
            <Route path="stickers/new" element={<StickerForm />} />
            <Route path="stickers/update/:stickerId" element={<StickerUpdate />} />
            </Route>
            </Route>
        </Routes>
    )
}
