import {React} from 'react'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useFilePicker } from "use-file-picker";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function AddProduct() {
    const [openFileSelector, { filesContent, loading, errors }] = useFilePicker(
      {
        readAs: "DataURL",
        accept: "image/*",
        limitFilesConfig: { max: 1 },
      }
    );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add Product
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="pname"
                required
                fullWidth
                id="p-name"
                placeholder="Product Name"
              />
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                placeholder="Price"
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                type="button"
                variant="outlined"
                onClick={openFileSelector}
                sx={{ mt: 1, mb: 2 }}
              >
                Select Thumbnail
              </Button>
            </Grid>
            <Grid item xs={6} height="100%">
              <Select fullWidth placeholder="Category">
                <MenuItem value="smartphone">SmartPhones</MenuItem>
                <MenuItem value="laptop">Laptops</MenuItem>
                <MenuItem value="camera">Cameras</MenuItem>
                <MenuItem value="gamingconsole">Gaming Consoles</MenuItem>
                <MenuItem value="headphone">Headphones</MenuItem>
                <MenuItem value="television">Televisions</MenuItem>
                <MenuItem value="desktop">Desktops</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} height="100%">
              <Select fullWidth placeholder="Seller">
                <MenuItem value="amazon">Amazon</MenuItem>
                <MenuItem value="bestbuy">Best Buy</MenuItem>
                <MenuItem value="thesource">The Source</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                multiline
                style={{ width: "100%" }}
                name="longDetail"
                placeholder="Detailed Description"
                id="longDetail"
                minRows={10}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="os"
                fullWidth
                id="p-os"
                placeholder="Operating Syatem"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="storage"
                fullWidth
                id="p-storage"
                placeholder="Storage"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="camera"
                fullWidth
                id="p-camera"
                placeholder="Camera specification"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField name="ram" fullWidth id="p-ram" placeholder="RAM" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="dimensions"
                required
                fullWidth
                id="p-dimensions"
                placeholder="Product Dimensions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AddProduct;
