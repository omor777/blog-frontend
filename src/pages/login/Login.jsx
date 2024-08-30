import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../feature/auth/authApiSlice";
import { setToken } from "../../utils/localstorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (formState) => {
    try {
      const data = await loginUser({ ...formState }).unwrap();
      if (data.success) {
        setToken(data.token);
        toast.success(data.message);
        navigate("/");
      }
    } catch (e) {
      const data = e?.data;
      if (data.status || data.message) {
        toast.error(data.message);
      }
      console.error(e);
    }
  };
  return (
    <Box
      sx={{
        mt: 12,
      }}
    >
      <Paper variant="outlined" elevation={4} sx={{ p: 4, flexGrow: 1 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="grey.700"
          textAlign="center"
          mb={5}
        >
          Log{" "}
          <Box component="span" color="primary.main">
            In
          </Box>
        </Typography>
        {/* Form */}
        <Box onSubmit={handleSubmit(handleLogin)} component="form" noValidate>
          <Stack spacing={2}>
            <TextField
              error={isError || errors.email}
              helperText={errors.email && errors.email?.message}
              {...register("email", {
                required: {
                  value: true,
                  message: "Enter your email address",
                },
              })}
              label="Email"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              error={isError || errors.password}
              helperText={errors.password && errors.password?.message}
              {...register("password", {
                required: {
                  value: true,
                  message: "Enter your password",
                },
              })}
              label="Password"
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>

          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Log in
          </Button>

          <Divider sx={{ my: 2 }}>OR</Divider>
          <Stack spacing={1.5}>
            <Button
              startIcon={<GoogleIcon />}
              variant="contained"
              sx={{ bgcolor: "error.dark" }}
            >
              Login with Google
            </Button>
            <Button
              startIcon={<GitHubIcon />}
              variant="contained"
              sx={{ bgcolor: "grey.900" }}
            >
              Login with Github
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
