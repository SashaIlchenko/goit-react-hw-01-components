import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Container } from './App.styled';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data-base/user.json';
import data from '../data-base/data.json';
import friends from '../data-base/friends.json';
import transactions from '../data-base/transactions.json';


export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
