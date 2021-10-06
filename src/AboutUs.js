import { Button, Box, FormField, TextInput, Form, Text } from "grommet";
import * as Yup from "yup";
import { useFormik } from "formik";
export const AboutUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      mobile: Yup.string()
        .min(10, "Too Short!")
        .max(12, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required")
    })
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <FormField name="name" htmlFor="text-input-id" label="Name">
          <TextInput
            id="text-input-id"
            name="name"
            onChange={formik.handleChange}
          />
        </FormField>
        {formik.errors.name ? <Text> {formik.errors.name} </Text> : null}
        <FormField name="mobile" htmlFor="text-input-id" label="mobile">
          <TextInput
            id="text-input-id"
            name="mobile"
            onChange={formik.handleChange}
          />
        </FormField>
        {formik.errors.mobile ? <Text> {formik.errors.mobile} </Text> : null}
        <FormField name="email" htmlFor="text-input-id" label="email">
          <TextInput
            id="text-input-id"
            name="email"
            onChange={formik.handleChange}
          />
        </FormField>
        {formik.errors.email ? <Text> {formik.errors.email} </Text> : null}
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </>
  );
};
