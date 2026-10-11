import React, { useId, useState } from 'react';

export function ImageField({ value, onChange, name }) {
  const id = useId();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function selectImage(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setError('');
    setBusy(true);
    let bitmap;
    try {
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) throw new Error('Bitte JPG, PNG oder WebP auswählen.');
      if (file.size > 12 * 1024 * 1024) throw new Error('Bitte ein Bild unter 12 MB auswählen.');
      bitmap = await createImageBitmap(file);
      const canvas = document.createElement('canvas');
      const scale = Math.min(1, 1400 / Math.max(bitmap.width, bitmap.height));
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      let source;
      for (const quality of [.85, .7, .55, .4]) {
        source = canvas.toDataURL('image/webp', quality);
        if (source.length <= window.GemDenMemberDesign.MAX_IMAGE_LENGTH) break;
      }
      onChange(window.GemDenMemberDesign.safeImageSource(source));
    } catch (problem) {
      setError(problem.message || 'Dieses Bild konnte nicht geöffnet werden.');
    } finally {
      bitmap?.close();
      setBusy(false);
    }
  }

  return <div className="member-image-field">
    {value && <img src={value} alt="Ausgewähltes Bild" />}
    <label htmlFor={id}>{busy ? 'Bild wird vorbereitet …' : 'Bild auswählen'}</label>
    <input id={id} name={name} type="file" accept="image/jpeg,image/png,image/webp" onChange={selectImage} disabled={busy} />
    <p>Das Bild wird verkleinert und im Seitenentwurf mitgesichert. Es wird erst mit deiner Seite veröffentlicht.</p>
    {value && <button type="button" onClick={() => { onChange(''); setError(''); }}>Bild entfernen</button>}
    {error && <p role="alert">{error}</p>}
  </div>;
}
