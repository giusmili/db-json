export const author = {
    readAuthor() {
     // Fetch data for authors
      fetch("http://localhost:3000/authors")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur réseau pour les auteurs !");
          }
          return response.json();
        })

        .then((authors) => {
          authors.forEach((author) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${
              author.name
            }</strong> : ${author.books.join(", ")}`;
            authorList.appendChild(li);
          });
        })

        .catch((error) => {
          console.error("Erreur lors du fetch des auteurs:", error);
        });
    },
  };