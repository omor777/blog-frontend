import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import dayjs from "dayjs";
import useImageUpload from "../../hooks/useImageUpload";
import { useRegisterUserMutation } from "../../feature/auth/authApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Register = () => {
  const [dateOfBirth, setDateOfBirth] = useState(dayjs());
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { loading, imageUrl, imageUpload } = useImageUpload();
  const [createNewUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      address: "",
      password: "",
    },
  });

  const handleDateOfBirth = (newValue) => {
    setDateOfBirth(newValue);
  };

  const handleUploadImage = (e) => {
    const file = e.target?.files[0];
    setPreviewImageUrl(URL.createObjectURL(file));
    imageUpload(file);
  };

  const handleRemovePreviewImage = () => {
    setPreviewImageUrl(null);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = async (formState) => {
    const newUser = {
      ...formState,
      date_of_birth: dateOfBirth?.toDate(),
      image: imageUrl,
    };
    try {
      const data = await createNewUser(newUser).unwrap();
      if (data.success) {
        toast.success(data.message);
        setPreviewImageUrl(null);
        navigate("/login");
      }
    } catch (e) {
      const data = e?.data;
      if (data?.message) {
        toast.error(data.message);
      }
      console.error(e);
    }
  };

  return (
    <Paper variant="outlined" sx={{ p: 4, mt: 8 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        color="grey.700"
        textAlign="center"
        mb={5}
      >
        Create{" "}
        <Box component="span" color="primary.main">
          Account
        </Box>
      </Typography>
      {/* Form */}
      <Box
        onSubmit={handleSubmit(handleFormSubmit)}
        flexGrow={1}
        component="form"
      >
        <Stack
          sx={{ mb: 2 }}
          direction={{ xs: "column", md: "row" }}
          spacing={2}
        >
          <TextField
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              },
            }}
            {...register("name", {
              required: {
                value: true,
                message: "Name is required!",
              },
              minLength: {
                value: 3,
                message: "Name at least 3 character need!",
              },
            })}
            error={errors.name && errors.name?.message}
            helperText={errors.name && errors.name?.message}
            label="Name"
            fullWidth
          />
          <TextField
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              },
            }}
            {...register("email", {
              required: {
                value: true,
                message: "Email is required!",
              },
              validate: (v) => {
                const res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
                if (!res) return "Email format is incorrect!";
              },
            })}
            error={errors.email && errors.email?.message}
            helperText={errors.email && errors.email?.message}
            label="Email"
            fullWidth
          />
        </Stack>
        <TextField
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            },
          }}
          {...register("bio")}
          multiline
          minRows={3}
          maxRows={5}
          label="Bio"
          fullWidth
        />
        <Stack
          sx={{ mt: 2 }}
          direction={{ xs: "column", md: "row" }}
          spacing={2}
        >
          <TextField
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              },
            }}
            {...register("address")}
            label="Address"
            fullWidth
          />
          <DatePicker
            value={dateOfBirth}
            onChange={(newValue) => handleDateOfBirth(newValue)}
            label="Date of Birth"
            sx={{ width: "100%" }}
          />
        </Stack>
        <TextField
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          {...register("password", {
            required: {
              value: true,
              message: "Password is required!",
            },
            minLength: {
              value: 6,
              message: "Password at least 6 character need!",
            },
          })}
          error={errors.password && errors.password?.message}
          helperText={errors.password && errors.password?.message}
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          sx={{ mt: 2 }}
        />

        <Button
          disabled={loading || isLoading}
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
        >
          Register
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          {previewImageUrl ? (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button
                variant="outlined"
                color="success"
                component="label"
                role={undefined}
                tabIndex={1}
              >
                change
                <VisuallyHiddenInput type="file" onChange={handleUploadImage} />
              </Button>
              <Box
                sx={{
                  width: 160,
                  height: 160,
                  borderRadius: "100%",
                  aspectRatio: 1 / 1,
                  objectFit: "cover",
                  borderWidth: 8,
                  borderStyle: "solid",
                  borderColor: "primary.light",
                }}
                component="img"
                src={previewImageUrl}
              />
              <Button
                onClick={handleRemovePreviewImage}
                variant="outlined"
                color="error"
              >
                Remove
              </Button>
            </Stack>
          ) : (
            <Button
              sx={{
                width: 160,
                height: 160,
                borderRadius: "100%",
                whiteSpace: "nowrap",
                "&.MuiButton-root": {
                  flexDirection: "column",
                  gap: 0.4,
                },
                ".MuiButton-icon": {
                  mx: "auto",
                },
                ".MuiButton-startIcon > :nth-of-type(1)": {
                  fontSize: "2.5rem",
                },
              }}
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <VisuallyHiddenInput type="file" onChange={handleUploadImage} />
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default Register;
