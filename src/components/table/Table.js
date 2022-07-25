import Table from 'react-bootstrap/Table';
import {AiFillDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";

function Tables({users}) {
  return (
    <div className='container col-4'>
    <h2 className='w-100 mb-4 display-6 bg-white '>Contacts</h2>
        <Table className='bg-white' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user) => {
        return (
          <tr>
          <td>{user.name}</td>
          <td>{user.pnumber}</td>
          <td>{user.gender}</td>
          <td><AiFillDelete/></td>
          <td><FiEdit/></td>
        </tr>
        )
      })}
        
      </tbody>
    </Table>
    </div>
    
  );
}

export default Tables;