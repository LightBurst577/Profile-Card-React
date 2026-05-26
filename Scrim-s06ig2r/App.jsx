import Footer from "/components/Footer"
import Interests from "/components/Interests"
import About from "/components/About"
import Button from "/components/Button"
import Name from "/components/Name"
import Photo from "/components/Photo"

export default function Page() {
    return (
    <>
        <Photo />
        <div className="Main">
            <Name />
            <Button />
            <About />
            <Interests />
        </div>
        <footer>
            <Footer />
        </footer>
    </>
    )
}