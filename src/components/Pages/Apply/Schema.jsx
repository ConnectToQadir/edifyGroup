import * as Yup from 'yup'

export const applySchema = Yup.object({
    // Personal Info
    name: Yup.string().min(2).max(30).required("Please Enter Your Name"),
    dob: Yup.date().required("Please Enter Your Date Of Birth"),
    gender: Yup.string().required("Please Select Your Gender"),
    email: Yup.string().email().required("Please Enter Your Email"),
    phone: Yup.number().required("Please Enter Your Contact No"),
    altPhone: Yup.number(),
    address: Yup.string().required("Please Enter Your Home Address"),
    city: Yup.string().required("Please Enter Your City Name"),
    country: Yup.string().required("Please Enter Your Country Name"),

    // Previous Qualification
    eTest:Yup.string().required("Please Select One Of the Option"),
    eTestName: Yup.string(),
    eTestOMar:Yup.string(),
    lisMar: Yup.number(),
    readMar: Yup.number(),
    wriMar: Yup.number(),
    speekMar: Yup.number(),

    // Work Experience
    desig: Yup.string(),
    cName: Yup.string(),
    sDate: Yup.date(),
    eDate: Yup.date(),

    // Country Preference
    pCountries:Yup.array().required("Please Select Prefered Countries"), // pending
    pCourse: Yup.string().required("Please Enter Prefered Course"),
    pCity: Yup.string().required("Please Enter Your Prefered City"),


    // More Info
    oQuery: Yup.string(),
    hereAbout: Yup.string().required("Please Select How did you hear about us ?")
})