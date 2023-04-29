import { fetchCatImage } from "../api"
import catImage from '../assets/images/HomePageCat.png'

export default () => {
    return (
        <>
            <img src={catImage} alt='hello-cat' />
        </>
    )
}