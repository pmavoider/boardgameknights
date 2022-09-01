import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    Col,
    Row,
    CardImg,
    Card,
    CardTitle
} from 'reactstrap';
import {useState} from "react"
import {useSelector} from "react-redux"
 
const random1 = Math.floor(Math.random() * 10)
const random2 = Math.floor(Math.random() * 10)

const Carousels = () => {
    const color = useSelector(state => state.inventory)
  const img1 = color.classic.classic[random2].images.medium
   
    // State for Active index
    const [activeIndex, setActiveIndex] = useState(0);
  
    // State for Animation
    const [animating, setAnimating] = useState(false);
   
    if(color.inventory.length > 1){   // Sample items for Carousel
    const items = [
        {src: 
            img1,
            key:1,
            name:"Staff Pick"
        },
        {src: 
            img1,
            key:2,
            name:"Voted most Replayable"
        }
    ];
    console.log(items)
    // Items array length
    const itemLength = items.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (<div className="bord">
            <CarouselItem className='bg-secondary p-3 '
                key={item.key}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <Card className=" col-8 mx-auto border-0" >
            
                <CardImg className="card-img-top" style={{maxHeight:"25vh", aspectRatio:"4/3"}}  src={item.src} alt={item.altText} />
                <CardTitle>
                <h2 className="mt-3 text-center">{item.name}</h2>
                </CardTitle>
                </Card>
            </CarouselItem>
            </div>
        );
    });
    return (
        <Row style={{width:"60vw", maxWidth:"400px", maxHeight:"150px"}} className="mt-5 mx-auto row row-content">
        <Col classname="col-8 offset-2 col-sm-6 offset-sm-3">
           
            <Carousel  className="carousel slide" previous={previousButton} next={nextButton} 
                activeIndex={activeIndex}>
                
                {carouselItemData}
            </Carousel>
        </Col>
        </Row>
    );
}}
  
export default Carousels;