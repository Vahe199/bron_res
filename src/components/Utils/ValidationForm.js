import * as Yup from "yup";

const phoneRegExp = /^(\+\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное поле'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Номер телефона недействителен')
        .min(12, 'Номер телефона недействителен')
        .max(18, 'Номер телефона недействителен')
        .required('Обязательное поле'),
});
