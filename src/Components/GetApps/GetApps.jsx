import './GetApps.css'
import driverQR from '../../assets/urban-qr-code.png'
import userQR from '../../assets/urban-line-qr-code.png'
const GetApps = () => {
  return (
    <div className='get-apps-container'>
        <div className='get-apps-header'>
            <h2>It’s easier in the apps</h2>
            <hr/>
        </div>
        <div className='Qr-code-container'>
            <div className='qr-code-card'>
                <img src={userQR}  alt=""/>
                <div>
                    <h1>Download the Robo App</h1>
                    <p>Scan to download</p>
                </div>
                



            </div>
            <div className='qr-code-card'>
                <img src={driverQR}  alt=""/>
                <div>
                    <h1>Download the Robo Driver App</h1>
                    <p>Scan to download</p>
                </div>
                



            </div>
        </div>
    </div>
  )
}

export default GetApps