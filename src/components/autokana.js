import { useEffect } from "react";
import * as AutoKana from 'vanilla-autokana';


const Autokana = () => {

    useEffect(() => {
        //
        // return thank you
        // yes
        // no
        // rebase test
        // rebase practice
        // how?
    },[])

    console.log("test")
    console.log("dlijienknlfkn")
    console.log("test")
    console.log("dlijienknlfkn")
    console.log("test")
    console.log("dlijienknlfkn")
    console.log("test")
    console.log("dlijienknlfkn")
 
    useEffect(() => {
        // if (personNameRef.current && personNameKanaRef.current) {
            AutoKana.bind("#personName", "#personNameKana", { katakana: true });
        // }
    }, []);

    return (
        <div style={{ display: "flex", margin: "4px 0px 0px 4px", alignItems: "center" }}>
            <div>한자 :</div>
            <input  
                id="personName"
                // ref={personNameRef}
                name="personName"
                // onChange={(e) => personNameRef.current && (personNameRef.current.value = e.target.value)}
                style={{
                    height: "20px",
                    marginRight: "4px",
                    marginLeft: "4px"
                }}
            />
            <div>히라가나 :</div>
            <input   
                id="personNameKana"
                // ref={personNameKanaRef}
                name="personNameKana"
                style={{
                    height: "20px",
                    marginLeft: "4px"
                }}
            />
        </div>
    )
}

export default Autokana;