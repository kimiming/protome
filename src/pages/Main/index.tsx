import React from 'react';
import * as styles from './style.less';
import Header from '../Main/components/Header';
import SearchForm from '../Main/components/SearchForm';
import ListTabs from '../Main/components/ListTabs';
interface IProps { };

class Main extends React.Component<IProps> {
  render() {
    return (
      <div className={styles.main}>
        <Header />
        <SearchForm />
        <ListTabs />
      </div>

    )
  }
}

export default Main;