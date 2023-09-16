import'./contact.css'
export default function Contact() {
    return <>
    <div className="container">
        <div className="text">
            <h2 className="h2-cstm text-center py-5">CONATCT SECTION</h2>
            <div className="d-flex justify-content-center star-icon">
                    <i className="fa-solid fa-star fa-lg" style={{color: "black"}}></i>
                </div>
        </div>

        <div className="inputs py-5 d-flex justify-content-center flex-wrap">
            <div className='w-75 py-3 d-flex justify-content-center'>
            <input className='w-75 form-control border-0 border-bottom py-3' type="text" placeholder='userName' />
            </div>
            <div className='w-75 py-3 d-flex justify-content-center'>
                <input className='w-75 form-control border-0 border-bottom py-3' type="text" placeholder='userAge' />
            </div>
            <div className='w-75 py-3 d-flex justify-content-center'>
            <input className='w-75 form-control border-0 border-bottom py-3' type="email" placeholder='userEmail' />
            </div>
            <div className='w-75 py-3 d-flex justify-content-center'>
            <input className='w-75 form-control border-0 border-bottom py-3' type="password" placeholder='userPassword' />
            </div>
            <div className='button-cstm'>
                <button className='btn btn-cstm mt-4 text-white'>send Message</button>
            </div>
        </div>
    </div>

    </>;
}