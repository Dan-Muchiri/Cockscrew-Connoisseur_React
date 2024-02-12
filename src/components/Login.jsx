import React from "react";
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, Input, Button, FormErrorMessage, Box, Flex, Text } from "@chakra-ui/react";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = async (values, actions) => {
    // Handle login logic here
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string()
          .required("Required")
          .min(8, "Password must be at least 8 characters")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contain at least one letter, one number, and one special character"
          ),
      })}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Flex alignItems="center" justifyContent="center" height="100vh">
          <Box minWidth="300px">
            <Form>
              <FormControl id="username" isInvalid={formik.touched.username && formik.errors.username}>
                <FormLabel>Username</FormLabel>
                <Field name="username" as={Input} />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              </FormControl>

              <FormControl id="password" mt={4} isInvalid={formik.touched.password && formik.errors.password}>
                <FormLabel>Password</FormLabel>
                <Field name="password" type="password" as={Input} />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <Button
                mt={8}
                isLoading={formik.isSubmitting}
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Login
              </Button>

              <Text mt={3}>
                Not registered yet?{" "}
                <Box as={Link} to="/signup" color="teal.500">
                  Sign up
                </Box>
              </Text>
            </Form>
          </Box>
        </Flex>
      )}
    </Formik>
  );
};

export default Login;
