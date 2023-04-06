# Project Proposal - Digi Soul: A tech world

* Date Created: 28 FEB 2023
* Last Modification Date: 28 FEB 2023
* Netlify URL: https://stunning-sundae-39741d.netlify.app
* Git URL: https://git.cs.dal.ca/amanjot/group-15-project.git

## Authors

* Subham Sharma - subham@dal.ca (B00910585)
* Amanjot Singh - amanjot.singh@dal.ca (B00910700)
* Guru Kiran - gkiran@dal.ca (B00917973)
* Swinkhal Sakaria - sw594561@dal.ca (B00899560)

## Prerequisites

* Visual Studio code Installation : 'https://code.visualstudio.com/download'

## Installing

- By creating a local folder, clone the project into the folder.
- Open the project in VS Code.
- run npm commands like "npm i react-router-dom" to install npm modules.
- to start the application, run command "npm start"

```
Compiled successfully!
You can now view digi-soul in the browser.
Local:            http://localhost:3000
On Your Network:  http://your-ip:3000
Note that the development build is not optimized.
To create a production build, use npm run build.
webpack compiled successfully
```
## Deployment

* Pushed code on a Github repository.
* Connected github repository with Netlify account.
* Project is built on Netlify.
* App Successfully Deployed.

## Built With

* React - The web framework used
* Material UI - The react component library

## Sources Used

### NavBar.js
```
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
```
The code above was created by adapting the code by [Material UI](https://mui.com/material-ui/react-app-bar/) as shown below: 
```
const settings = [
  { name: "My Profile", path: "" },
  { name: "Saved Items", path: "" },
  { name: "My Events", path: "/events/myevents" },
  { name: "My Reviews", path: "" },
  { name: "My Blogs", path: "" },
  { name: "Logout", path: "/login" },
];

    <Button
                  key={route.name}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={route.path}
                  sx={{ ml: 3, my: 2, color: "black", display: "block" }}
                >
                  {route.name}
                </Button>

                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    component="a"
                    href={setting.path}
                    sx={{textDecoration:"none"}}
                    color="black"
                  >
                    {setting.name}
                  </Typography>
                </MenuItem>
```
- <!---How---> The code in [Material UI](https://mui.com/material-ui/react-app-bar/) was implemented by Material UI for responsive navigation bar.
- <!---Why---> [Material UI](https://mui.com/material-ui/react-app-bar/)'s Code was used for implementing a navbar for the application.
- <!---How---> [[Material UI](https://mui.com/material-ui/react-app-bar/)'s Code was modified by adding own routes and path. Not hard-coded. 

### Carousel.js
```
     <div className="home__container">
        <Carousel
          autoPlay={false}
          indicators={false}
          className="home__carousel"
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        >
          {bgImages.map((item, i) => (
            <img
              key={i}
              src={item}
              alt={`Amazon Background ${i}`}
              className="home__image"
            />
          ))}
        </Carousel>
      </div>
```
The code above was created by adapting the code by [aizazh1](https://codesandbox.io/s/cleverprogrammerchallenge-cmbkj) as shown below: 
```
<Carousel
          autoPlay={true}
          indicators={true}
          className="carousel"
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        >
          {images.map((item, i) => (
            <img
              key={i}
              src={item}
              alt="carousel-img"
              className="c-image"
            />
          ))}
        </Carousel>
```
- <!---How---> The code in [aizazh1](https://codesandbox.io/s/cleverprogrammerchallenge-cmbkj) was implemented by aizazh1 in codesandbox.
- <!---Why---> [aizazh1](https://codesandbox.io/s/cleverprogrammerchallenge-cmbkj)'s Code was used for implementing a carousel for the application.
- <!---How---> [aizazh1](https://codesandbox.io/s/cleverprogrammerchallenge-cmbkj)'s Code was modified by adding own elements and design properties.

### PrdouctCard.js
```
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
```
The code above was created by adapting the code by [Material UI](https://mui.com/material-ui/react-card/) as shown below: 
```
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Event Thumbnail"
        height="250"
        image={imgurl}
      />
      <CardContent>
        <Chip label={category} size="small" />
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="h7" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/product/${id}`}>
          See Full Specifications
        </Button>
      </CardActions>
    </Card>
```
- <!---How---> The code in [Material UI](https://mui.com/material-ui/react-card/) was implemented by material UI.
- <!---Why---> [Material UI](https://mui.com/material-ui/react-card/)'s Code was used for implementing a card layout.
- <!---How---> [Material UI](https://mui.com/material-ui/react-card/)'s Code was modified by adding data from the json file.

### SpecsTable.js
```
   <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
```
The code above was created by adapting the code by [Material UI](https://mui.com/material-ui/react-table/) as shown below: 
```
<TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.specification}
              </TableCell>
              <TableCell align="right">{row.provided}</TableCell>
            </TableRow>
```
- <!---How---> The code in [Material UI](https://mui.com/material-ui/react-table/) was implemented by material UI.
- <!---Why---> [Material UI](https://mui.com/material-ui/react-table/)'s Code was used for implementing a table layout.
- <!---How---> [Material UI](https://mui.com/material-ui/react-table/)'s Code was modified by adding data from the json file.

### EventCard.js, MyEventCard.js, ReviewCard.js, EventDetails.js, ReviewDetails.js

#### EventCard.js
*Lines 12 - 34*
```
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Event Thumbnail"
        height="160"
        image={imgurl}
        sx={{objectFit: "contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Save</Button>
        <Button size="small" href={`/event/${id}`}>
          More Details
        </Button>
      </CardActions>
    </Card>
```
The code above was created by adapting the code in [MUI Card](https://mui.com/material-ui/react-card/) as shown below: 
```
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
```
- <!---How--->  The code was implemented by Material UI
- <!---Why---> Code was used in multiple comonents because it provides ready made styled card component


### CenteredTabs.js

*Lines 17 - 22*
```
<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs onChange={handleChange} value={value} centered>
        <Tab label="All Events" href='/events/all'/>
        <Tab label="Upcoming Events" href='/events/upcoming'/>
      </Tabs>
    </Box>
```
The code above was created by adapting the code in [MUI Tabs](https://mui.com/material-ui/react-card/) as shown below: 
```
<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
```
- <!---How---> The code in was implemented by Material UI
- <!---Why---> Code was used because it provides ready made styled tabs component


### CreateEvent.js

*Lines 100 - 196*
```
<ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <CalendarMonth />
          </Avatar>
          <Typography component="h1" variant="h5">
            Event Details
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="eventTitle"
                  value={formData.eventTitle.value}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="eventTitle"
                  label="Event Title"
                  helperText={
                    formData.eventTitle.isError &&
                    formData.eventTitle.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="shortDetail"
                  label="Event Description"
                  name="shortDetail"
                  value={formData.shortDetail.value}
                  onChange={handleChange}
                  helperText={
                    formData.shortDetail.isError &&
                    formData.shortDetail.errorMessage
                  }
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
                <BasicDatePicker />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  style={{ width: "100%" }}
                  name="longDetail"
                  value={formData.longDetail.value}
                  onChange={handleChange}
                  placeholder="Detailed Description"
                  id="longDetail"
                  minRows={10}
                  helperText={
                    formData.longDetail.isError &&
                    formData.longDetail.errorMessage
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Event
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
```
The code above was created by adapting the code in [MUI Sign Up component](https://mui.com/material-ui/getting-started/templates/sign-up/) as shown below: 
```
<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
```
- <!---How---> The code in was implemented by Material UI
- <!---Why---> Code was used because it provides ready made Text Fields tabs component and adapted according to state values


### SignUp.js, Login.js, ForgotPassword.js

*Lines 144 - 255*

```
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={formData.firstName.value}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  helperText={
                    formData.firstName.isError &&
                    formData.firstName.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName.value}
                  onChange={handleChange}
                  helperText={
                    formData.lastName.isError && formData.lastName.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formData.email.value}
                  onChange={handleChange}
                  helperText={
                    formData.email.isError && formData.email.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={formData.password.value}
                  onChange={handleChange}
                  label="Password"
                  type="password"
                  id="password"
                  helperText={
                    formData.password.isError && formData.password.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  value={formData.confirmPassword.value}
                  onChange={handleChange}
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  helperText={
                    formData.confirmPassword.isError &&
                    formData.confirmPassword.errorMessage
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
```

The code above was created by adapting the code in [MUI theme](https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/sign-in/SignIn.js) as shown below: 

```
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
```

### BlogList.js

*Lines 18 - 65*

```
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
```

The code above was created by adapting the code in [MUI Card](https://mui.com/material-ui/react-card/) as shown below: 

```
export default function BlogList() {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#FFFFF7" }}>
        <div>
          <>
            <Container maxWidth="xl">
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                </Grid>
              </Grid>
            </Container>
          </>
          <br />
          <NavLink to="/addblog" role="button" class="btn btn-secondary btn-block mx-4" style={{float: 'right'}}>
            Add Blog
          </NavLink>
        </div>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.priv.gc.ca/media/4847/ai.jpg"
                  alt="Will AI takeover the world?"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Will AI takeover the world?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/blog1">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.priv.gc.ca/media/5716/synthetic-data.png"
                  alt="The future of AI"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    The future of AI
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/secondblog">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};
```
- <!---How---> The code in was implemented by Material UI
- <!---Why---> Code was used because it provides ready made styled card component


- The code in [MUI theme](https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/sign-in/SignIn.js) was implemented by Material UI.
- [MUI theme](https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/sign-in/SignIn.js)'s Code was used because to create responsive login, signup and forgot password page. Such they all have same design.
- [MUI theme](https://github.com/mui/material-ui/blob/v5.11.11/docs/data/material/getting-started/templates/sign-in/SignIn.js)'s Code was modified by adding custom validations and changing the UI as required by the page's content.

## Acknowledements

* References

- https://code.visualstudio.com
- https://mui.com/material-ui/
- https://codesandbox.io/s/cleverprogrammerchallenge-cmbkj?file=/src/Pages/Home/Home.js:2611-3099
- https://reactjs.org/
- “Learn Material UI- React Material UI Project Tutorial [2022],” *YouTube*, Feb. 28, 2021.
   https://www.  youtube.com/watch?v=Xoz31I1FuiY
- “Material UI 5 (MUI) React Tutorial | MUI Responsive Real Project,” *YouTube*, Apr. 15, 2022.
   https://www.youtube.com/watch?v=fzxEECHnsvU
- “Tutoial - React Router,” React Router. https://reactrouter.com/en/main/start/tutorial
- “Youtube refused to connect,” The freeCodeCamp Forum, Dec. 12, 2018. 
   https://forum.freecodecamp.org/t/youtube-refused-to-connect/245262
- “use-file-picker,” npm. https://www.npmjs.com/package/use-file-picker
- “React Grid component - Material UI,” *React Grid component - Material UI*.
   https://mui.com/material-ui/react-grid/
- “Material Icons - Material UI,” *Material Icons - Material UI*.
   https://mui.com/material-ui/material-icons/
- [CES](https://live.staticflickr.com/2851/9410953466_575431be3f_b.jpg) - Default Image
- [Apple Event](https://www.apple.com/newsroom/images/live-action/wwdc-2021/Apple_WWDC21-details-announcement_052421_big.jpg.large.jpg) - Apple WWDC Event Image
- [Google I/O](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_5Epz0opQi4hXDJVc1ueMN8-y2JdSm1Y9qUjVZRzMBIjwnfV-0CXtRR7295SjCeUPlo&usqp=CAU) - Google I/O Event Image
- [Microsoft Build](https://images.news18.com/ibnlive/uploads/2022/03/microsoft-build-dates-164871138816x9.jpg) - Microsoft Build Event Image



