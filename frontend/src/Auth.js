export const BASE_URL = 'https://anastasia.gorlina.back.nomoreparties.co';

// проверка ответа от сервера
const addResult = (res) => {
    // тут проверка ответа
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export const registration = (email, password) => {
    return fetch(`${BASE_URL}/sign-up`, {
        method: 'POST',
        headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({password, email})
    })
    .then(addResult)
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
    .then(addResult)
    /*.then((data) => {
        //console.log(data)
        // сохраняем токен в localStorage
        localStorage.setItem('jwt', data.token);
        return data;
    })*/
    .catch(err => console.log(err))
};

export const logout = () => {
    return fetch(`${BASE_URL}/sign-out`, {
        method: "GET",
        headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        credentials: "include",
    })
    .then(addResult)
    .catch(err => console.log(err))
}