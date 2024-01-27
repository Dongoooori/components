import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Images = () => {
    const [image, setImage] = useState(null);
    const [imageTrigger, setImageTrigger] = useState(Date.now());

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleDeleteImage = () => {
        setImageTrigger(Date.now());
        setImage(null)
    }

    console.log("test")
    console.log("test")
    console.log("test")
    console.log("test")


    const handleSearch = () => {
        return null;
    }

    console.log("test")
    console.log("test")
    console.log("test")
    console.log("test")
    console.log("test")
    console.log("knlenflknl,k,,")
    console.log("knlenflknl,k,,")
    console.log("knlenflknl,k,,")
    console.log("knlenflknl,k,,")
    console.log("knlenflknl,k,,")
    console.log("dlkfinelknfiiiiilknef")
    console.log("dlkfinelknfiiiiilknef")
    console.log("dlkfinelknfiiiiilknef")
    console.log("dlkfinelknfiiiiilknef")
    console.log("dlkfinelknfiiiiilknef")
    console.log("dlkfinelknfiiiiilknef")
    
    useEffect(() => {
        // rebase practice
        // commit
        // push
    },[])

    console.log("yes,thank you")

    return (
        <div>
            <div style={{ 
                width: "160px", 
                height: "200px", 
                border: "1px solid black", 
                margin: "4px 0px 0px 4px"
                }}>
                {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
            </div>
            <input
                key={imageTrigger}
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleImageChange}
            />
           {!image ?
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" sx={{ margin: "4px 0px 0px 4px", width: "160px" }}>
                    이미지 불러오기
                </Button>  
            </label> :
                <Button variant="contained" onClick={handleDeleteImage} component="span" sx={{ margin: "4px 0px 0px 4px", width: "160px" }}>
                    클리어
                </Button>}
        </div>
    );
};


export default Images;