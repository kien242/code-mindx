import * as React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [userName, setUserName] = React.useState('');

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit"> Welcome, {userName}</Button>
          </Toolbar>
        </AppBar>

        <Grid
          sx={{
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Box
            sx={{
              padding: 5,
              border: 2,
              borderRadius: 5
            }}
          >
            <FormControl>
              <Typography
                sx={{
                  textAlign: 'center',
                }}
              >Đăng nhập</Typography>
              <Box sx={{}}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <Button>Login</Button>
              </Box>
            </FormControl>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
