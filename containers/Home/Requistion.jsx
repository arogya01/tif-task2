import React from "react";
import { Formik, useFormik, useField, Form, useFormikContext } from "formik";
import { Box, Input, Button, Flex, FormLabel, Select } from "@chakra-ui/react";
import { useRequisition } from "../../components/providers/RequistionDetailsProvider";
import * as Yup from "yup";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormLabel fontSize="0.8rem">{label}</FormLabel>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Box as="p" fontSize="0.8rem" color="red.500" px={2}>
          {meta.error}
        </Box>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormLabel htmlFor="select-employment">{label}</FormLabel>
      <Select {...field} {...props} placeholder="select type">
        {props.children}
      </Select>
      {meta.touched && meta.error ? (
        <Box as="p" fontSize="0.8rem" color="red.500" px={2}>
          {meta.error}
        </Box>
      ) : null}
    </>
  );
};

const AutoUpdateValues = () => {
  const { values } = useFormikContext();
  const { state, dispatch } = useRequisition();

  React.useEffect(() => {
    dispatch({
      type: "add",
      formValue: values,
    });
  }, [values, dispatch]);

  return null;
};

export default function Requistion() {
  const { state, dispatch } = useRequisition();

  return (
    <Box p={8} flex="1" borderRadius={4}>
      <Formik
        initialValues={{
          requestTitle: state.requestTitle,
          owner: state.owner,
          hiringManager: state.hiringManager,
          openings: state.openings,
          urgency: state.urgency,
          employementType: state.employementType,
        }}
        validationSchema={Yup.object({
          requestTitle: Yup.string().required("field is required"),
          owner: Yup.string().required("field is required"),
          hiringManager: Yup.string().required("field is required"),
          openings: Yup.string().required("field is required"),
          urgency: Yup.string().required("field is required"),
          employementType: Yup.string()
            .oneOf(["temparory", "permanent"], "Invalid Job type")
            .required("field is required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(values);

          dispatch({
            type: "add",
            formValue: values,
          });
          setSubmitting(false);
        }}
      >
        <Form>
          <AutoUpdateValues />
          <Box p={2}>
            <MyInput
              label="Request Title"
              name="requestTitle"
              id="requestTitle"
              type="text"
              placeholder="something"
            />
          </Box>
          <Box p={2}>
            <MyInput
              label="Owner"
              name="owner"
              id="owner"
              type="text"
              placeholder="something"
            />
          </Box>
          <Box p={2}>
            <MyInput
              label="Hiring Manager"
              name="hiringManager"
              id="hiringManager"
              type="text"
              placeholder="something"
            />
          </Box>
          <Box p={2}>
            <MyInput
              label="Number of openings"
              name="openings"
              id="openings"
              type="text"
              placeholder="something"
            />
          </Box>
          <Box p={2}>
            <MyInput
              label="Urgency"
              name="urgency"
              id="urgency"
              type="text"
              placeholder="something"
            />
          </Box>

          <Box p={2}>
            <MySelect
              label="Employment Type"
              name="employmentType"
              id="employmentType"
            >
              <option value="temparory">Temporary</option>
              <option value="permanent">Permanent</option>
            </MySelect>
          </Box>

          <Flex direction="row" justify="center" mt={4}>
            <Button colorScheme="blue" px={4} mx={4}>
              Prev
            </Button>
            <Button colorScheme="blue" type="submit" px={4} mx={4}>
              Next
            </Button>
          </Flex>
        </Form>
      </Formik>
    </Box>
  );
}
