export const BASE_URL = 'https://anastasia.gorlina.front.nomoreparties.co';

// проверка ответа от сервера
const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/sign-up`, {
        method: 'POST',
        headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
    .then(checkResponse)
};

// функция, которая будет проверять логин и пароль пользователя
// на соответствие какому-либо профилю, хранящемуся в базе данных
export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/sign-in`, {
        method: 'POST',
        headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include', // теперь куки посылаются вместе с запросом
        body: JSON.stringify({email, password})
    })
    .then(checkResponse)
    /*.then((data) => {
        //console.log(data)
        // сохраняем токен в localStorage
        localStorage.setItem('jwt', data.token);
        return data;
    })*/
    .catch(err => console.log(err))
};

export const logout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
    })
    .then(checkResponse)
    .catch(err => console.log(err))
}