
import './App.css';
import './assets/scripts/ionicons/css/ionicons.min.css'

// import './assets/css/skins/all.css'
import './assets/scripts/bootstrap/bootstrap.min.css'
// import './assets/css/style.css'


// imports
import {
  useRef, useState,
  useReducer, useEffect
} from 'react';


function App() {
 
  const images = [
    {
      id:0,
      img:"https://nike-project-vue.vercel.app/img/1.b2b083fc.png",

    },
    {
      id:1,
      img:"https://nike-project-vue.vercel.app/img/2.1d7e736f.png",
    },
    {
      id:2,
      img:"https://nike-project-vue.vercel.app/img/3.4b8df65f.png",
    },
  ]

  // let sizes = 
  
  let [sizes,setSizes] = useState(
    [
      {
        id:0,
        size:6,
        price:159,
        active:true
      },
      {
        id:1,
        size:7,
        price:162,
        active:false
  
      },
      {
        id:2,
        size:8,
        price:173,
        active:false
  
      },
      {
        id:3,
        size:10,
        price:226,
        active:false
  
      },
    ]
  ) 

  const bColor = [
    '#eb8678',
    '#000000',
    '#47d1cc'

  ]
  const [image,setImage] = useState(images[0].img)
  const [ borderColor,setBorderColor ] = useState(bColor[0])
  const [ size,setSize ] = useState([sizes[0]])
  const [cart,setCart] = useState([])
  const [selected,setSelected] = useState(1)
  const [price,setPrice] = useState(sizes[0].price)
   

  const submit = (e) => {
    e.preventDefault();


  }

const ChangeImage = (event) =>{
  const im = images.find((item) => 
    item.img == event.target.src 
   )
  setBorderColor(bColor[im.id])
  setImage(event.target.src)

}
const ChangeSize = (event) =>{
    const id = event.target.getAttribute('value')
    setSize(sizes[id])
    let newList = [];
    let ndata;
  
    sizes.map((item)=>item.active == true ? (
      
          ndata = item ,
          ndata.active = false,
          newList.push(ndata)
     
      ): newList.push(item))
      newList[id].active = true
      setSizes(newList)
      setPrice(newList[id].price * selected)
      

}
const addItem =(item) =>{
    let product = []
    const productImageIndex = bColor.findIndex((col)=>col==borderColor)
    const productImage = images[productImageIndex]
    product.push({
       product:productImage,
       prPrice:price
    })
   
    cart =="" ? setCart(product) :setCart([...cart,...product])
     

  }  
const callculatePrice = (event) =>{
  setSelected(event.target.value)
  console.log(selected)
  const item = sizes.find((product)=>product.active == true)
  setPrice(item.price * event.target.value)
}

  useEffect(() => {
    if(image ==""){
      setImage(images[0].img)
    }
  }, [])

  useEffect(()=>{
    setSize(sizes[0])
  },[])

  useEffect(()=>{
    console.log(cart)
  },[cart])

  
 

  return (
    <div className="App">
       <div className='row'>
          
          
         </div>
         <div className='row'>
         <div className='column container' style={{
        border:`5px solid ${borderColor}`
      }}>
        <div className='cart'>
            <i className='ion-android-cart'></i>
            <span>{cart.length}</span>
          </div>
        <div className='col-md-6 col-sm-12 left'>
          <div className='row large-image'>
        <img src={image}></img>
          </div>

          <div className='row lists'>
            {
              images.map((selectedImage)=>{

               return( 
               
               <div 
                 onClick={(event) => ChangeImage(event)}
                 value={selectedImage.id}
                 key={selectedImage.id}
                className='col-md-3 images'> 
                  <img src={selectedImage.img}></img>
                  
                </div> 
               )
              })
            }
           
          </div>
          <div className='row choose-size' style={{
              color:`${borderColor}`
            }}>
            <p >Choose Your Size</p>
          </div>
          <div className='row'>
              <div className='column size-list'>
                 {
                  sizes.map((size) =>
                  {
                      return (
                        <div 
                          onClick={(event)=>ChangeSize(event)}
                        key={size.id}
                        value = {size.id}

                          className={ size.active ?  'col-sm-1 sizes active':'col-sm-1 sizes'}     
                            style={{ 
                              backgroundColor:`${size.active == true ? borderColor:'' }`,
                              color:`${size.active==true ? '#fff' :''}`,
                              border:`1px solid ${borderColor}`
                            }}    
                          >
                             {size.size} 
                              
                             </div>
                      )
                  })
                 }

              </div>
          </div>
        </div>

        <div className='col-md-6 right'>
          <div className='row top'>
            <div className='upper'>
             <h4> Men's Basketball Shoes </h4>
             <div className='stock'>
             <h3> Zoom Freak 3 </h3>
             <span style={{
              color:`${borderColor}`
             }} >in Stock</span>
             </div>
            <div className='price'>
              <h5>$225</h5>
            <h3> ${price}</h3>
            </div>
             <h5 className='alarm'> <i class="fa ion-ios-alarm"></i> 11 hours left at this price!</h5>
            </div>

            <div className='rating column'>
            <span className=" fa fa-star checked"></span>
            <span className=" fa fa-star checked"></span>
            <span className=" fa fa-star checked"></span>
            <span className=" fa fa-star checked"></span>
            <span className=" fa fa-star unchecked"></span>

            </div>
          </div>
          <div className='middle column'>
            <div className='amount col-md-3'>
              <select onChange={(event)=>{
                
                callculatePrice(event)
              }}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
            </div>
            <div className='add-to-cart col-md-9'>
              <button onClick={addItem} style={{
                 border: `3px solid ${borderColor}`
              }}> Add To Cart </button>
            </div>

          </div>
          <div className='row bottom'>
            <p> Giannis is an athlete of freakish power and incredible range. 
              His ability to play any position make him difficult to guard and nearly impossible to stop. 
              The Zoom Freak 3 helps Giannis misdirecting Euro-step.</p>
          </div>
        </div>
      </div>
           </div>
      
    </div>
  );
}

export default App;
