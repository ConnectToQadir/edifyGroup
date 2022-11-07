import * as Yup from 'yup'

export const applySchema = Yup.object({
    branch: Yup.string(),
    name: Yup.string().min(2).max(30).required("Please Enter Your Name"),
    gender: Yup.string().required("Please Select Your Gender"),
    email: Yup.string().email(),
    phone: Yup.number().required("Please Enter Your Contact No"),
    city: Yup.string().required("Please Enter Your City Name"),
    edu: Yup.string().required("Please Select Your Qualification"),
    desig: Yup.string(),
    ref: Yup.string(),
    eTest: Yup.string().required("Please Select One Of the Option"),
    pCountries: Yup.array().required("Please Select Prefered Countries"),
    refTo: Yup.string().required("Please Select 8"),
    hereAbout: Yup.string().required("Please Select How did you hear about us ?"),
    rem:Yup.array(),
})