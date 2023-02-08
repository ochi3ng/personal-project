import DataFetching from "./DataFetching"

const DUMMY_DATA=[
    {   
        id:1,
        img:"/assets/teapot.jpg.webp",
        title:"Teapot Ultimate",
        price:72.00
    },
    {
        id:2,
        img:"/assets/vase.jpg.webp",
        title:"Vase Flower",
        price:65.00
    },
    {
        id:3,
        img:"/assets/wooden.jpg.webp",
        title:"Wooden Chair",
        price:98.00
    }
    ]
const Data=()=> {
    const fetch=DUMMY_DATA.map((item)=>(
        <DataFetching
        key={item.id} 
        title={item.title}
        price={item.price}
        img={item.img}/>
    )
)
  return (
    <div className="header">
      {fetch}
    </div>
  )
}

export default Data