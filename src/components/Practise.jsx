import './Practise.css'
import { useState } from 'react'

const Practise = () => {

    const [s1, setS1] = useState(0)
    const [s2, setS2] = useState(-100)
    const [s3, setS3] = useState(-200)
    const [s4, setS4] = useState(-300)


    const sliderStart = () => {
        // fist Slider
        if (s1 === 0) {
            setS1(100)
            setS2(0)
            setS3(-100)
            setS4(-200)
        } else if (s2 === 0) {
            setS1(200)
            setS2(100)
            setS3(0)
            setS4(-100)
        } else if (s3 === 0) {
            setS1(300)
            setS2(200)
            setS3(100)
            setS4(0)
        } else if (s4 === 0) {
            setS1(0)
            setS2(-100)
            setS3(-200)
            setS4(-300)
        }
    }

    setTimeout(sliderStart, 5000);

    // const activeSlide = (active) => {
    //     switch (active) {
    //         case 1: {
    //             setS1(100)
    //             setS2(0)
    //             setS3(-100)
    //             setS4(-200)
    //             break
    //         }
    //         case 2: {
    //             setS1(200)
    //             setS2(100)
    //             setS3(0)
    //             setS4(-100)
    //             break
    //         }
    //         case 3: {
    //             setS1(300)
    //             setS2(200)
    //             setS3(100)
    //             setS4(0)
    //             break
    //         }
    //         case 4: {
    //             setS1(0)
    //             setS2(-100)
    //             setS3(-200)
    //             setS4(-300)
    //             break
    //         }
    //     }
    // }



    return (
        <div className='sliders'>
            <div className="outerDiv">
                <div style={{ top: `${s1}%` }} className="innerDiv">
                    <img src="https://api.lorem.space/image/watch?w=900&h=800" alt="" />
                </div>
                <div style={{ top: `${s2}%` }} className="innerDiv">
                    <img src="https://api.lorem.space/image/pizza?w=900&h=800" alt="" />
                </div>
                <div style={{ top: `${s3}%` }} className="innerDiv">
                    <img src="https://api.lorem.space/image/house?w=900&h=800" alt="" />
                </div>
                <div style={{ top: `${s4}%` }} className="innerDiv">
                    <img src="https://api.lorem.space/image/drink?w=900&h=800" alt="" />
                </div>
            </div>
            {/* <div className="slideActiveButtons">
                <input type="radio" checked={!s1} onChange={() => activeSlide(1)} />
                <input type="radio" checked={!s2} onChange={() => activeSlide(2)} />
                <input type="radio" checked={!s3} onChange={() => activeSlide(3)} />
                <input type="radio" checked={!s4} onChange={() => activeSlide(4)} />
            </div> */}
        </div>
    )
}

export default Practise