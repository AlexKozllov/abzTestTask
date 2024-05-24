import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import s from './registrationForm.module.scss';
import { getRadioBtnPositions, postRegistration } from '../../services/abzAgencyApi.js';
import UploadFile from '../custom/uploadFile/UploadFile.js';
import CustomInputText from '../custom/customInputText/CustomInputText.js';
import CustomRadioBtn from '../custom/customRadioBtn/CustomRadioBtn.js';
import { registrationUsers } from '../../redux/operations/usersOperations.js';
import { useDispatch, useSelector } from 'react-redux';
import { InputMask } from '@react-input/mask';
import { phoneConfig, validationFormConfig } from '../../configs/validationConfig.js';
import SuccessfullyRegistered from '../successfullyRegistered/SuccessfullyRegistered.js';
import { setRegistrationUserError } from '../../redux/actions/usersActions.js';

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const registratedUserErrors = useSelector((state) => state.users.registratedUserErrors);

    const [radioBtnPositions, setRadioBtnPositions] = useState([]);

    const initRegistrationForm = { name: '', email: '', phone: '', position_id: '', photo: {} };
    const [registrationForm, setRegistrationForm] = useState(initRegistrationForm);

    useEffect(() => {
        (async () => {
            const positionsBtn = await getRadioBtnPositions();
            setRadioBtnPositions([...positionsBtn]);
        })();
    }, []);

    const [detail, setDetail] = useState(null);

    const inputHandler = (e) => {
        dispatch(setRegistrationUserError({ field: e.target.name, massage: '' }));
        if (e.target.name === 'phone') {
            setRegistrationForm({ ...registrationForm, [e.target.name]: `${phoneConfig.getPrefix()}${e.detail.input}` });
            setDetail(e.detail);
        } else {
            setRegistrationForm({ ...registrationForm, [e.target.name]: e.target.value });
        }
    };

    const validationHandler = (e) => {
        const { rule } = validationFormConfig[e.target.name];
        const rgexp = new RegExp(rule);

        if (!rgexp.test(registrationForm[e.target.name])) {
            dispatch(setRegistrationUserError({ field: e.target.name, massage: validationFormConfig[e.target.name].errorMassage }));
        } else if (e.target.name === 'position') {
            setRegistrationForm({ ...registrationForm, position_id: e.target.id });
            dispatch(setRegistrationUserError({ field: 'position_id', massage: '' }));
        } else {
            dispatch(setRegistrationUserError({ field: e.target.name, massage: '' }));
        }
    };

    const uploadHandler = (e) => {
        if (e.target.files[0].size <= validationFormConfig.photo.rule) {
            setRegistrationForm({ ...registrationForm, photo: e.target.files[0] });
            dispatch(setRegistrationUserError({ field: 'photo', massage: '' }));
        } else {
            dispatch(setRegistrationUserError({ field: 'photo', massage: validationFormConfig.photo.errorMassage }));
        }
    };

    const formHandler = (e) => {
        e.preventDefault();
        if (registratedUserErrors.error) {
            dispatch(registrationUsers(registrationForm));
        }
    };

    return registratedUserErrors.success ? (
        <SuccessfullyRegistered />
    ) : (
        <section>
            <h2>Working with POST request</h2>
            <form onSubmit={formHandler}>
                <div className={s.inputTextWrapper}>
                    <CustomInputText
                        name="name"
                        value={registrationForm.name}
                        placeholderValue="Your name"
                        errorText={registratedUserErrors.fails && registratedUserErrors.fails.name}
                        inputHandler={inputHandler}
                        blureHandler={validationHandler}
                    />
                    <CustomInputText
                        name="email"
                        value={registrationForm.email}
                        placeholderValue="Email"
                        errorText={registratedUserErrors.fails && registratedUserErrors.fails.email}
                        inputHandler={inputHandler}
                        blureHandler={validationHandler}
                    />
                    <InputMask
                        component={CustomInputText}
                        mask={phoneConfig.mask}
                        replacement={{ _: /\d/ }}
                        name="phone"
                        value={detail?.value ?? ''}
                        placeholderValue="Phone"
                        helpText="+38 (XXX) XXX - XX - XX"
                        errorText={registratedUserErrors.fails && registratedUserErrors.fails.phone}
                        onMask={(event) => inputHandler(event)}
                        blureHandler={validationHandler}
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
                                inputHandler={validationHandler}
                            />
                        );
                    })}
                    {registratedUserErrors.fails && registratedUserErrors.fails.position_id && (
                        <span className={s.errorText}>{registratedUserErrors.fails.position_id}</span>
                    )}
                </div>

                <UploadFile uploadHandler={uploadHandler} />
                {registratedUserErrors.fails && registratedUserErrors.fails.photo && (
                    <span className={s.errorText}>{registratedUserErrors.fails.photo}</span>
                )}
                <input
                    type="submit"
                    className={`${s.submitBtn} ${!registratedUserErrors.error ? s.disabled : ''}`}
                    disabled={!registratedUserErrors.error}
                    value="Sign up"
                />
            </form>
        </section>
    );
};

export default RegistrationForm;
