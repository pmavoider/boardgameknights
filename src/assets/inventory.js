
 const inventoryObj = {}
 const fetcher = () =>{
fetch("https://api.boardgameatlas.com/api/search?list_id=lRL8hqWoID&client_id=JLBr5npPhV")
//fetch("https://api.boardgameatlas.com/api/lists?username=Pmavoider&client_id=JLBr5npPhV")
    .then((res) => res.json())
    .then((data) =>  console.log("data.games"))
    //inventoryObj = {...inventoryObj, data}
       

    }
    export default fetcher