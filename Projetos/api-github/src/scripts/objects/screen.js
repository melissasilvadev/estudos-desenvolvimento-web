const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário">
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possue nome cadastrado 😭'}</h1>
                                            <p>${user.bio ?? 'Não possue bio cadastrada 😭'}</p>
                                            <p>Seguidores: ${user.followers} </p>
                                            <p>Seguindo: ${user.following} </p>
                                        </div>
                                    </div>`
        let reposItens = ""
        user.repositories.forEach(repo => {
            reposItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                            <div>
                                <span class="">🍴${repo.forks_count}</span>
                                <span>⭐${repo.stargazers_count}</span>
                                <span>👀${repo.watchers_count}</span>
                                <span>🧑🏽‍💻${repo.language}</span>
                            </div>
            </a>
            </li>`
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${reposItens}</ul></div>`
        }
        let eventsItens = ""
        user.events.forEach(e => {
            if (e.type == "PushEvent") {
                eventsItens += `<li>${e.repo.name}  - ${e.payload.commits[0].message}</li>`
            } else if (e.type == "CreateEvent") {
                eventsItens += `<li>${e.repo.name}  - Sem mensagem de commit</li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="ection">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul></div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }