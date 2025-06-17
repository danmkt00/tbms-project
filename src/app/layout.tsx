import '../styles/globals.css';
export const metadata = {
    title: 'Corul TBMS',
    description: 'Check-in and info app',
    icons: {
        icon: '/tbms-logo.ico'
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
