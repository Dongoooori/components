import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import * as AutoKana from 'vanilla-autokana';


const Autokana = () => {
    // const personNameRef = useRef(null);
    // const personNameKanaRef = useRef(null);

    console.log("test1") 
    console.log("test2")   
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