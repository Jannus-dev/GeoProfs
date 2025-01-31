import { ref } from 'vue';
import { useApiConnector } from "@/composables/useApiConnector.ts";

const { patch } = useApiConnector();

const isAuth = ref(false); // Houdt bij of de gebruiker is ingelogd
const token = ref<string | null>(null); // Houdt het authenticatietoken bij

// Stel authenticatiestatus in na inloggen
const setAuth = (authToken: string, remember: boolean) => {
    isAuth.value = true;
    token.value = authToken;

    if (remember) {
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('authToken', authToken);
    } else {
        sessionStorage.setItem('isAuth', 'true');
        sessionStorage.setItem('authToken', authToken);
    }
};

// Controleer of de gebruiker is ingelogd
const checkAuth = async () => {
    const storedAuth = localStorage.getItem('isAuth') || sessionStorage.getItem('isAuth');
    const Authorization = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

    if (storedAuth === 'true' && Authorization) {
        isAuth.value = true;
        token.value = Authorization;
        return;
    }

    if (Authorization) {
        try {
            const response = await patch('auth/check', {},{ token: Authorization });

            if (response.status === 200) {
                isAuth.value = true;
                token.value = Authorization;
                localStorage.setItem('isAuth', 'true');
                sessionStorage.setItem('isAuth', 'true');
            } else {
                logout();
            }
        } catch (error) {
            console.error('Token validatie mislukt:', error);
            logout();
        }
    } else {
        logout();
    }
};

// Uitloggen
const logout = () => {
    isAuth.value = false;
    token.value = null;
    localStorage.removeItem('isAuth');
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('isAuth');
    sessionStorage.removeItem('authToken');
};

export const useAuthStore = () => {
    return { isAuth, token, setAuth, checkAuth, logout };
};
