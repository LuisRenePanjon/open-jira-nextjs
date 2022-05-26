import { Box } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';
import { NavBar, SideBar } from '../ui';

interface Props {
    title?: string;
    children: JSX.Element | JSX.Element[];
}

export const MainLayout: FC<Props> = ({ title = 'OpenJIRA', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar />
            <SideBar />
            <Box sx={{ padding: '10px 20px' }}>{children}</Box>
        </Box>
    );
};
