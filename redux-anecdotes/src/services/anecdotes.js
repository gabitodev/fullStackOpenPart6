import axios from 'axios';

const baseUrl = 'http://localhost:3003/anecdotes';

const getAll = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

const createNew = async (anecdoteObject) => {
  const { data } = await axios.post(baseUrl, anecdoteObject);
  return data;
};

const updateVote = async (id, anecdoteObject) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, anecdoteObject);
  return data;
}

const anecdoteService = { getAll, createNew, updateVote }

export default anecdoteService;