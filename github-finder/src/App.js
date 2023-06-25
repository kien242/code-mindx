import AppStyle from './App.module.scss';
import * as ShowUser from './Component/ShowUser/index.js'
import * as ShowRepo from './Component/ShowRepo/index.js'

function App() {
  return (
    <div className={`container-fluid ${AppStyle.App}`}>
      <div className='row'>
        <div className='col-3'>
          <ShowUser.showUser
            UserAvatar="https://avatars.githubusercontent.com/u/44479300?v=4"
            UserName="zmkfirmware"
            followers={"14"}
            following={"15"}
          />

          <ShowUser.showUser
            UserAvatar="https://avatars.githubusercontent.com/u/44479300?v=4"
            UserName="zmkfirmware"
            followers={"14"}
            following={"15"}
          />
        </div>
        <div className='col-9'>
          <ShowRepo.showRepo />
          <ShowRepo.showRepo />
        </div>
      </div>
    </div>
  );
}

export default App;
