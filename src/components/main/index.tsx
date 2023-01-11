import React, { useState, FC } from 'react';
import { ContainerContent, ContainerDetail, ContainerInput, ContainerMain } from './style';
import api from '../../services/api/api';
import { FaSearch } from 'react-icons/fa'
import { AiFillDatabase } from "react-icons/ai";


import mascot from '../../assets/githubMascot.png'
import Repositories from '../repositories';

interface ISearch {
    name: string;
    bio: string;
    avatar_url: string;
    company: string;
    location: string;
    email: string;
    twitter_username: string;
    html_url: string;
    public_repos: string;
}

interface IDetails {
    name: string,
    company: string,
    location: string,
    email: string,
    twitter: string,
    url: string,
    public_repos: string,
}

const Details: FC<IDetails> = ({
    name,
    company,
    location,
    email,
    twitter,
    url,
    public_repos,
}) => (
    <ContainerDetail>
        {name && (
            <div className="content-detail">
                <h3>
                    Name
                </h3>
                <p>
                    {name}
                </p>
            </div>
        )}
        {company && (
            <div className="content-detail">
                <h3>
                    Company
                </h3>
                <p>
                    {company}
                </p>
            </div>
        )}
        {location && (
            <div className="content-detail">
                <h3>
                    Location
                </h3>
                <p>
                    {location}
                </p>
            </div>
        )}
        {email && (
            <div className="content-detail">
                <h3>
                    Email
                </h3>
                <p>
                    {email}
                </p>
            </div>
        )}
        {twitter && (
            <div className="content-detail">
                <h3>
                    Twitter
                </h3>
                <p>
                    {twitter}
                </p>
            </div>
        )}
        {url && (
            <div className="content-detail">
                <h3>
                    Github Profile Link
                </h3>
                <a href={url}>
                    {url}
                </a>
            </div>
        )}
        {public_repos && (
            <div className="content-detail">
                <AiFillDatabase title="Public repositories" /><p>{public_repos}</p>
            </div>
        )}
    </ContainerDetail>
)
interface IRepositories {
    name: string;
    html_url: string;
}

const Main: React.FC = () => {
    const [search, setSearch] = useState("")
    const [name, setName] = useState("Name")
    const [bio, setBio] = useState("Bio")
    const [avatar_url, setAvatar_url] = useState(mascot)
    const [company, setCompany] = useState("Company")
    const [location, setLocation] = useState("Location")
    const [email, setEmail] = useState("E-mail")
    const [twitter, setTwitter] = useState("Twitter")
    const [url, setUrl] = useState("url")
    const [publicRepos, setPublicRepos] = useState("Repositories")
    const [repositories, setrepositories] = useState<IRepositories[]>([])


    const handlesearch = () => {
        api.get<ISearch>(`/users/${search}`).then((res) => {
            setName(res.data.name)
            setBio(res.data.bio)
            setAvatar_url(res.data.avatar_url)
            setCompany(res.data.company)
            setLocation(res.data.location)
            setEmail(res.data.email)
            setTwitter(res.data.twitter_username)
            setUrl(res.data.html_url)
            setPublicRepos(res.data.public_repos)
        })
            .catch((err) => {
                console.log(err)
            })

        api.get(`users/${search}/repos`).then((res) => {
            setrepositories(res.data)
            console.log(repositories)
        })
    }

    return (
        <ContainerMain>
            <ContainerInput>
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Digite seu username do github"
                />
                <button onClick={handlesearch}>
                    <FaSearch />
                </button>
            </ContainerInput>
            <ContainerContent>
                {bio && (
                    <div className="content-bio">
                        <strong><h2><i>About me</i></h2></strong>
                        {bio}
                    </div>
                )}
                <div className="content-image">
                    <img src={avatar_url} alt="foto de perfil" />
                </div>
                <div className="containerDetail">
                    <Details
                        name={name}
                        company={company}
                        location={location}
                        email={email}
                        twitter={twitter}
                        url={url}
                        public_repos={publicRepos}
                    />
                </div>
            </ContainerContent>

            <Repositories 
                repositories = {repositories}
            />
        </ContainerMain>
    )
}
export default Main;