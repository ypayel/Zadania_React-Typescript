// ZADANIE 1
// Profil w sieci społecznościowej • Należy utworzyć komponent , przy pomocy którego można wyświetlać informację o użytkowniku sieci społecznościowej. Informacje o użytkowniku znajdują się w stanie komponentu.

// Opis komponentu Profile

// username — nazwa użytkownika
// tag — tag w sieci społecznościowej @
// location — miasto i państwo
// phone - numer telefonu
// avatar — odnośnik do awataru
// stats — obiekt z informacjami o aktywności




import React, { useState } from 'react'

type Info = {
      id: number;
      name: string;
      tag: string;
      location: string;
      phone: number;
      avatar: string;
      stats: boolean;
}

const usersInfo: Info[] = [
      {
            id: 0,
            name: 'Name',
            tag: '@tag',
            location: 'Polska',
            phone: 123456,
            avatar: '',
            stats: true,
      },

      {
            id: 1,
            name: 'Nameddddddd',
            tag: '@tag',
            location: 'Polska',
            phone: 123456,
            avatar: '',
            stats: true,
      },

      {
            id: 2,
            name: 'Name34254',
            tag: '@tag',
            location: 'Polska',
            phone: 123456,
            avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/14/man-156837_1280.png',
            stats: true,
      },

]

const Profile = () => {

      // zadanie 2
    // Stwórz liste profili
    // lista profili (obiektów typu ProfileType) bedzie przechowywana w zmiennej profiles w pliku App.tsx
    // Profile type powinien zostac rozszerzony o wlasciwosc "_id: string"
    // wlasciwosc "_id" bedzie przekazywana do atrybutu key w metodzie map
    // Zakonczone zadanie - wyswietlana lista profili

  const [isCollapsed, setCollapsed] = useState(false);

  const toggleIsCollapsed = (id: number) => {
      setCollapsed(!isCollapsed);
  }
  
    return (
      <ul>
        {usersInfo.map(({ id, name, tag, location, phone, avatar, stats }) => (
          <li key={id}>
            {isCollapsed ? <>
              <h2>Name: {name}</h2>
              <p>Tag: {tag}</p>
              <p>Location: {location}</p>
              <p>Phone: {phone}</p>
              {avatar ? (
                <img
                  className="avatar"
                  width={100}
                  height={100}
                  src={avatar}
                  alt={name}
                />
              ) : (
                <span>No avatar</span>
              )}
              <p>Stats: {(stats).toString()}</p>
            </> : <h2>Name: {name}</h2>}
            <button onClick={() => toggleIsCollapsed(id)}>Show info</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Profile;