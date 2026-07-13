document.addEventListener("DOMContentLoaded", function() {
    
    // --- GESTION DU SUIVI DE COLIS ---
    const trackingBtn = document.getElementById("trackingBtn");
    const trackingInput = document.getElementById("trackingInput");
    const trackingResult = document.getElementById("trackingResult");
    const statusTitle = document.getElementById("statusTitle");
    const statusDesc = document.getElementById("statusDesc");

    // Ta liste de colis (Tu pourras modifier les statuts ici quand tu le souhaites)
    const colisData = {
        "DEX001": { statut: "📦 Reçu à l'entrepôt (Chine)", desc: "Votre colis est bien arrivé à notre entrepôt à Guangzhou et attend le prochain départ." },
        "DEX002": { statut: "✈️ En transit aérien", desc: "Le colis est dans l'avion en direction du Niger." },
        "DEX003": { statut: "🇳🇪 Arrivé à destination", desc: "Votre colis est disponible à l'agence Dino Excel de Niamey. Vous pouvez venir le récupérer." }
    };

    if (trackingBtn) {
        trackingBtn.addEventListener("click", function() {
            const code = trackingInput.value.trim().toUpperCase();

            if (code === "") {
                alert("Veuillez entrer un numéro de suivi.");
                return;
            }

            trackingResult.style.display = "block";

            // Vérification du code saisi
            if (colisData[code]) {
                statusTitle.innerText = colisData[code].statut;
                statusDesc.innerText = colisData[code].desc;
                statusTitle.style.color = "#c084fc"; // Violet pour le succès
            } else {
                statusTitle.innerText = "❌ Code introuvable";
                statusDesc.innerText = "Ce numéro de suivi ne correspond à aucun colis actif. Vérifiez l'orthographe ou contactez-nous.";
                statusTitle.style.color = "#ef4444"; // Rouge pour l'erreur
            }
        });
    }

    // --- GESTION DU FORMULAIRE DE DEVIS ---
    const devisForm = document.getElementById("devisForm");
    if (devisForm) {
        devisForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const nom = this.querySelector('input[placeholder="Nom complet"]').value;
            const telephone = this.querySelector('input[placeholder="Téléphone"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const pays = this.querySelector('input[placeholder="Pays"]').value;
            const ville = this.querySelector('input[placeholder="Ville"]').value;
            const transport = this.querySelector("select").value;
            const description = this.querySelector("textarea").value;

            const sujet = encodeURIComponent("Demande de devis - Dino Excel");
            const corps = encodeURIComponent(`Nom : ${nom}\nTéléphone : ${telephone}\nEmail : ${email}\nPays : ${pays}\nVille : ${ville}\nTransport : ${transport}\n\nDescription :\n${description}`);

            window.location.href = `mailto:Chamsoudineboubacar172@gmail.com?subject=${sujet}&body=${corps}`;
        });
    }
});

