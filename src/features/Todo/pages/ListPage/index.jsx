import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from 'features/Todo/components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    { id: 1, title: 'Eat', status: 'new' },
    { id: 2, title: 'Sleep', status: 'completed' },
    { id: 3, title: 'Code', status: 'new' },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const parasm = queryString.parse(location.search);

    return parasm.status || 'all';
  });

  useEffect(() => {
    const parasm = queryString.parse(location.search);
    setFilterStatus(parasm.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    // newTodoList[idx] = newTodo;

    // toggle state
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilterStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    // setFilterStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    // setFilterStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h3>What to do </h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>TodoList</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
