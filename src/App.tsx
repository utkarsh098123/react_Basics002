
import Navbar from "./Components/Navbar.tsx";
import Card from "./Components/Card.tsx";

const App = () => {
    return (
        <>
            <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600">
                <div >
                    <Navbar />
                    <Card/>

                </div>
            </header>


        </>
    );
};

export default App;
