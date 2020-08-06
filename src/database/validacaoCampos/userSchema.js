import * as yup from 'yup'

const userSchema = yup.object().shape({
    name: yup.string().required("Obrigatório o nome do usuario"),
    email: yup.string().required("Obrigatório email"),
    password: yup.string().required("Obrigatório senha"),
})

const userSchema2 = yup.object().shape({
    name: yup.string().required("Obrigatório o nome do usuario"),
    email: yup.string().required("Obrigatório email"),
    password: yup.string().required("Obrigatório senha"),
})
export { userSchema, userSchema2 }  