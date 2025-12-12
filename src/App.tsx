
import Navbar from "./Components/Navbar.tsx";
import Card from "./Components/Card.tsx";

const App = () =>{

    const cards = [

        {title: "Pain" , para: "Just Know Pain" ,src : "/download.jpg"},
        {title: "Life", para: "Just Know Life" , src : "/images.jpg"},
    ]




    return (
        <>
            <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600">
                <div >
                    <Navbar />
                   <ul>

                       {cards.map((card,i) => <div key={i} className="mt-5">{<Card Card={card}/>}</div>)}
                   </ul>



                </div>
            </header>


        </>
    );
};

export default App;
