import "./Home.css";


function Home() {
    const genreOfGames = [
        'Shooting', 'MultiPlayer', 'Combat', 'Brain Storm',
        'Driving', 'Family', 'Farm and Forest','Horror', 
    ]
    return (
        <>
            <header>
                <nav>
                <img src="/vite.svg" alt="vite-logo" />
                <h4>Games</h4>
                <button>Mode</button>
                </nav>

            </header>
            <aside id="Side-nav">
               <ul id="list-items">
                {genreOfGames.map((game, index) => {
                    return <li key={index}>{game}</li>
                })}
               </ul>
            </aside>
        </>
    )
}

export default Home;