import './welcome.css'
import Image from '../../../../src/media/avataaars.svg'
export default function Welcome () {
    return <>
    <div className="welcomePage d-flex justify-content-center align-items-center ">
        <div className='w-50  d-flex justify-content-center align-items-center flex-wrap'>
        <img src={Image} className='w-25' alt="" />
        <h2 className='text-white text-center mt-2 w-100 '>START FRAMEWORK</h2>
        <div className="d-flex justify-content-center py-4 star-icon1 w-100">
                    <i className="fa-solid fa-star fa-lg" style={{color: "white"}}></i>
        </div>
        <div>
            <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </div>
    </div>
    </>;
}
