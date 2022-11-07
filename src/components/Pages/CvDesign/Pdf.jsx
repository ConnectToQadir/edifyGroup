import {useRef} from 'react'
import JsPDF from 'jspdf'

const Pdf = () => {

  const applicationRef = useRef()


  const generatePdf = () => {
      var pdf = new JsPDF('p', 'pt', 'a4');
      pdf.html(applicationRef.current, {
          margin: [10, 10, 10, 10],
          callback: (pdf) => {
              pdf.save("Application.pdf")
          }
      })
  }
  return (
    <>
    
    <div style={{display:"flex",justifyContent:"center"}} ref={applicationRef}>
      <img style={{width:"100px",height:"100px",borderRadius:"50%",border:"1px solid red"}} src="http://localhost:3000/images/ceoImg.png" alt="" />
    </div>
    </>
  )
}

export default Pdf