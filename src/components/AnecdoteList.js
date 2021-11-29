import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVotes } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote.content, anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    // if (state.filter !== "INPUT") {
    //   return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    // }
    return state.anecdotes
  });
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const handleVote = (content, id) => {
    const message = `You voted '${content}'`;
    dispatch(setNotification(message));
    dispatch(addVotes(id));
    setTimeout(() => dispatch(removeNotification()), 5000)
  };
  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={handleVote} />
      ))}
    </div>
  );
};

export default AnecdoteList;
