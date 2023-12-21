import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MedicalForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            passportOrId: '',
            birthYear: '',
            gender: '',
            nationality: '',
            hasHealthInsurance: false,
            province: '',
            district: '',
            ward: '',
            phone: '',
            email: '',
            countriesVisited: '',
            symptoms: {
                cough: false,
                fever: false,
                difficultyBreathing: false,
            },
            contact:{
                sicker: false,
                foreigner: false,
                symptomPerson: false
            }
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            passportOrId: Yup.string().required('Required'),
            birthYear: Yup.number().min(1900, 'Birth year must be greater than 1900').required('Required'),
            gender: Yup.string().oneOf(['male', 'female'], 'Invalid gender').required('Required'),
            nationality: Yup.string().required('Required'),
            phone: Yup.string().required('Required'),
            province: Yup.string().required('Required'),
            district: Yup.string().required('Required'),
            ward: Yup.string().required('Required'),
            email: Yup.string()
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address')
                .required('Required'),
        }),
        onSubmit: values => {
            alert('Khai báo thành công!');
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Họ tên:</label>
                <div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                </div>
            </div>
            <div>
                <label htmlFor="passportOrId">Số hộ chiếu/CMND:</label>
                <div>
                    <input
                        type="text"
                        id="passportOrId"
                        name="passportOrId"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.passportOrId}
                    />
                    {formik.touched.passportOrId && formik.errors.passportOrId ? (
                        <div>{formik.errors.passportOrId}</div>
                    ) : null}
                </div>
            </div>

            <div>
                <label htmlFor="birthYear">Năm sinh:</label>
                <div>
                    <input
                        type="number"
                        id="birthYear"
                        name="birthYear"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.birthYear}
                    />
                    {formik.touched.birthYear && formik.errors.birthYear ? (
                        <div>{formik.errors.birthYear}</div>
                    ) : null}
                </div>
            </div>
            <div>
                <label htmlFor="nationality">Quốc tịch:</label>
                <div>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nationality}
                    />
                    {formik.touched.nationality && formik.errors.nationality ? (
                        <div>{formik.errors.nationality}</div>
                    ) : null}
                </div>
            </div>
            <div>
                <label htmlFor="hasHealthInsurance">
                    <span>Có thẻ bảo hiểm y tế </span>
                    <input
                        type="checkbox"
                        id="hasHealthInsurance"
                        name="hasHealthInsurance"
                        checked={formik.values.hasHealthInsurance}
                        onChange={formik.handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="province">Tỉnh thành:</label>
                <div>
                    <input
                        type="text"
                        id="province"
                        name="province"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.province}
                    />
                    {formik.touched.province && formik.errors.province ? (
                        <div>{formik.errors.province}</div>
                    ) : null}
                </div>
            </div>

            <div>
                <label htmlFor="district">Quận/Huyện:</label>
                <div>
                    <input
                        type="text"
                        id="district"
                        name="district"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.district}
                    />
                    {formik.touched.district && formik.errors.district ? (
                        <div>{formik.errors.district}</div>
                    ) : null}
                </div>
            </div>

            <div>
                <label htmlFor="ward">Phường/Xã:</label>
                <div>
                    <input
                        type="text"
                        id="ward"
                        name="ward"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ward}
                    />
                    {formik.touched.ward && formik.errors.ward ? (
                        <div>{formik.errors.ward}</div>
                    ) : null}
                </div>
            </div>
            <div>
                <label htmlFor="phone">Điện thoại:</label>
                <div>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div>{formik.errors.phone}</div>
                    ) : null}
                </div>
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
            </div>
            <div>
                <label>Giới tính</label>
                <div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formik.values.gender === 'male'}
                                onChange={formik.handleChange}
                            />
                            Nam
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formik.values.gender === 'female'}
                                onChange={formik.handleChange}
                            />
                            Nữ
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <label>Có triệu chứng nào trong 14 ngày qua không?</label>
                <div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="symptoms.cough"
                                checked={formik.values.symptoms.cough}
                                onChange={formik.handleChange}
                            />
                            Ho
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="symptoms.fever"
                                checked={formik.values.symptoms.fever}
                                onChange={formik.handleChange}
                            />
                            Sốt
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="symptoms.difficultyBreathing"
                                checked={formik.values.symptoms.difficultyBreathing}
                                onChange={formik.handleChange}
                            />
                            Khó thở
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="countriesVisited">Có đi qua quốc gia nào trong 14 ngày qua không?</label>
                <div>
                    <textarea
                        id="countriesVisited"
                        name="countriesVisited"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.countriesVisited}
                    />
                    {formik.touched.countriesVisited && formik.errors.countriesVisited ? (
                        <div>{formik.errors.countriesVisited}</div>
                    ) : null}
                </div>
            </div>
            <div>
                <label>Trong 14 ngày qua có tiếp xúc với?</label>
                <div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="contact.sicker"
                                checked={formik.values.contact.sicker}
                                onChange={formik.handleChange}
                            />
                            Với người nghi ngờ hoặc mắc Covid 19
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="contact.foreigner"
                                checked={formik.values.contact.foreigner}
                                onChange={formik.handleChange}
                            />
                            Với người nước ngoài trong vùng bệnh
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="contact.symptomPerson"
                                checked={formik.values.contact.symptomPerson}
                                onChange={formik.handleChange}
                            />
                            Với người có các triệu chứng?
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MedicalForm;