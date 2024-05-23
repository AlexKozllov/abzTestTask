import './App.scss';
import Banner from './banner/Banner.js';
import Layout from './layout/Layout.js';
import sprite from '../sprites/sprite.svg';
import Users from './users/UserList.js';
import RegistrationForm from './registrationForm/RegistrationForm.js';

function App() {
    return (
        <Layout>
            <Banner />
            <Users />
            <RegistrationForm />
        </Layout>
    );
}

export default App;
