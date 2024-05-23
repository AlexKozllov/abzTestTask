import React from 'react';

import s from './uploadFile.module.scss';

const UploadFile = ({ uploadHandler }) => {
    return (
        <label>
            <div className={s.wrapper}>
                <div className={s.uploadInputBtn}>Upload</div>
                <div className={s.uploadInputField}>Upload your photo</div>
            </div>

            <input type="file" name="myFile" hidden accept=".jpeg, .jpg" onChange={uploadHandler}></input>
        </label>
    );
};

export default UploadFile;
