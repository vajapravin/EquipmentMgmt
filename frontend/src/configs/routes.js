import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: Home
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: About
    }
};
