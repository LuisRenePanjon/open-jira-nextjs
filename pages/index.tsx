import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { MainLayout } from '../components/layouts';

const HomePage: NextPage = () => {
    return <MainLayout title='OpenJira - Home'>
        <Typography variant="h1">Hello World!</Typography>
    </MainLayout>;
};

export default HomePage;
