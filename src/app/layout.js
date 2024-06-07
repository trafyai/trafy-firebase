import { AuthContextProvider } from './context/AuthContext';
import '../app/globals.css';
import Navbar from '../components/Navbar';
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthContextProvider>
                    <Navbar />
                    {children}
                </AuthContextProvider>
            </body>
        </html>
    );
}
