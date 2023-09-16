import './Footer.css'
export default function Footer() {
    return <>
    <div className='foooter w-100'>
    <div className='footer d-flex  justify-content-around align-items-center p-5 flex-wrap mx-auto'>
        <div className='Location text-center px-5'>
            <h3 className='text-white'>LOCATION</h3>
            <p className='text-white'>2215 John Daniel Drive</p>
            <p className='text-white'>Clark, MO 65243</p>
        </div>

        <div className='text-center icons-cstm px-5'>
            <h3 className='text-white'>AROUND THE WEB</h3>
            <div className="icons px-5">
            <i class="fa-brands fa-facebook fa-lg px-2" style={{color: '#ffffff'}}></i>
            <i class="fa-brands fa-twitter fa-lg px-2" style={{color: '#fcfcfc'}}></i>
            <i class="fa-brands fa-linkedin fa-lg px-2" style={{color: "#fcfcfc"}}></i>
            <i class="fa-solid fa-globe fa-lg px-2" style={{color: "#fcfcfc"}}></i>
            </div>
        </div>

        <div className="about about-cstm text-center p-4">
            <h3 className='text-white'>ABOUT FREELANCER</h3>
            <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div>
    </div>
    <div className='d-flex align-items-center justify-content-center subfooter p-2'>
            <p className='text-white text-center text-cstm'>Copyright © Your Website 2021</p>
        </div>
    
    </>;
}
