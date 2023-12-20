import * as yup from "yup"

export const userSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    username: yup.string().required('Required'),
    email: yup.string().email('Invalid email format').required('Required'),
    password:yup.string().min(8).max(15).required('Required'),
})

