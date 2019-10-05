import React, { Component } from 'react';
import '../style.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redheart:'red'
         }
    }
    // addCart(){
    //     if (document.getElementById('addedtocart').style.color != this.state.redheart){}
    // }
    render() { 
        return ( 
            <div className="container">
                <div className="row mt-4">
                    <Link className="productcard" to='/Productshop' style={{ textDecoration: 'none',color:'black' }} target='blank' >
                        <i  className="fa fa-heart" onClick={ ()=>this.addCart()}  title="Like" style={{marginLeft:"90%",fontSize:'25px'}}></i>
                        <img width="100" src='https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBREDMI-6-3-GBGOEL253761790B4CBB/1564553181489_0.jpg?imwidth=282&impolicy=hq' />
                        <br/>
                        <span>REDMI 6 3 GB 64 GB (Black)</span>
                        <h3>₹ 7,500</h3>
                    </Link>

                    <Link className="productcard" to='/Productshop' style={{ textDecoration: 'none',color:'black' }} target='blank' >
                         <i  className="fa fa-heart" title="Like" style={{marginLeft:"90%",fontSize:'25px'}}></i>
                        <img width="100" src='https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAPPLE-IPHONETELE28873946C6345A/1564473849232_0.JPG?imwidth=282&impolicy=hq' />
                        <br/>
                        <span>Apple iPhone XR 64GB (Black)</span>
                        <h3>₹ 49,900</h3>
                    </Link>

                    <Link className="productcard" to='/Productshop' style={{ textDecoration: 'none',color:'black' }} target='blank' >
                        <i  className="fa fa-heart" title="Like" style={{marginLeft:"90%",fontSize:'25px'}}></i>
                        <img width="100" src='https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAPPLE-IPHONETELE28873965302DA2/1564467975281_0.jpeg?imwidth=282&impolicy=hq' />
                        <br/>
                        <span>Apple iPhone 7 32 GB Black</span>
                        <h3>₹ 29,900</h3>
                    </Link>

                    <Link className="productcard" to='/Productshop' style={{ textDecoration: 'none',color:'black' }} target='blank' >
                        <i  className="fa fa-heart" title="Like" style={{marginLeft:"90%",fontSize:'25px'}}></i>
                        <img width="100" src='https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBMI-A2-4GB-64AMOG41279C293173/1564475109617_7.jpg?imwidth=282&impolicy=hq' />
                        <br/>
                        <span>MI A2 4GB 64 GB BLACK</span>
                        <h3>₹ 9,703</h3>
                    </Link>

                    <Link className="productcard" to='/Productshop' style={{ textDecoration: 'none',color:'black' }} target='blank' >
                        <i  className="fa fa-heart" title="Like" style={{marginLeft:"90%",fontSize:'25px'}}></i>
                        <img width="100" src='https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-F11-PROFUTU6297451F703354/1564553212947_0..jpg?imwidth=282&impolicy=hq' />
                        <br/>
                        <span>OPPO F11 Pro 6 GB 128 GB (Thunder Black)</span>
                        <h3>₹ 21,990</h3>
                    </Link>

                    <Link className="productcard" to='/Productshop' style={{ textDecoration: 'none',color:'black' }} target='blank' >
                        <i  className="fa fa-heart" title="Like" style={{marginLeft:"90%",fontSize:'25px'}}></i>
                        <img width="100" src='https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBVIVO-V15-PROKIAA222802B73FF383/1562413423207_0..jpg?imwidth=282&impolicy=hq' />
                        <br/>
                        <span>Vivo V15 Pro 128 GB 6 GB Ruby Red</span>
                        <h3>₹ 23,990</h3>
                    </Link>

                    <Link className="productcard" to='/Productshop' style={{ textDecoration: 'none',color:'black' }} target='blank' >
                        <i  className="fa fa-heart" title="Like" style={{marginLeft:"90%",fontSize:'25px'}}></i>
                        <img width="100" src='https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAPPLE-IPHONETELE28873953E2697C/1564473823839_0.JPG?imwidth=282&impolicy=hq' />
                        <br/>
                        <span>Apple iPhone XR 64GB (RED)</span>
                        <h3>₹ 49,000</h3>
                    </Link>

                    <Link className="productcard" to='/Productshop' style={{ textDecoration: 'none',color:'black' }} target='blank' >
                        <i  className="fa fa-heart" title="Like" style={{marginLeft:"90%",fontSize:'25px'}}></i>
                        <img width="100" src='https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBVIVO-S1-4-GBKIAA22280294BCDAB0/1565089308795_0..jpg?imwidth=282&impolicy=hq' />
                        <br/>
                        <span>Vivo S1 4 GB 128 GB Diamond Black</span>
                        <h3>₹ 17,999</h3>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default Home;