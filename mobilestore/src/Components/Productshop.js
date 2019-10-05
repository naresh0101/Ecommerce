import React, { Component } from 'react'

class Buyproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div   className="subclsbuy">
                <div className="row product-contain">
                   <div className="phoneimg col-sm-6">
                        <div className="addtocard" title="It will get add in you whishlist"><i  className="fa fa-shopping-cart"  title="Add to card"></i></div>
                        <img style={{margin:'10px'}} className="gc-display-display" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-F11-6-GFUTU629745D01DFEBF/1564553827622_0..png?imwidth=282&impolicy=hq" />
                   </div>
                
                    <div className="phonedetails col-sm-6">
                        <h4>Oppo A5s 3 GB 32 GB Black</h4>
                        <div className="d-flex flex-decoration-row"> <h3>₹ 9,990</h3> <del className="text-success"> 10% off</del></div>
                    <hr/>

                    <h5>Highlights</h5>
                    <sub className="text-success">1 Year for Phone and 6 Months for Accessories</sub>
                    <ul>
                        <li>Product Type: Smart Phones</li>
                        <li>Brand: OPPO</li>
                        <li>Processor: MediaTek Helio P35 Octa Core</li>
                        <li>Operating System: Android Oreo v8.1</li>
                        <li>Screen Size: 15.75 cm (6.2 inch)</li>
                        <li>RAM: 3 GB</li>
                        <li>Internal Memory: 32 GB</li>
                        <li>Camera: 13 MP + 2 MP</li>
                        <li>Sim Type: Dual SIM</li>
                        <li>OS: Android</li>
                        <li>Color: Black</li>
                        <li>Model Name: A5S</li>
                        <li>Battery Type: Li-ion</li>
                    </ul>

                   <div> 
                    <h5><i className="fa fa-map-marker" style={{color:'#80d8ff',fontSize:'30px',paddingRight:'5px'}}/> Address-</h5>
                    <h5 title="Click to change Address"> Sector-37,Noida(201303),Delhi</h5>
                   </div>

                    <div className="btn4stuff"> 
                        <button>Back to Products</button>
                        <button className="buybtn">Buy <span>₹ 9,990</span></button>
                    </div>
                
                    </div>

                </div>
                </div>
            </div>  
         );
    }
}
 
export default Buyproduct;