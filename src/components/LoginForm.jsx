import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import {
    Box,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    Link,
    Stack,
    TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.6,
        ease: easing,
        delay: 0.16,
    },
};

const LoginForm = ({ setAuth }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Provide a valid email address")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: true,
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
            console.log("submitting...");
            setTimeout(() => {
                console.log("submited!!");
                // setAuth(false);
                setAuth(true);
                navigate(from, { replace: true });
            }, 2000);
        },
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
        formik;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log(username, password)
        try {
            // let res = await fetch("http://localhost:8000/login", {
            //     method: "POST",
            //     body: JSON.stringify({
            //         username: username,
            //         password: password,
            //     }),
            // });

            let res = await axios.post('http://localhost:8000/login', {
                username: username,
                password: password,
            })
            // let resJson = await res.json();
            console.log(res)
            if (res.data.message === "success") {
                // setUsername("");
                // setPassword("");
                // setMessage("User created successfully");
                setTimeout(() => {
                    console.log("Logged in");
                    // setAuth(false);
                    setAuth(true);
                    navigate(from, { replace: true });
                }, 2000);
            } else {
                console.log(res.data.message)
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <FormikProvider value={formik}>
            {/* <Form autoComplete="off" noValidate onSubmit={handleSubmit}> */}
            <Form autoComplete="off" onSubmit={handleSubmitForm}>
                <Box
                    component={motion.div}
                    animate={{
                        transition: {
                            staggerChildren: 0.55,
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, y: 40 }}
                        animate={animate}
                    >
                        {/* <TextField
                            fullWidth
                            autoComplete="username"
                            type="email"
                            label="Email Address"

                            //DARI DOKUMENTASI
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            //DARI DOKUMENTASI

                            {...getFieldProps("email")}
                            error={Boolean(touched.email && errors.email)}
                            helperText={touched.email && errors.email}
                        /> */}

                        {/* <TextField
                            fullWidth
                            autoComplete="current-password"
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            {...getFieldProps("password")}
                            error={Boolean(touched.password && errors.password)}
                            helperText={touched.password && errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword((prev) => !prev)}
                                        >
                                            {showPassword ? (
                                                <Icon icon="eva:eye-fill" />
                                            ) : (
                                                <Icon icon="eva:eye-off-fill" />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}

                            //DARI DOKUMENTASI
                            value={password}
                            onChange={(e) => setPassword(e.target.password)}
                        //DARI DOKUMENTASI
                        /> */}

                        <input
                            type="text"
                            value={username}
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="text"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={animate}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ my: 2 }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...getFieldProps("remember")}
                                        checked={values.remember}
                                    />
                                }
                                label="Remember me"
                            />

                            <Link
                                component={RouterLink}
                                variant="subtitle2"
                                to="#"
                                underline="hover"
                            >
                                Forgot password?
                            </Link>
                        </Stack>

                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            loading={isSubmitting}
                        >
                            {isSubmitting ? "loading..." : "Login"}
                        </LoadingButton>
                    </Box>
                </Box>
            </Form>
        </FormikProvider>
    );
};

export default LoginForm;
