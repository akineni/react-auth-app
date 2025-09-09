import { APP_URL } from "../config/appConfig";
import { supabase } from "../lib/supabaseClient";

export async function signInWithEmail({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;
    return data;
}

export async function signInWithOAuth() {
    const redirectTo = `${APP_URL}/dashboard`;
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo
        }
    });

    if (error) throw error;
    return data;
}

export async function signUpNewUser({ email, password, fullName }) {
    const { data, error } = await supabase.auth.signUp({
        fullName,
        email,
        password,
        options: {
            // emailRedirectTo: 'https://example.com/welcome',
            data: {
                fullName: fullName
            }
        },
    });
    if (error) throw error;
    return data;
}

export async function resetPassword(email) {
    const redirectTo = `${APP_URL}/reset-password`;
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo,
    });

    if (error) throw error;
    return data;
}

// Change password (for logged-in users OR after reset link)
export async function changePassword(newPassword) {
    const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
    });

    if (error) throw error;
    return data;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

export async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data?.user;
}
