import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@lib/supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isRecovery, setIsRecovery] = useState(false);

    useEffect(() => {
        try{
            alert('useEffect runs')
            alert("Supabase URL: " + import.meta.env.VITE_SUPABASE_URL)
            alert("Supabase Key exists: " + (import.meta.env.VITE_SUPABASE_ANON_KEY ? "yes" : "no"))
            // This method retrieves the current local session (i.e local storage).
            supabase.auth.getSession().then(async ({ data: { session }, error }) => {
                if (error) {
                    alert("Error in getSession: " + JSON.stringify(error))
                }
                if (session) {
                    alert("Initial session found: " + JSON.stringify(session.user))
                } else {
                    alert("No session found")
                }
                if (session){
                    // https://www.reddit.com/r/Supabase/comments/yhf2bt/user_gets_logged_in_automatically_when_resetting/
                    // const { data, error } = await supabase.auth.getClaims();
                    // const authMethod = data.claims?.amr?.[0]?.method;
                    // console.log(authMethod);
                }
                
                setSession(session);
                setLoading(false);
            });
        } catch (err) {
            alert("Crash in getSession: " + err.message)
        } finally {
            // Fallback to make sure loading is never stuck
            setLoading(false)
            alert("Loading set to false")
        }

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
