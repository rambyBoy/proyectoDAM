var db = firebase.firestore();

    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("surveys").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {

        let survey = document.getElementById("s");

        let card = document.createElement("ons-card");
        let title = document.createElement("div");
        let content = document.createElement("div");

        card.classList.add('ons-card');


        title.innerHTML = "<h2>" + doc.data().title + "</h2>";

        content.innerHTML += "<ons-list-header>" + "Descripción: " + doc.data().description + "</ons-list-header>"
          + "<ons-list-item>" + "Dependencia: " + doc.data().dependence + "</ons-list-item>";

        let button = document.createElement('ons-button')
        button.innerHTML = "Ver grafica"
        button.setAttribute('id', 'iddd')

        button.addEventListener('click', function () {
          localStorage.setItem('graph', this.getAttribute('id'));

          window.location.href = "ramby.html"
        })

        content.append(button)

        card.append(title, content);
        survey.appendChild(card);
      });
    })

    let back_button = document.getElementById("back-button")
    back_button.addEventListener('click', function () {
      window.history.back()
    })