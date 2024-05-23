import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import s from './registrationForm.module.scss';
import { getRadioBtnPositions, postRegistration } from '../../services/abzAgencyApi.js';
import UploadFile from '../custom/uploadFile/UploadFile.js';
import CustomInputText from '../custom/customInputText/CustomInputText.js';
import CustomRadioBtn from '../custom/customRadioBtn/CustomRadioBtn.js';

const RegistrationForm = () => {
    const [radioBtnPositions, setRadioBtnPositions] = useState([]);

    const initRegistrationForm = { name: '', email: '', phone: '', position_id: '', photo: {} };
    const [registrationForm, setRegistrationForm] = useState(initRegistrationForm);

    const [validationErrorResponse, setvalidationErrorResponse] = useState({});

    useEffect(() => {
        (async () => {
            const positionsBtn = await getRadioBtnPositions();
            setRadioBtnPositions([...positionsBtn]);
        })();
    }, []);

    const inputHandler = (e) => {
        setRegistrationForm({ ...registrationForm, [e.target.name]: e.target.value });
    };

    const positionHandler = (e) => {
        setRegistrationForm({ ...registrationForm, position_id: e.target.id });
    };

    const uploadHandler = (e) => {
        setRegistrationForm({ ...registrationForm, photo: e.target.files[0] });
    };

    const formHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(registrationForm).map((item) => {
            formData.append(item, registrationForm[item]);
            console.log(registrationForm[item]);
        });

        postRegistration(registrationForm);
    };

    return (
        <section>
            <h2>Working with POST request</h2>
            <form onSubmit={formHandler}>
                <div className={s.inputTextWrapper}>
                    <CustomInputText
                        name="name"
                        value={registrationForm.name}
                        placeholderValue="Your name"
                        error={''}
                        errorText="errorText"
                        inputHandler={inputHandler}
                    />
                    <CustomInputText
                        name="email"
                        value={registrationForm.email}
                        placeholderValue="Email"
                        error={''}
                        errorText="errorText"
                        inputHandler={inputHandler}
                    />
                    <CustomInputText
                        name="phone"
                        value={registrationForm.phome}
                        placeholderValue="Phone"
                        helpText="+38 (XXX) XXX - XX - XX"
                        error={''}
                        errorText="errorText"
                        inputHandler={inputHandler}
                    />
                </div>
                <p>Select your position</p>
                <div className={s.inputRadioWrapper}>
                    {radioBtnPositions.map((item) => {
                        return (
                            <CustomRadioBtn
                                key={item.id}
                                name="position"
                                id={item.id}
                                value={item.name}
                                selected={+registrationForm.position_id === item.id}
                                inputHandler={positionHandler}
                            />
                        );
                    })}
                </div>

                <UploadFile uploadHandler={uploadHandler} />
                <input type="submit" className={`${s.submitBtn} ${s.disabled}`} value="Sign up" />
            </form>
        </section>
    );
};

export default RegistrationForm;
