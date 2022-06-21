import './App.css';
import MyAccount from './components/MyAccount/MyAccount';
import Avatar from './components/Avatar/Avatar';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBox from './components/SearchBox/SearchBox';
import { FaTrash } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBox placeholder={" Search"} />
        <MyAccount>
          <Avatar src="" alt="" />
          <h1>Name</h1>
        </MyAccount>
      </header>

      <section>



        <nav className="DashBoard">
          <Sidebar />

        </nav>
        <article className="Cards-section">

          <div id='cards-section-top'>
            <h1 id="cards-section-top-title"> Patients </h1>
          </div>
          <div id='cards-section-bottom'>
            <div className="Cards-table">
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
              <div className="Card">
                <div className='card-header'>
                  <div className='card-header-photo-name-container'>
                    <img className='card-photo' src='https://i.ibb.co/f0HDrdT/card-photo-pacient-10.png' alt=''></img>
                    <div className='card-name'  >Kiran Acharya</div>
                  </div>
                  <div className='card-header-trash-icon-container'>
                    <div id='trash'><FaTrash /></div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-content-age-gender'>28 yrs, male</div>
                  <div>+91 9876543215</div>
                </div>
                <footer className='card-footer'>
                  <div>VIEW</div>
                </footer>
              </div>
            </div>
          </div>

        </article>

      </section>


    </div >
  );
}


export default App;
