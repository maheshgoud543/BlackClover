
import './Navbar.css'
const Navbar = () => {
    const handleWacthNow = () => {
        window.open("https://www.crunchyroll.com/watch/G50UZ4E20/asta-and-yuno")
    }

    const handleLearnMore = () => {
        window.open("https://bcmanga.org/manga/black-clover-chapter-1/")
    }
    return (
        <div>
            <div className="container">
                <div className="title">
                    <h3>Anime Verse</h3>
                </div>
                <div className="Navbar_items">
                    <div className="home">
                        <p>Home</p>
                    </div>
                    <div className="about">
                        <p>About</p>
                    </div>
                    <div className="contact">
                        <p>Contact Me</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='animeData'>
                    <div className='story'>
                        <p className='story_Name'>Black Clover</p>
                        <p className='story_syn'>Set in a world where everyone is given the ability to use magic, the story follows Asta, a young boy born without any magic power who is given a rare grimoire that grants him anti-magic abilities. With his fellow mages from the Black Bulls, Asta plans to become the next Wizard King.</p>
                        <div>
                            <div className='buttons_data'>
                                <button onClick={handleWacthNow}>Watch Now</button>
                                <button onClick={handleLearnMore}>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className='coverpage'>
                        <img src='https://bclover.jp/images/index/mv00.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;