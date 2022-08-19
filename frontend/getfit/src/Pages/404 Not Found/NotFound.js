import React from "react";
import Button from "../../Components/FormElements/Button";

const NotFound = () => {
    return (
        <div>
            <p>The page you were looking for doesn't exist.</p>
            <Button 
                link = {'/'}
                text = "Go Home"
                type = "button"
            />
        </div>
    )
}

export default NotFound