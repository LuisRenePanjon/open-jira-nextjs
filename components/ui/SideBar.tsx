import {
    Box,
    Drawer,
    List,
    Typography,
    ListItemButton,
    ListItemIcon,
    ListItemText, Divider,
} from '@mui/material';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';

const menuItems = [
    {text: 'Inbox', icon: <InboxRoundedIcon/>},
    {text: 'Starred', icon: <StarHalfRoundedIcon/>},
    {text: 'Send email', icon: <MarkEmailUnreadRoundedIcon/>},
    {text: 'Drafts', icon: <DraftsRoundedIcon/>},
];

export const SideBar = () => {
    return (
        <Drawer anchor='left' open={true} onClose={() => {
        }}>
            <Box sx={{width: 300}}>
                <Box sx={{padding: '5px 10px'}}>
                    <Typography variant='h4'>Menú</Typography>
                </Box>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItemButton key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}></ListItemText>
                        </ListItemButton>
                    ))}
                </List>
                <Divider/>
            </Box>
        </Drawer>
    );
};
