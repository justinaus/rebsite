import { useSuspenseQuery } from '@suspensive/react-query';

type User = {
  email: string;
  id: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export default function List() {
  const { data } = useSuspenseQuery<User[]>({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json(),
      ),
  });

  return (
    <ul
      css={{
        li: {
          color: 'red',
        },
      }}
    >
      {data.map((user) => (
        <li key={user.id}>
          {user.id} - {user.name}
        </li>
      ))}
    </ul>
  );
}
