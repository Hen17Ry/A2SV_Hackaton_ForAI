const express = require('express');
const multer = require('multer');
const { SpeechClient } = require('@google-cloud/speech');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

// Configure Multer pour gérer les uploads de fichiers
const upload = multer({ dest: 'uploads/' });

const client = new SpeechClient();

app.post('/transcribe', upload.single('file'), async (req, res) => {
  const filePath = path.join(__dirname, req.file.path);

  const audio = {
    content: fs.readFileSync(filePath).toString('base64'),
  };

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };

  const request = {
    audio: audio,
    config: config,
  };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    
    fs.unlinkSync(filePath); // Supprimer le fichier temporaire
    res.json({ transcription });
  } catch (error) {
    console.error('Erreur lors de la transcription:', error);
    fs.unlinkSync(filePath); // Supprimer le fichier temporaire en cas d'erreur
    res.status(500).send('Erreur lors de la transcription');
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
