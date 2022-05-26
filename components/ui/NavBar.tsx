import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

export const NavBar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton size="large" edge="start">
                    <WidgetsRoundedIcon />
                </IconButton>
                <Typography variant="h6">
                    OpenJira
                </Typography>
                <IconButton edge="end" sx={{ right: '20px', flex: 'display' , position:'absolute' }}>
                    <ModeNightRoundedIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        );
};
