import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Checkbox from '@/components/checkbox/Checkbox2';
import axiosInstance from '@/api/axiosInstance'
import Loader from '../../components/loader/Loader';
import { useAlert } from '@/hooks/use-alert';

const SetPassword = () => {
    const { AlertBox, showAlert } = useAlert();
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tokenParam = searchParams.get('token');
        if (tokenParam) {
            setToken(tokenParam);
        } else {
            showAlert('Token not found in the URL', 'error');
        }
    }, [location.search, showAlert]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (data.password !== data.confirmPassword) {
            showAlert("Password doesn't match", 'error');
        } else {
            try {
                const res = await axiosInstance.post('auth/set-password', {
                    token,
                    newPassword: data.password,
                });
                if (res.data.success) {
                    e.target.reset();
                    navigate('/login', { replace: true });
                } else {
                    showAlert(res.data.message, 'error');
                }

            } catch (error) {
                showAlert('An error occurred. Please try again.', 'error');
            }
        }
        setLoading(false);
    };

    return (
        <>
            <AlertBox />
            <Loader loading={loading} />
            <h1>Set Password</h1>
            <form className="form-input" onSubmit={handleSubmit}>
                <label htmlFor="password">Password</label>
                <input type={showPassword ? 'text' : 'password'} name="password" required />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type={showPassword ? 'text' : 'password'} name="confirmPassword" required />
                <Checkbox name="Show Password" cur={showPassword} toggle={() => setShowPassword(!showPassword)} />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default SetPassword;
