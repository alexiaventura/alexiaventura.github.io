import './Home.css';

function Home() {
    return (
        <section>
            <div className="header-container">
                <div className="greeting-wrapper">
                    <h1 id="greeting">Hi, I am Alexia Ventura.</h1>
                </div>
            </div>
            <img src="/websitebackground.png" id="background" alt="purple gradient background" />
            <img src="/spideralexia.png" id="spideralexia" alt="Alexia Ventura in a spider costume" />
            <img src="/pencilstars.png" id="pencilstars" alt="stars drawn with a pencil" />
            <div className="header-container2">
                <div className="introduction-wrapper">
                    <h2 id="introduction">
                        I create inspired by my passions for music and social media inclusivity.
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default Home;
