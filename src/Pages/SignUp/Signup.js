import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import MainLogo from "../../Icons/FAVI_ 4.png";
import { TextInput } from "../../Re-usable Components/Button/TextInput";
import MyButton from "../../Re-usable Components/Button/MyButton";

const checkData = [
  {
    fieldName: "firstName",
    placeHolder: "First Name",
    type: "text",
  },
  {
    fieldName: "lastName",
    placeHolder: "Last Name",
    type: "text",
  },
  {
      fieldName:"username",
      placeHolder:"Username",
      type:"text"
  },
  {
      fieldName:"password",
      placeHolder:"Password",
      type:"Password"
  },
  {
      fieldName:"birthDate",
      placeHolder:"Birth Date MM/DD/YYYY",
      type:"text"
  }
];

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Grid container>
            <Grid item xs={12}>
              <img
                src={MainLogo}
                height="20%"
                width="max-width"
                style={{ marginTop: "12%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <form
                noValidate
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                {checkData.map((x) => (
                  <TextInput
                    fieldName={x.fieldName}
                    register={register}
                    errors={errors}
                    placeHolder={x.placeHolder}
                    isRequired={true}
                    maximLength={20}
                    minimLength={2}
                    key={x.fieldName}
                    type={x.type}
                  />
                ))}

                <Grid item xs={12}>
                  <MyButton colorBg="#FF92B2" textColor="white">
                    Sign Up
                  </MyButton>
                </Grid>
              </form>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  );
};
