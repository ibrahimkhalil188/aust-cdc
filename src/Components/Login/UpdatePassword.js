import { useState } from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [updatePassword, updating, error] = useUpdatePassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (updating) {
    return <p>Updating...</p>;
  }
  return (
    <div className="App">
      <input className='input'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          const success = await updatePassword(password);
          if (success) {
            alert('Updated password');
          }
        }}
      >
        Update password
      </button>
    </div>
  );
};

export default UpdatePassword;