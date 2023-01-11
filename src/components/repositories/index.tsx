import React from 'react';
import { ContainerRepositories } from './style'


const Repositories: React.FC<any> = ({
    repositories
}) => {
    return (
        <ContainerRepositories>
            {repositories?.map((repo: { html_url: string; name: string }) => (
                <a href={repo.html_url} className="repository">
                    <h4>{repo.name}</h4>
                </a>
            ))}
        </ContainerRepositories>
    )
}
export default Repositories;