# Subir a GitHub

El proyecto está listo. Solo falta crear el repositorio en GitHub y hacer push.

## Pasos

### 1. Crear el repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repo: `la-velada-vi-demo`
3. **No** marques "Add a README" (ya tienes uno)
4. Crea el repositorio

### 2. Ajustar el remoto (si tu usuario es distinto)

Si tu usuario de GitHub no es `vittoriogambi`, cambia el remoto:

```bash
cd la-velada-vi-demo
git remote set-url origin https://github.com/TU_USUARIO/la-velada-vi-demo.git
```

### 3. Push

```bash
git push -u origin main
```

### 4. (Opcional) Dominio público

En GitHub, ve a **Settings → General → Danger Zone → Change visibility** y hazlo público si quieres que Midudev pueda ver el código.

---

**Estado actual:** Commit realizado localmente con todo el proyecto. El remoto `origin` apunta a `https://github.com/vittoriogambi/la-velada-vi-demo.git`.
