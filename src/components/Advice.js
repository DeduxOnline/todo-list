import {useEffect, useState} from "react"
import axios from "axios"

const url = "https://api.adviceslip.com/advice"

function Advice() {
    const [advice, setAdvice] = useState([])
    useEffect(() =>{
        axios.get(url).then((info)=>{
            setAdvice(info.data.slip.advice)
            //console.log(info.data.slip.advice)
        })
    }, [])

    const New = () => {
        axios.get(url).then((info)=>{setAdvice(info.data.slip.advice)})
    }

    return(
        <div className="advice" onClick={() => New()}>
            <p>Advice of the day (Click for more): <br></br> {advice} </p>
        </div>
    )
}


export default Advice