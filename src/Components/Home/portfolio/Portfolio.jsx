import './portfolio.css'
import Image1 from '../../../../src/media/poert1.png'
import Image2 from '../../../../src/media/port2.png'
import Image3 from '../../../../src/media/port3.png'
export default function Portfolio () {
    return <>
    <div className="container">
            <div className="text">
            <h2 className="h2-cstm text-center py-4">PORTFOLIO COMPONENT</h2>
            <div className="d-flex justify-content-center star-icon">
                    <i className="fa-solid fa-star fa-lg" style={{color: "black"}}></i>
                </div>
             </div>

             <div className="row g-4 py-5">
                <div className="col-md-4">
                    <div className="item">
                    <img src={Image1} className="w-100 rounded-3" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center text-white">
                    <i class="fa-solid fa-plus icon-cstm" style={{color: 'white'}}></i>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                    <img src={Image2} className="w-100 rounded-3" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center text-white">
                    <i class="fa-solid fa-plus icon-cstm" style={{color: 'white'}}></i>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                    <img src={Image3} className="w-100 rounded-3" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center text-white">
                    <i class="fa-solid fa-plus icon-cstm" style={{color: 'white'}}></i>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                    <img src={Image1} className="w-100 rounded-3" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center text-white">
                    <i class="fa-solid fa-plus icon-cstm" style={{color: 'white'}}></i>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                    <img src={Image2} className="w-100 rounded-3" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center text-white">
                    <i class="fa-solid fa-plus icon-cstm" style={{color: 'white'}}></i>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="item">
                    <img src={Image3} className="w-100 rounded-3" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center text-white">
                    <i class="fa-solid fa-plus icon-cstm" style={{color: '#ffffff' }}></i>
                    </div>
                </div>
                </div>
             </div>
    </div>
    </>;
}

