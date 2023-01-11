import React, { useState } from 'react';
import { ContainerRepositories, MainContainerRepositories } from './style'

const Repositories: React.FC<any> = ({
    repositories
}) => {
    const [counter, setCounter] = useState(5)

    function incrementCounter() {
        setCounter(counter + 5)
    }

    return (
        <MainContainerRepositories>
            {repositories?.length && (
                <h1>Repositories</h1>
            )}
            <ContainerRepositories>
                {repositories?.slice(0, counter).map((repo: { html_url: string; name: string }) => (
                    <a key={repo.name} href={repo.html_url} className="repository">
                        <h4>{repo.name}</h4>
                    </a>
                ))}
                {counter <= repositories.length && (
                    <button onClick={incrementCounter}>See more</button>
                )}
            </ContainerRepositories>
        </MainContainerRepositories>
    )
}
export default Repositories;