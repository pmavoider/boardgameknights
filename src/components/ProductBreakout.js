
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import { add } from "./shoppingCart/ShoppingCartSlice"


const ProductBreakout = () => {
    let product = useParams()
    const color = useSelector(state => state.inventory.inventoryArray)

    for (let i = 0; i < color.length; i++) {
        if (color[i].name === product.name){
            let product = color[1]
            return(<> <h1 class="mt-5 text-center" >{color[i].name}</h1>
                <img class="col-8 d-block mx-auto mt-5" src={color[i].image} />
                <p class="col-8 col-md-6 mx-auto mt-5">{color[i].description}</p>
                <h5 class="text-center mt-5">${color[i].price}</h5>
                <button className="mx-auto d-block rounded mt-2" >Add to Cart</button>
                </>

            )
        }  
    }
}
export default  ProductBreakout 