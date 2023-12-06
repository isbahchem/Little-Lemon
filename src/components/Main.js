import Header from "./Header";

function Main(){
    return(
        <>
        <Routes> 
            <Route path="/" element={<Header />}></Route>
            <Route path="/Header" element={<HeaderPage />}></Route>
        </Routes>
        
        
        
        </>


    )
}