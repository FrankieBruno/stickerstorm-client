import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"




export const StickerStorm = () => (
    <>
    <Authorized >
    <NavBar />
    <ApplicationViews />
    </Authorized>
    </>
)

export default StickerStorm