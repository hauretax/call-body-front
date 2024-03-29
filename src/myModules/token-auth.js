import  { useEffect, useState } from "react";

const createTokenProvider = () => {

    /* Implementation */
    let _token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH')) || null;
   /* const getExpirationDate = (jwtToken) => {
        if (!jwtToken) {
            return null;
        }
    
        const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
    
        // multiply by 1000 to convert seconds into milliseconds
        return (jwt && jwt.exp && jwt.exp * 1000) || null;
    };

    const isExpired = (exp) => {
        if (!exp) {
            return false;
        }
    
        return Date.now() > exp;
    };*/

    const getToken = async () => {
        if (!_token) {
            return null;
        }
        /*if (isExpired(getExpirationDate(_token.accessToken))) {
            const updatedToken = await fetch('/update-token', {
                method: 'POST',
                body: _token.refreshToken
            })
                .then(r => r.json());
    
            setToken(updatedToken);
        }*/
        return _token ;
    };

    const isLoggedIn = () => {
        return !!_token;
    };

    let observers = [];

    const subscribe = observer => {
        observers.push(observer);
    };
    
    const unsubscribe = observer => {
        observers = observers.filter(_observer => _observer !== observer);
    };

    const notify = () => {
        const isLogged = isLoggedIn();
        observers.forEach(observer => observer(isLogged));
    };

    const setToken = token => {
        if (token) {
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
        } else {
            localStorage.removeItem('REACT_TOKEN_AUTH');
        }
        _token = token;
        notify();
    };

    const getId = () => {
        if (!_token) {
            return null;
        }
        return _token.userId;
    }

    return {
        getId,
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };
};

export const createAuthProvider = () => {

    /* Implementation */
    const tokenProvider = createTokenProvider();
   
    const login = (newTokens) => {
        tokenProvider.setToken(newTokens);
    };
    
    const logout = () => {
        tokenProvider.setToken(null);
        localStorage.clear();
    };

    const authFetch = async (input, init) => {
        const token = await tokenProvider.getToken();
        
        if (!token){
            init = init || {};
            init.headers = {
                ...init.headers,
                Authorization: `Bearer `,
            };
        }
        else{
            init = init || {};
            init.headers = {
                ...init.headers,
                Authorization: `Bearer ${token.token}`,
            };
        }
    
        return fetch(input, init);
    };

    const useAuth = () => {
        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());
    
        useEffect(() => {
            const listener = newIsLogged => {
                setIsLogged(newIsLogged);
            };
    
            tokenProvider.subscribe(listener);
            return () => {
                tokenProvider.unsubscribe(listener);
            };
        }, []);
    
        return [isLogged];
    };

    return {
        useAuth,
        authFetch,
        login,
        logout
    }
};

export const {useAuth, authFetch, login, logout} = createAuthProvider();
export const {getId, isLoggedIn} = createTokenProvider();