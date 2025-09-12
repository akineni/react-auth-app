import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@lib/supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isRecovery, setIsRecovery] = useState(false);

    useEffect(() => {
        // This method retrieves the current local session (i.e local storage).
        supabase.auth.getSession().then(async ({ data: { session } }) => {
            if (session){
                // https://www.reddit.com/r/Supabase/comments/yhf2bt/user_gets_logged_in_automatically_when_resetting/
                // const { data, error } = await supabase.auth.getClaims();
                // const authMethod = data.claims?.amr?.[0]?.method;
                // console.log(authMethod);
            }
            
            setSession(session);
            setLoading(false);
        })

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setSession(session);

                if (event === "PASSWORD_RECOVERY") {
                    setIsRecovery(true);
                }
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ session, loading, isRecovery }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
