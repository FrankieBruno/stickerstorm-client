import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"




export const StickerStorm = () => {
    return <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={
    <>
    <Authorized >
    <NavBar />
    <ApplicationViews />
    </Authorized>
    </>

    }/>
    </Routes>
}

export default StickerStorm