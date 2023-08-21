import axios from 'axios';

const baseUrl = 'http://localhost:3001/todos';


export const getTodos = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
    .catch(error => {
    //   console.error('Error fetching todos:', error);
      throw error;
    });
};

export const getAddTodo = (newPost) => {
    return axios.post(baseUrl, JSON.stringify(newPost), {
        headers  : {
            "Content-Type" : "application/json"
        },
    })
    .then(response => response.data)
    .catch(error => {
    //   console.error('Error Adding New Todo Task:', error);
      throw error;
    });
}


export const getDeleteTodo = (id) => {
  const url = `${baseUrl}/${id}`;

  return axios.delete(url)
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
}


export const updateTodo = (id, data) => {
  const url  = `${baseUrl}/${id}`;

  return axios.patch( url, data, {
    headers:{
       "Content-Type" : "application/json"
    }
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
}