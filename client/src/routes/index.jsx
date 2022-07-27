import { Route, Routes } from "react-router-dom";


const Router = ()=>{

    return(
        <Routes>
            <Route element={<h1>Página inicial</h1>} path="/"/>
            <Route element={<h1>Dash</h1>} path="/dash"/>
        </Routes>
    )

}
export default Router