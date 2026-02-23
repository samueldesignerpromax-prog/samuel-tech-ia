fetch("https://SEU-BACKEND.vercel.app/produtos")
.then(res => res.json())
.then(data => {
    const div = document.getElementById("produtos");

    data.forEach(produto => {
        div.innerHTML += `
        <div class="card">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco}</p>
        </div>
        `;
    });
});
