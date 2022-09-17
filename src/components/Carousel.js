import { useSelector } from "react-redux";

import { UncontrolledCarousel } from 'reactstrap';

const ItemCarousel = () => {
const color = useSelector(state => state)
const items = [
];
color.officialGames.officialGamesArray.map((x) =>{
    return ( items.push(x.image))
})


return(
 <UncontrolledCarousel items={items} captionText="none" />
)
}
export default ItemCarousel;