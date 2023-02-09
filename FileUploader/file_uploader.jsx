import React, { useState } from "react";
import "./file-uploader.css";
import Group from "../image/Group.svg"

export const File_Uploader = () => {
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setImageURL(fileReader.result);
    };
    const handleOnChange = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setImage(file);
            fileReader.readAsDataURL(file);
        }
    };
    const handleRemoveImage = () => {
        setImageURL(null);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files && event.dataTransfer.files.length) {
            setImage(event.dataTransfer.files[0]);
            fileReader.readAsDataURL(event.dataTransfer.files[0]);
        }
    };
    const handleDragEmpty = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    const id = Number();
    const handleSubmit = async () => {
        const data = {
            id: id,
            imageURL: imageURL
        };
        try {
            const response = await fetch("http://localhost:3000/All/Image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        handleDragEmpty()
    };


    return (

        <form className="file-uploader" onSubmit={handleSubmit}>
            <label
                htmlFor="file-loader-button"
                className="file-uploader__custom-button"
            >
                Загрузить файл
            </label>
            <input
                id={id}
                type="file"
                className="file-uploader__upload-button hover"
                onChange={handleOnChange}
            />
            {
                imageURL ? <img
                    src={imageURL ? imageURL : "no_photo.jpg"}
                    className="file-uploader__preview"
                    alt="preview"
                    onDrop={handleDrop}
                    onDragEnter={handleDragEmpty}
                    onDragOver={handleDragEmpty}
                />: <img className="Group" src={Group} alt=""/>
            }
            {imageURL ?<div>
                <div className="jc-sa">
                    <div className="ai-c ll hover">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 15L10 19L14 23" stroke="#808080" stroke-width="2"/>
                            <path d="M18.0622 8.5C18.6766 9.56413 19 10.7712 19 12C19 13.2288 18.6766 14.4359 18.0622 15.5C17.4478 16.5641 16.5641 17.4478 15.5 18.0622C14.4359 18.6766 13.2288 19 12 19" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                            <path d="M10 9L14 5L10 1" stroke="#808080" stroke-width="2"/>
                            <path d="M5.93782 15.5C5.32344 14.4359 5 13.2288 5 12C5 10.7712 5.32344 9.56413 5.93782 8.5C6.5522 7.43587 7.43587 6.5522 8.5 5.93782C9.56413 5.32344 10.7712 5 12 5" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <h4 className="color-2">Выбрать другой</h4>
                    </div>
                    <div className="ai-c ll hover l" onClick={handleRemoveImage} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 15L10 12" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                            <path d="M14 15L14 12" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                            <path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                            <path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="#808080" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <h4 className="color-2">Удалить</h4>
                    </div>
                </div>
                <div className="button mt50 jc-c">
                    <button className="hover file-uploader__upload-submit uppercase background-1 color-w"> добавить расчёт</button>

                </div>
            </div> : null}
            <div className="file-uploader__file-name">{image ? image.name : ""}</div>
        </form>
    );
};
