import { Switch, Route, Link } from 'react-router-dom';
import FormReportTheft from '../form-report-theft';
import Theft from '../theft';
import Employees from '../employees';
import css from './main.module.css';
import css_app from '../app/app.module.css';

export default function Main() {
    return (
        <main className={css.main}>
            <div className={`${css_app.container} ${css.main_content}`}>
                <nav className={css.navigation}>
                    <ul>
                        <li><Link to ={'/'}><button>Главная страница</button></Link></li>
                        <li><Link to ={'/theft'}><button>Кражи</button></Link></li>
                        <li><Link to ={'/employees'}><button>Сотрудники</button></Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path={'/'}>
                        <p className={css.description}>
                            На нашем сайте Вы можете сообщить об украденном велосипеде, который Вы взяли в прокат.
                        </p>
                        <FormReportTheft />
                    </Route>
                    <Route path={'/theft'}>
                        <Theft />
                    </Route>
                    <Route path={'/employees'}>
                        <Employees />
                    </Route>
                </Switch>
            </div>
        </main>
    );
}