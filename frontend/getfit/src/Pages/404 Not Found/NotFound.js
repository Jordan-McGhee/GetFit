import React from "react";
import Button from "../../Components/FormElements/Button";

const NotFound = () => {
    return (
        <div className="min-h-screen pb-6 px-6 my-4">
            <div>
                <p className="text-xl mx-auto my-4 border border-black">The page you were looking for doesn't exist.</p>
                <Button 
                    link = {'/'}
                    text = "Go Home"
                    type = "button"
                    className = "button border border-gray-1 rounded-md shadow justify-self-center hover:cursor-pointer hover:scale-105"
                />
            </div>
        </div>
    )
}

export default NotFound