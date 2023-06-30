
import { Container} from 'react-bootstrap';
import ResponsiveDrawer from './Component/nav_test/index.js';


function App() {
  return (
<<<<<<< HEAD
    <div className={`container-fluid ${AppStyle.App}`}>
      <div className='row'>
        <div className='col-4'>
          <ShowUser.showUser
            UserAvatar="https://avatars.githubusercontent.com/u/44479300?v=4"
            UserName="zmkfirmware"
            followers={"14"}
            following={"15"}
          />
=======
    <Container>
      <ResponsiveDrawer/>
>>>>>>> main

      {/* <div className='row'>
        <div className='col-3'>
          <div>
            <ListGroup>
              <ListGroupItem>
                <ShowUser.showUser
                  UserAvatar="https://avatars.githubusercontent.com/u/44479300?v=4"
                  UserName="zmkfirmware"
                  followers={"14"}
                  following={"15"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <ShowUser.showUser
                  UserAvatar="https://avatars.githubusercontent.com/u/44479300?v=4"
                  UserName="zmkfirmware"
                  followers={"14"}
                  following={"15"}
                />
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className='col-8'>
          <ShowRepo.showRepo />
          <ShowRepo.showRepo />
        </div>
      </div> */}
    </Container>
  );
}

export default App;
