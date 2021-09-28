import logo from "./logo.svg";
import { useState } from "react";

import CardList from "./components/CardList";
import Form from "./components/Form";
import axios from "axios";

const data = [
  {
    login: "gaearon",
    id: 810438,
    node_id: "MDQ6VXNlcjgxMDQzOA==",
    avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/gaearon",
    html_url: "https://github.com/gaearon",
    followers_url: "https://api.github.com/users/gaearon/followers",
    following_url:
      "https://api.github.com/users/gaearon/following{/other_user}",
    gists_url: "https://api.github.com/users/gaearon/gists{/gist_id}",
    starred_url: "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/gaearon/subscriptions",
    organizations_url: "https://api.github.com/users/gaearon/orgs",
    repos_url: "https://api.github.com/users/gaearon/repos",
    events_url: "https://api.github.com/users/gaearon/events{/privacy}",
    received_events_url: "https://api.github.com/users/gaearon/received_events",
    type: "User",
    site_admin: false,
    name: "Dan Abramov",
    company: "@facebook ",
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: "dan_abramov",
    public_repos: 252,
    public_gists: 72,
    followers: 68869,
    following: 171,
    created_at: "2011-05-25T18:18:31Z",
    updated_at: "2021-09-06T23:02:24Z",
  },
  {
    login: "Vitao18",
    id: 14141039,
    node_id: "MDQ6VXNlcjE0MTQxMDM5",
    avatar_url: "https://avatars.githubusercontent.com/u/14141039?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Vitao18",
    html_url: "https://github.com/Vitao18",
    followers_url: "https://api.github.com/users/Vitao18/followers",
    following_url:
      "https://api.github.com/users/Vitao18/following{/other_user}",
    gists_url: "https://api.github.com/users/Vitao18/gists{/gist_id}",
    starred_url: "https://api.github.com/users/Vitao18/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Vitao18/subscriptions",
    organizations_url: "https://api.github.com/users/Vitao18/orgs",
    repos_url: "https://api.github.com/users/Vitao18/repos",
    events_url: "https://api.github.com/users/Vitao18/events{/privacy}",
    received_events_url: "https://api.github.com/users/Vitao18/received_events",
    type: "User",
    site_admin: false,
    name: "Victor Feitosa",
    company: null,
    blog: "",
    location: "São Paulo, Brazil",
    email: null,
    hireable: true,
    bio: "I <3 Programming",
    twitter_username: null,
    public_repos: 63,
    public_gists: 45,
    followers: 64,
    following: 161,
    created_at: "2015-09-05T17:38:00Z",
    updated_at: "2021-09-09T17:31:07Z",
  },
  {
    login: "hierope508",
    id: 24360635,
    node_id: "MDQ6VXNlcjI0MzYwNjM1",
    avatar_url: "https://avatars.githubusercontent.com/u/24360635?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/hierope508",
    html_url: "https://github.com/hierope508",
    followers_url: "https://api.github.com/users/hierope508/followers",
    following_url:
      "https://api.github.com/users/hierope508/following{/other_user}",
    gists_url: "https://api.github.com/users/hierope508/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/hierope508/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/hierope508/subscriptions",
    organizations_url: "https://api.github.com/users/hierope508/orgs",
    repos_url: "https://api.github.com/users/hierope508/repos",
    events_url: "https://api.github.com/users/hierope508/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/hierope508/received_events",
    type: "User",
    site_admin: false,
    name: "Iran Lopes dos Santos",
    company: null,
    blog: "",
    location: "São Paulo, Brazil",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 5,
    public_gists: 0,
    followers: 1,
    following: 2,
    created_at: "2016-12-03T20:59:19Z",
    updated_at: "2021-09-28T18:43:41Z",
  },
];

function App() {
  const [profiles, setProfiles] = useState([]);
  const onAdd = async (userName) => {
    const newProfile = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    let newProfiles = [...profiles, newProfile.data];
    setProfiles(newProfiles);
    // console.log("newProfiles: ", newProfiles);
  };
  return (
    <div className="App">
      <Form onAdd={onAdd} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
