const URL = 'http://localhost:3001';

function checkRes(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`ERROR! => ${res.status}`);
    }
}

export const register = (name, email, password) => {
    return fetch(`${URL}/signup`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
    })
        .then(checkRes)
        .then((res) => console.log(res))
};

export const login = (email, password) => {
    return fetch(`${URL}/signin`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then(checkRes)
};

export const logout = () => {
    return fetch(`${URL}/signout`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'include',
    })
}


export const checkToken = () => {
    return fetch(`${URL}/users/me`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'include',
    })
        .then(checkRes)
        .then((res) => res)
};
