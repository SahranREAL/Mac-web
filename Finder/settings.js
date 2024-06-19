// Fonction pour ouvrir la fenêtre des paramètres
function openSettingsWindow() {
    const settingsWindow = document.getElementById('settings-window');
    settingsWindow.style.display = 'block';
}

// Fonction pour fermer la fenêtre des paramètres
function closeSettingsWindow() {
    const settingsWindow = document.getElementById('settings-window');
    settingsWindow.style.display = 'none';
}

// Fonction pour enregistrer les paramètres
function saveSettings() {
    // Ajoutez votre logique de sauvegarde des paramètres ici
    console.log('Paramètres enregistrés');
}

// Ajouter un gestionnaire d'événements pour le bouton "Enregistrer" dans la fenêtre des paramètres
document.getElementById('save-settings-btn').addEventListener('click', saveSettings);

// Sélectionnez le bouton "Fermer" dans la fenêtre des paramètres et ajoutez un gestionnaire d'événements pour le fermer
document.getElementById('close-settings-btn').addEventListener('click', closeSettingsWindow);
