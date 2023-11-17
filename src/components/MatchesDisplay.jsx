// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// const MatchesDisplay = ({ matches, setClickedUsers }) => {
//   const [matchedProfiles, setMatchedProfiles] = useState(null);
//   const matchedUserIds = matches.map(({ user_id }) => user_id);
//   const [cookies, setCookie, removeCookie] = useCookies(null);
//   const userId = cookies.UserId;
//   const getMatches = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/users", {
//         params: { userIds: JSON.stringify(matchedUserIds) },
//       });
//       setMatchedProfiles(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getMatches();
//   }, [matches]);
//   console.log(matchedProfiles);
//   const filteredMatchedProfiles = matchedProfiles?.filter(
//     (matchedProfile) =>
//       matchedProfile.matches.filter((profile) => profile.user_id === userId)
//         .length > 0
//   );

//   return (
//     <div className="matches-display">
//       {filteredMatchedProfiles?.map((match, index) => (
//         <div
//           key={{ index }}
//           className="match-card"
//           onClick={() => setClickedUsers(match)}
//         >
//           <div className="img-container">
//             <img src={match?.url} alt={match?.first_name + "profile"} />
//           </div>
//           <h3>{match?.first_name}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MatchesDisplay;

import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const matchedUserIds = matches.map(({ user_id }) => user_id);
  const userId = cookies.UserId;

  const getMatches = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userIds: JSON.stringify(matchedUserIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches();
  }, [matches]);

  // const filteredMatchedProfiles = matchedProfiles?.filter(
  //   (matchedProfile) =>
  //     matchedProfile.matches.filter((profile) => profile.user_id === userId)
  //       .length > 0
  // );
  console.log(matchedProfiles);
  return (
    <div className="matches-display">
      {matchedProfiles?.map((match, _index) => (
        <div
          key={_index}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          <div className="img-container">
            <img src={match?.url} alt={match?.first_name + " profile"} />
          </div>
          <h3>{match?.first_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MatchesDisplay;
