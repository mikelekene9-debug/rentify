     "use client"
import { db } from "@/config/firebase.config";
import { FormControl, InputLabel, MenuItem, TextField, Select, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import * as yup from "yup"


const schema = yup.object().shape({
    fullName: yup.string().required("full Name is required").min(2),
    phone: yup.string().required("Phone number is required").min(11),
    email: yup.string().email("enter a valid email"),
    apartment: yup.string().required("Apartment is required"),
    rentAmount: yup.number().required("Rent amount is required"),
    dueDate: yup.date().required("due date is required"),
    paymentStatus: yup.string().oneOf(["paid","unpaid"]).required("status is required"),
    notes: yup.string().required("Notes is required"),
})

export default function TenantForm () {
    const {data : Session} = useSession();
    const {handleSubmit, handleChange, handleBlur, touched, values, errors} = useFormik({
        initialValues: {
            fullName:"",
            phone:"",
            apartment:"",
            email:"",
            rentAmount:"",
            dueDate:"",
            paymentStatus:"",
            notes:"",

        },
        onSubmit: async(values, {resetForm})=>{
                await addDoc(collection(db, "tenants"),{
                    user:Session?.user?.id,
                    fullName:values.fullName,
                    phone:values.phone,
                    email: values.email,
                    apartment:values.apartment,
                    rentAmount:values.rentAmount,
                    dueDate:values.dueDate,
                    paymentStatus:values.paymentStatus,
                    notes:values.notes,
                    timeCreated: new Date().getTime(),
                }).then(()=>{
                    alert("you have submitted succesfully")
                    resetForm()
                })
                .catch(e =>{
                    alert("you have submitted successfully")
                    resetForm();
                })
        },
        validationSchema:schema
    })
    return(
        <main className="min-h-screen max-w-3xl mx-auto mt-10 px-6 py-8 bg-white shadow-lg rounded-xl">
            <h1 className="text-2xl font-semibold mb-6 text-center">Add Tenant</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <TextField
                            fullWidth
                            label="Full Name"
                            placeholder="Enter full Name"
                            type="text"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="fullName"/>
                            {touched.fullName && errors.fullName ? <span className="text-red-500 text-xs">{errors.fullName}</span>: null}
                        </div>
                        <div>
                            <TextField
                            fullWidth
                            label="Phone number"
                            placeholder="+234"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="tel"
                            id="phone"/>
                            {touched.phone && errors.phone ? <span className="text-red-500 text-xs">{errors.phone}</span>: null}
                        </div>
                    </div>
                    {/* Email + Apartment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <TextField
                            fullWidth
                            label="apartment/unit"
                            placeholder="1 bedroom"
                            type="text"
                            value={values.apartment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="apartment"/>
                             {touched.apartment && errors.apartment ? <span className="text-red-500 text-xs">{errors.apartment}</span>: null}
                        </div>
                        <div>
                            <TextField
                            fullWidth
                            label="Email"
                            placeholder="emmanuel@gmail.com"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="email"/>
                             {touched.email && errors.email ? <span className="text-red-500 text-xs">{errors.email}</span>: null}
                        </div>
                    </div>
                    {/* Rent Amount + Due Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <TextField
                            fullWidth
                            label="Rent Amount"
                            placeholder="Enter rent amount"
                            type="number"
                            value={values.rentAmount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="rentAmount"/>
                             {touched.rentAmount && errors.rentAmount ? <span className="text-red-500 text-xs">{errors.rentAmount}</span>: null}
                        </div>
                        <div>
                            <TextField
                            fullWidth
                            label=""
                            placeholder=""
                            type="date"
                            value={values.dueDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="dueDate"/>
                             {touched.dueDate && errors.dueDate ? <span className="text-red-500 text-xs">{errors.dueDate}</span>: null}
                        </div>
                    </div>
                    {/*payment status */}
                    <FormControl fullWidth>
                        <InputLabel id="paymentStatus-label">payment status</InputLabel>
                        <Select
                        labelId="paymentStatus-label"
                        value={values.paymentStatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="paymentStatus"
                        name="paymentStatus">

                            <MenuItem value="Paid">Paid</MenuItem>
                            <MenuItem value="Unpaid">Unpaid</MenuItem>

                       
                         {touched.paymentStatus && errors.paymentStatus ? <span className="text-red-500 text-xs">{errors.paymentStatus}</span>: null}
                          </Select>
                    </FormControl>
                    {/* Notes */}
                    <div>
                        <TextField
                        fullWidth
                        multiline
                        rows={3}
                        type="text"
                        label="Notes"
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Notes"
                        id="notes"/>
                         {touched.notes && errors.notes ? <span className="text-red-500 text-xs">{errors.notes}</span>: null}
                    </div>
                    {/* submit button */}
                    <div>
                        <Button fullWidth variant="contained" type="submit" color="primary">
                            Add Tenant
                        </Button>
                    </div>
                </form>

        </main>
    )
}