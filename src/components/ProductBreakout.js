
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"


const ProductBreakout = () => {
    let product = useParams()
    const color = useSelector(state => state.classic)
    console.log(color.classic)
    console.log(product)
    for (let i = 0; i < color.classic.length; i++) {
        if (color.classic[i].name === product.name){
            return(<> <h1 class="mt-5 text-center" >{color.classic[i].name}</h1>
                <img class="col-8 d-block mx-auto mt-5" src={color.classic[i].image} />
                <p class="col-8 col-md-6 mx-auto mt-5">{color.classic[i].description}</p>
                <h5 class="text-center mt-5">${color.classic[i].price}</h5>
                <button className="mx-auto d-block rounded mt-2">Add to Cart</button>
                </>

            )
        }  
    }
}
export default  ProductBreakout 