import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@lib/supabaseClient';

export default function AuthCallback() {
	// https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=framework&framework=nextjs&queryGroups=environment&environment=client#signing-users-in
	const navigate = useNavigate();

	useEffect(() => {
		const handleSession = async () => {
			const { data, error } = await supabase.auth.getSession();
			
			if (error) {
				console.error('Auth error:', error);
				return;
			}

			if (data?.session) {
				navigate('/dashboard');
			} else {
				navigate('/login');
			}
		};

		handleSession();
	}, [navigate]);
}

