import React, { useEffect } from 'react';
import { getClients } from '../../features/clients/clientSlice';
import { useSelector, useDispatch } from 'react-redux';
function Clients() {
  const { clients, isLoading } = useSelector((store) => store.client);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, []);

  if (isLoading) return <div>is loading...</div>;
  return (
    <div>
      {clients.length}
      {clients.map((client) => {
        return <div>{client.name}</div>;
      })}
    </div>
  );
}

export default Clients;
